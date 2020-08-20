import React from 'react'
import './deliverables.css'

import {Link, Redirect} from 'react-router-dom'
import AddCustom from '../addCustomDelivery/addCustomDelivery'
import SliderComponent from '../deliverySlider/deliverySlider'
import PhasesRow from '../phasesSlider/phasesSlider'
import AuthContext from '../../context/state'
import User from '../loggedInUser/loggedInUser'
import LoginIcon from '../loginIcon/loginIcon'
import CurrencyBox from '../currencyBox/currencyBox'
import uniqid from 'uniqid';
import Slider from '@material-ui/core/Slider';
import Typography from "@material-ui/core/Typography";
import { ApiGet,ApiPost} from '../../api'
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
    static contextType=AuthContext
    constructor(props,context){
        super(props,context)
        this.state={
           showPlatform:false,firstDelivery:false,
           custom:[],count:1,platformList:[],
           selectedPlatform:[],advance:false,teams:{},dropdown:false,teamLocation:'Anywhere',search:'',mobNavigation:false,
           bottomBar:false,promotion:false,speed:'Relaxed',platformId:[],data:[],template:'',phases:[],
           price:'',weeks:'',configurations:[],features:[]
           
        }
    }
    componentDidMount(){
        
        ApiGet('configurations')
          .then(res => {
            const data = res.data;
            this.setState({configurations:data[0]})
            data[0].speed.map(platform=>{
               
                if(this.state.speed===platform.title){
                this.setState({ price:+this.state.price + +this.state.price* +platform.price_multiplier,weeks:Math.round(+this.state.weeks + +this.state.weeks* +platform.week_multiplier)})
                console.log(platform)
                }
            })
                this.setState({platformList: data[0].platforms });
               
          }) 
          ApiGet('teams')
          .then(res => {
            const data = res.data;
            this.setState({teams:data[0].teams });
          }) 
          ApiGet(`app/?attributes.id=${this.props.match.params.name}`).then(
            (res) => {
              const data = res.data;
              
              this.setState({ data });
              console.log(this.state.data)
              this.state.data.map(value=>value.attributes.map(info=>{return(this.setState({template:info.id}))} ))
              ApiGet(`selectedFeatures/template/?templateId=${this.state.template}`)
              .then(res=>{
                 this.setState({features:res.data})
              })
              ApiGet(`selectedPlatform/template/?templateId=${this.state.template}`)
              .then(res=>{
                     res.data.platform.map(
                         value=>
                         this.setState({selectedPlatform:[...this.state.selectedPlatform,value],platformId:[...this.state.platformId,value.id]})
                     )
                  
                  
                          
            
        })
        ApiGet(`priceAndDuration/template/?templateId=${this.state.template}`)
        .then(res=>{
            console.log(res)
            this.setState({price:res.data.price,weeks:res.data.weeks})
        })

    })}
    
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
        console.log(icon)
        if(this.state.platformId.filter(value=>value===id).length){
            this.state.selectedPlatform=this.state.selectedPlatform.filter(value=>value!=icon)
            this.state.platformId=this.state.platformId.filter(value=>value!=id)
            this.state.price= Math.round(+this.state.price - +this.state.price* +icon.price_multiplier)
            this.state.weeks= Math.round(+this.state.weeks - +this.state.weeks* +icon.week_multiplier)
        }
        else{
        this.state.selectedPlatform=[...this.state.selectedPlatform,icon]
        this.state.platformId=[...this.state.platformId,id]
        this.state.price= +this.state.price + +this.state.price* +icon.price_multiplier
        this.state.weeks=+this.state.weeks + +this.state.weeks* +icon.week_multiplier
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
    selectPhase=(value)=>{
        console.log(value)
        this.setState({phases:[...this.state.phases,value]})
        this.state.configurations.build_phases.map(
            phase=>{
                
                if(value==phase.id){
                    console.log(phase)
                    this.state.price= +this.state.price + +this.state.price* +phase.price_multiplier
                    this.state.weeks=Math.round(+this.state.weeks + +this.state.weeks* +phase.week_multiplier)
                }
            }
        )
    }
    Speed=(e)=>{
        console.log(e.target.value)
        this.setState({speed:e.target.value})
        this.state.configurations.speed.map(
            phase=>{
                if(e.target.value===phase.title){
                    console.log(phase)
                    this.state.price= Math.round(+this.state.price* +phase.price_multiplier)
                    this.state.weeks=Math.round(+this.state.weeks* +phase.week_multiplier)
                }
            }
        )
    }
    redirect=()=>{
        let payload
        
        ApiGet(`priceAndDuration/template/?templateId=${this.state.template}`)
        .then(res=>{
             payload={phases:this.state.phases,templateId:this.state.template,teamLocation:this.state.teamLocation,platforms:this.state.platformId,speed:this.state.speed,price:res.data.price,duration:res.data.weeks,status:'saved',features:this.state.features,uniqId:uniqid()}
            ApiPost('buildCard',payload)
             .then(res=>{
                 console.log(res.data)
                 this.setState({redirect:true})
                 
             })}
        )
    
}
    render(){
        if(this.state.redirect){
            return(<Redirect to={`/build-card/${this.state.template}`}/>)
        }
        console.log(this.state.selectedPlatform)
        console.log(this.state.price,this.state.weeks)
    
        const classes = useStyles();     
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
                                    
                                    {this.state.selectedPlatform.map(info=>
                                         
                                        <li>
                                            
                                            <img src={info.icon}></img>
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
                            
                                        
                                        <PhasesRow custom={this.state.custom}  advance={this.state.advance} platform={this.state.selectedPlatform} selectPhase={this.selectPhase} price={this.state.price} weeks={this.state.weeks}/>
                                        
                                        
                                        
                                    
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
                                        <h4  htmlFor='speed'>Select a delivery speed</h4>
                                        <div  className="speedSlider">
                                        

                                        <select name="speed"  onChange={(e)=>this.Speed(e)}>
                                        <option value="Relaxed" id='4'>Relaxed</option>
                                        <option value="Slow" id='3'>Slow</option>
                                        <option value="Standard" id='1'>Standard</option>
                                        <option value="Fast" id='5'>Fast</option>
                                        <option value='Speedy' id='2'>Speedy</option>
                                        </select>
                                                
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
                                <span>Duration</span>{this.state.weeks} weeks
                            </h3>    
                        </div>
                        <div className="maxpriceBox">
                            <h3>
                                <span >Max Price</span>
                                <strong>{this.state.price}</strong>
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
                                    {this.state.selectedPlatform.map(info=>
                                            <li>
                                                <img src={info.icon}></img>
                                            </li>)}
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
                                <button type="button" className="nextButton" onClick={this.redirect}> Done</button>
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

