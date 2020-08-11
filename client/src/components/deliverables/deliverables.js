import React from 'react'
import './deliverables.css'

import {Link} from 'react-router-dom'
import AddCustom from '../addCustomDelivery/addCustomDelivery'
import SliderComponent from '../deliverySlider/deliverySlider'
import PhasesRow from '../phasesSlider/phasesSlider'
import AuthContext from '../../context/state'
import User from '../loggedInUser/loggedInUser'
import LoginIcon from '../loginIcon/loginIcon'
import CurrencyBox from '../currencyBox/currencyBox'

import Slider from '@material-ui/core/Slider';

import { ApiGet} from '../../api'
const useStyles = theme => ({
    root: {
      width: 250,
      
    },
    rail:{
        color:'#00c853'
    }
  });
let filter={}
class Delivery extends React.Component{
    constructor(props){
        super(props)
        this.state={
           showPlatform:false,firstDelivery:false,
           custom:[],count:1,platformList:[],
           selectedPlatform:[],advance:false,teams:{},dropdown:false,teamLocation:'Anywhere',search:'',mobNavigation:false,
           bottomBar:false,promotion:false,slider:'',platformId:[],data:[],
           
        }
    }
    componentDidMount(){
        ApiGet('configurations')
          .then(res => {
            const data = res.data;
            this.setState({platformList: data[0].platforms });
          }) 
          ApiGet('teams')
          .then(res => {
            const data = res.data;
            this.setState({teams:data[0].teams });
          }) 
          ApiGet(`app/?attributes.title=${this.props.match.params.name}`).then(
            (res) => {
              const data = res.data;
              
              this.setState({ data });
              console.log(this.state.data)
              this.state.data.map(value=>value.attributes.map(info=>info.platform_ids.map(obj=>{
                this.setState({selectedPlatform:[...this.state.selectedPlatform,this.state.platformList.map(data=>data.attributes.filter(platform=>platform.id===obj)).filter(value=>value.length)],platformId:[...this.state.platformId,obj]})
              }) ))
             
            
             } );
        }
    showPromotion=()=>{
        
        this.setState({promotion:true})
    }
    closePromotion=()=>{
       
        this.setState({promotion:false})
    }
    platform=()=>{
        this.setState({showPlatform:!this.state.showPlatform})
    }
    showInfobox=(e)=>{
        
        if(e.target.id==1){
            this.setState({firstDelivery:true})
        }
        else if(e.target.id==2){
            this.setState({bottomBar:true})
        }
        else{
           
            this.setState({firstDelivery:false,bottomBar:false})
        }
    }
    AddCustom=()=>{
        this.setState({count:this.state.count+1})
        this.setState({custom:[...this.state.custom,<AddCustom count={this.state.count} advance={this.state.advance} platform={this.state.selectedPlatform}/>]})
    }
    selectPlatform=(icon,e,id)=>{
        
        if(this.state.platformId.filter(value=>value===id).length){
            this.state.selectedPlatform=this.state.selectedPlatform.filter(value=>value!=icon)
            this.state.platformId=this.state.platformId.filter(value=>value!=id)
        }
        else{
        this.state.selectedPlatform=[...this.state.selectedPlatform,icon]
        this.state.platformId=[...this.state.platformId,id]
        }
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
    mobNavigation=()=>{
        this.setState({mobNavigation:true})
    }
    closeNavigation=()=>{
        this.setState({mobNavigation:false})
    }
    
    render(){
        console.log(this.state.selectedPlatform)
        const classes = useStyles();     
    
  const marks = [
  {
    value: 0-500,
    label: '0-500',
  },
  {
    value: 500-5000,
    label: '500-5k',
  },
  {
    value: 5000-50000,
    label: '5k-50k',
  },
  {
    value: 50000-100000,
    label: '50k-100k',
  },
]; 
function valuetext(value) {
    return `${value}`;
    
  }
  const handleSliderChange = (event, newValue) => {
    this.setState({slider:newValue});

  };
       
        return(
           
            <div className='wrapper'>
                <AuthContext.Consumer>
                    {
                        (props)=>{
                            return(
                                <div className='headerPart'>
                    <nav id='header'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className="logo">
                                    <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                                    <a><img width="26" height="35" alt="" className="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                                </div>
                                <div className="mobilebreadcrums"><strong>Delivery</strong><span>(Step 3/4)</span></div>
                                <app-header-breadcrumb className="appBottomBar">
                                    <div className="breadcrums">
                                        <ul>
                                            <li className="">Apps <span>(1)</span></li>
                                            <li className="">Features <span>(26)</span></li>
                                            <li className="active">Delivery and Deliverables</li>
                                            <li className="disablelink">Build Card</li>
                                        </ul>
                                    </div>
                                </app-header-breadcrumb>
                                <div className="requestDemo " style={{marginLeft:'550px'}}>
                                    <div className="text text-uppercase need-help">
                                        Get help with my project 
                                        <div className="needhelpdroupdown">
                                            <ol>
                                                <li>
                                                    <div className="user-icon-box"><em class="icon-newsales"></em></div>
                                                    <div className="user-txt"> Want a demo? <span class="bold-detail"> Talk to Sales <span> (Free) </span></span></div>
                                                </li>
                                                <li>
                                                    <div className="user-icon-box"><em className="icon-newexpert"></em></div>
                                                    <div className="user-txt"> Want help with specing? <span class="bold-detail"> Talk to Expert <span> (Refundable)</span></span></div>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={`priceSideBar ${this.state.promotion?'active':''}`}>
                                        <div className="priceOverflow"></div>
                                        <div className="priceBoxHold">
                                            <div className="priceListing">
                                                <div className="close-btn"><em className="icon-cancel" onClick={this.closePromotion}></em></div>
                                                <div className="applyPromoBox">
                                                    <h4>Apply Promotion</h4>
                                                    <div className="pro-box">
                                                        <form>
                                                            <input type="text" maxLength="15" placeholder="Enter coupon code"></input>
                                                            <button type="submit"> Apply </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {props.auth.auth?<div className='hidemobileScreen'><User auth={props.auth.auth}/></div>:
                                <div >
                                    <CurrencyBox/></div>}
                            <LoginIcon auth={props.auth.auth}/>
                            <div class="mobileClick" ><em class="icon-hamicon" onClick={this.mobNavigation}></em></div>
                                <div className={`mobNavigation ${this.state.mobNavigation?'active':''}`}>
                                    <div className="mobOverlay"></div>
                                    <div className="menuBox"><div class="closeNav" onClick={this.closeNavigation}><em class="icon-close"></em></div>
                                    <div>
                                    
                                    <div className="requestDemo view-proto mobile-btn custom-disabled"></div>
                                    <div className="requestLinks"><h3>NEED HELP?</h3><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newsales"></em></span> Want a demo? <strong>Talk to Sales <span>(Free)</span></strong></button></span><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newexpert"></em></span> Want help with specing? <strong>Talk to Expert <span>(Refundable)</span></strong></button></span></div></div></div></div>
                                        
                                    
                            </div>
                        </div>
                    </nav>
                </div>
                            )
                        }
                    }
                </AuthContext.Consumer>
                
                <div className='middlePart'>
                    <div className='deliveryHolder'>
                        <app-general-phase-platform>
                            <div  className={`platformBox ${this.state.advance?'disableBox':''}`}>
                                <h3>Decide your deliverables</h3>
                                <p>Select platform for your product</p>
                                <ul>
                                    
                                    {this.state.selectedPlatform.map(value=>value.map(platform=>platform.map(info=>
                                         
                                        <li>
                                            
                                            <img src={info.icon}></img>
                                        </li>)))}
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
                                                    <li  key={platform.id} >
                                                        <div  className="platformImg">
                                                            <img  alt="" src={platform.icon}></img>
                                                        </div>
                                                        <div  className="platformName">{platform.title}</div>
                                                        <div className="platformCheck" >
                                                           
                                                            <input  type="checkbox" id={platform.id}  checked={this.state.platformId.filter(id=>id===platform.id).length}  onChange={()=>this.setState({platformId:[...this.state.platformId,platform.id]})}></input>
                                                            <label  htmlFor={platform.id} onClick={(e)=>this.selectPlatform(platform,e,platform.id)}></label>
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
                            
                                        
                                        <PhasesRow custom={this.state.custom}  advance={this.state.advance} platform={this.state.selectedPlatform}/>
                                        
                                        
                                        
                                    
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
                                            <div className="userSlider">
                                            <div className='rangeSlider'>
                                                    <div className={classes.root}>
                                                    
                                                        
                                                        <Slider
                                                            color={"secondary"}
                                                            
                                                            
                                                            onChange={handleSliderChange}
                                                            defaultValue={0-500}
                                                            getAriaValueText={valuetext}
                                                            aria-labelledby="discrete-slider-custom"
                                                            
                                                           step={25}
                                                            marks={marks}
                                                        />
                                                        </div>
                                                    </div>
                                            </div>
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
                                <div  className="phaseIcon" >
                                    <img alt="" src="https://studio.builder.ai/assets/images/info_blue.png" id='2' onClick={(e)=>this.showInfobox(e)}></img>
                                </div>
                                <div  className={`phasebreakOverlay ${this.state.bottomBar?'active':''}`}></div>
                                <div className={`phasebreakDetail ${this.state.bottomBar?'active':''}`}>
                                    <div  className="closeButton" onClick={this.showInfobox}><em  className="icon-cancel"></em></div>
                                    <div className='pricedetailBox'>
                                        <h3 >Price Details</h3>
                                        <ul>
                                            <li  className="headRow">
                                                <span>Phases</span>
                                                <span>Duration</span>
                                                <span>Price</span>
                                            </li>
                                            <li  className="headRow">
                                                <span>Product Roadmap</span>
                                                <span>Not Added</span>
                                            </li>
                                            <li>
                                                <span>Design</span>
                                                <span>6  weeks</span>
                                                <span>₹209641</span>
                                            </li>
                                            <li  className="headRow">
                                                <span>Tailor-made Prototype</span>
                                                <span>Not Added</span>
                                            </li>
                                            <li>
                                                <span>MVP</span>
                                                <span>17.2  weeks</span>
                                                <span>₹585377</span>
                                            </li>
                                            <li>
                                                <span >Full Build</span>
                                                <span >0.8  week</span>
                                                <span >₹43546</span>
                                            </li>
                                            <li  className="bgRow discountRow applyPromoMobile">
                                                <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                                                <button type="button" onClick={this.showPromotion}>Apply Promotion</button>
                                            </li>
                                            <li  className="bgRow">
                                                <strong>Total</strong>
                                                <strong>24 weeks</strong>
                                                <strong>₹8,38,564.00</strong>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='platformdetailBox'>
                                    <h3>Platform <span onClick={this.platform}>Change</span></h3>
                                    <ul>
                                    {this.state.selectedPlatform.map(value=>value.map(platform=>platform.map(info=>
                                            <li>
                                                <img src={info.icon}></img>
                                            </li>)))}
                                    </ul>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                        <div  className="applyPromoBox" >
                            <span className="promo-hd">Promotion </span>
                            <div  className="promo-container">
                                <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                                <button  type="button"  onClick={this.showPromotion}>Apply Promotion</button>
                            </div>
                        </div>
                        <div  className={`previewBottom ${this.state.bottomBar?'child_btn_full':''}`}>
                            <div >
                                <button type="button" className="nextButton"><Link to={`/build-card`} style={{color:'white'}}> Done </Link></button>
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

