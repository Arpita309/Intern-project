import React from 'react'
import './deliverables.css'
import {SideBar} from '../sideBar/sideBar'
import {Link} from 'react-router-dom'
import AddCustom from '../addCustomDelivery/addCustomDelivery'
import SliderComponent from '../deliverySlider/deliverySlider'
import PhasesRow from '../phasesSlider/phasesSlider'
import axios from 'axios'
let filter={}
class Delivery extends React.Component{
    constructor(props){
        super(props)
        this.state={
           showPlatform:false,firstDelivery:false,
           custom:[],count:1,platformList:[],
           selectedPlatform:[],advance:false,teams:{},dropdown:false,teamLocation:'Anywhere',search:'',
           
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:4000/configurations`)
          .then(res => {
            const data = res.data;
            this.setState({platformList: data[0].platforms });
          }) 
          axios.get(`http://localhost:4000/teams`)
          .then(res => {
            const data = res.data;
            this.setState({teams:data[0].teams });
          })  
    }
    platform=()=>{
        this.setState({showPlatform:!this.state.showPlatform})
    }
    showInfobox=(e)=>{
        if(e.target.id==1){
            this.setState({firstDelivery:true})
        }
        else{
            console.log('close')
            this.setState({firstDelivery:false})
        }
    }
    AddCustom=()=>{
        this.setState({count:this.state.count+1})
        this.setState({custom:[...this.state.custom,<AddCustom count={this.state.count}/>]})
    }
    selectPlatform=(icon)=>{
        this.state.selectedPlatform=[...this.state.selectedPlatform,icon]
    }
    showAdvance=()=>{
        this.setState({advance:!this.state.advance})
    }
    showDropdown=()=>{
        this.setState({dropdown:true})
       
    }
    closeDropdown=()=>{
        this.setState({dropdown:false})
       
    }
    setTeamLocation=(title)=>{
        this.setState({teamLocation:title,dropdown:false})
    }
    handleChange=(e)=>{
        
        this.setState({search:e.target.value})
        {filter=this.state.teams.all.data.filter(info=>info.attributes.title.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1)}
    }
    
    render(){
        
       console.log(filter)
        return(
           
            <div className='wrapper'>
                <div className='middlePart'>
                    <div className='deliveryHolder'>
                        <app-general-phase-platform>
                            <div  className={`platformBox ${this.state.advance?'disableBox':''}`}>
                                <h3>Decide your deliverables</h3>
                                <p>Select platform for your product</p>
                                <ul>
                                    
                                    {this.state.selectedPlatform.map(value=>
                                        <li>
                                            <img src={value}></img>
                                        </li>)}
                                    <li  className="moreplatform" onClick={this.platform}>
                                        <em  className="icon-plus"></em>
                                    </li>
                                </ul>
                            </div>
                            
                            {this.state.showPlatform?<platform-list  className="forMobileNew">
                            <div  className='platformSidebarOverlay active'></div>
                            <div  className='platformSidebar active'>
                                <div  className="topHead">
                                    <h3>Platforms</h3>
                                    <div className="closeBar"><em  className="icon-cancel"  onClick={this.platform}></em></div>
                                </div>
                                <div  className="platformListing">
                                    <perfect-scrollbars>
                                        <div style={{position: 'static'}} className="ps"> 
                                            <div className="ps-content">
                                                <ul>
                                                {this.state.platformList.map(data=>
                                                data.attributes.map(platform=>
                                                    <li  key={platform.id} onClick={(e)=>{this.selectPlatform(platform.icon)}}>
                                                        <div  className="platformImg">
                                                            <img  alt="" src={platform.icon}></img>
                                                        </div>
                                                        <div  className="platformName">{platform.title}</div>
                                                        <div className="platformCheck">
                                                            <input  type="checkbox" id={platform.id}></input>
                                                            <label  for={platform.id}></label>
                                                        </div>
                                                    </li>
                                                    ))}
                                                    
                                                    
                                                </ul>
                                            </div></div>
                                        </perfect-scrollbars>
                                    </div>
                                </div>
                            </platform-list>:null}
                        </app-general-phase-platform>
                        <div className='phasesSection'>
                            <h2> Select phases for your product 
                                <div  className="advanceTab" onClick={this.showAdvance}>
                                    <span>Advance</span>
                                    <strong className={this.state.advance?'active':''}></strong>
                                </div>
                            </h2>
                            
                                        
                                        <PhasesRow custom={this.state.custom} />
                                        
                                        
                                        
                                    
                            <div  className="addButton" onClick={this.AddCustom}><em  className="icon-plus" ></em><span>Add custom phase</span></div>
                        </div>
                        <div  className="planDelivery">
                            <h3>When do you want the delivery?</h3>
                            <div  className="rowBoxes">
                                <team-card  >
                                    <div className={`teamBox ${this.state.advance?'':'hide'}`}>
                                        <h4>Your team to be located in</h4>
                                        <div  className="customDropdown" >
                                            <div  className="selectedValue" onClick={this.showDropdown}>{this.state.teamLocation}</div>
                                            {this.state.dropdown?<div className='timezoneDropdown'>
                                            
                                                <div  className="closeIcon" onClick={this.closeDropdown} ><em  className="icon-cancel" ></em></div>
                                                <div  className="timezoneSearch"><input  type="text" placeholder="Search" className="form-control" onChange={this.handleChange}></input>
                                                    <button  type="submit"><em  class="icon-magnifying"></em></button></div>
                                                <div className='timezoneList'>
                                                    <ul>
                                                    
                                                        
                                                        {this.state.search?'':<React.Fragment><li><strong>Popular Timezones</strong></li>
                                                        {this.state.teams.popular.all.data.map(value=>
                                                           <li key={value.id} className={`canBeSelected ${this.state.teamLocation===value.attributes.title?'selectedzone':''}`} onClick={(e)=>this.setTeamLocation(value.attributes.title)}>{value.attributes.title}</li>
                                                        )}
                                                        <li ><strong >All Timezones</strong></li></React.Fragment>}
                                                        
                                                        {filter.length?filter.map(value=>
                                                         <li key={value.id} className={`canBeSelected ${this.state.teamLocation===value.attributes.title?'selectedzone':''}`} onClick={(e)=>this.setTeamLocation(value.attributes.title)}>{value.attributes.title}</li>):this.state.teams.all.data.map(value=>
                                                         <li key={value.id} className={`canBeSelected ${this.state.teamLocation===value.attributes.title?'selectedzone':''}`} onClick={(e)=>this.setTeamLocation(value.attributes.title)}>{value.attributes.title}</li>
                                                        )}
                                                    </ul>
                                                </div>    
                                            </div>:''}
                                        </div>
                                    </div>
                                </team-card>
                                <app-general-phase-speed>
                                   {this.state.advance?'':<div  className="speedBox">
                                        <h4 >Select a delivery speed</h4>
                                        <div  className="speedSlider">
                                        </div>
                                    </div>}
                                </app-general-phase-speed>
                                <div  className="planDates" >
                                    <p>First delivery: 
                                        <strong >11 November 2020</strong>
                                        <span  className="infoIcon">
                                            <em  className="icon-infonew"><img src='https://studio.builder.ai/assets/images/info_blue.png' id='1' onClick={(e)=>this.showInfobox(e)}></img></em>
                                            {this.state.firstDelivery?<span  className="infoOverlay"></span>:''}
                                            <span  className={`infoContent ${this.state.firstDelivery?'active':''}`}>
                                                <span  className="icon-cancel"  onClick={this.showInfobox}></span> You will get 
                                                <u> 24 features</u> 
                                                in first delivery that we consider to be the minimum needed for you to test your system. 
                                            </span>
                                        </span>
                                    </p>
                                    <p>Final delivery: 
                                        <strong>19 November 2020</strong>
                                    </p>
                                </div>
                            </div></div>
                        <div className='additionalServices'>
                            <h2>Add these services to nurture your idea</h2>
                            <div className='rowBoxes'>
                                <div  className="serviceBox selected">
                                    <div  className="sectionIcon">
                                        <img  src="https://studio.builder.ai/assets/images/buildercare_logo.png" width="162" height="29" alt=""></img>
                                        <div  className="checkIcon">
                                            <input  type="checkbox" id="builderCare"></input>
                                            <label  htmlFor="builderCare"><em></em></label>
                                        </div>
                                    </div>
                                    <h3>How Builder Care protects your software</h3>
                                    <ul>
                                        <li ><strong>Confidence:</strong> round-the-clock technical support for third party updates (API/SDK).</li>
                                        <li ><strong>Relevance:</strong> App upgrades for all the latest Android/ iOS versions.</li>
                                        <li><strong>Competitive edge:</strong> security patches (both app and infrastructure level).</li>
                                    </ul>
                                    <h4 ><a  href="https://www.builder.ai/builder-care" target="_blank">Learn more</a></h4>
                                    <div  className="footerRow">
                                        <h5><strong > ₹5,242.57 </strong>/month</h5>
                                    </div>
                                </div>
                                <div  className="serviceBox selected">
                                    <div  className="sectionIcon">
                                        <img  src="https://studio.builder.ai/assets/images/buildercloud_logo.png" alt=""></img>
                                        <div  className="checkIcon">
                                            <input  type="checkbox" id="builderCloud"></input>
                                            <label  htmlFor="builderCloud"><em></em></label>
                                        </div>
                                    </div>
                                    <h3 >Builder Cloud helps you scale your business</h3>
                                    <ul>
                                        <li><strong>Commitment-free savings:</strong> our customers saved over $4.5m, last year.</li>
                                        <li><strong>World-class analytics:</strong> Optimise your software and infrastructure.</li>
                                        <li><strong>Best-in-class multicloud:</strong> AWS, Digital Ocean, Azure and more. Just one bill (for a lot less).</li>
                                    </ul>
                                    <h4 ><a  href="https://www.builder.ai/builder-cloud" target="_blank">Learn more</a></h4>
                                    <div  className="footerRow">
                                        <div  className="numberUser">
                                            <h3 >Number of users <strong >0 - 500</strong></h3>
                                            <div className="userSlider"></div>
                                        </div>
                                        <h5 ><strong >₹2,266.94</strong> /month</h5> 
                                        <h6 >*This is an estimated price for cloud hosting and will vary according to usage.</h6>
                                    </div>
                                </div>           
                            </div>
                        </div>
                    </div>
                    <div className='deliveryBottomBar active'>
                    <div className='appBottomBar'>
                    <div className="priceBox">
                        <h3 >
                            <span>Installment</span> ₹34,931.00 / week <em ></em>
                        </h3>
                    </div>
                
                    <div  className="durationBox">
                        <h3>
                            <span>Duration</span> 24 weeks
                        </h3>
                    </div>
                    <div className="maxpriceBox">
                        <h3>
                            <span >Max Price</span>
                            <strong>₹8,38,352.00</strong>
                        </h3>
                        <div  className="phasebreakBox">
                            <div  className="phaseIcon">
                                <img alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img>
                            </div>
                            <div  className="phasebreakOverlay"></div>
                        </div>
                    </div>
                    <div  className="applyPromoBox">
                        <span className="promo-hd">Promotion </span>
                        <div  className="promo-container">
                            <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                            <button  type="button">Apply Promotion</button>
                        </div>
                    </div>
                    <div  className="previewBottom">
                        <div >
                            <button type="button" className="nextButton"><Link to='/build-card' style={{color:'white'}}> Done </Link></button>
                        </div>
                        <share-url-button  >
                            <button  type="button" className="shareUrl">
                                <em  class="icon-share-outline"></em>
                            </button>
                        </share-url-button>
                    </div>
                 </div></div>
                </div>
            </div>
        )
    }
}
export default Delivery;

