import React from 'react'
import './deliverables.css'
import {SideBar} from '../sideBar/sideBar'
import {Link} from 'react-router-dom'
class Delivery extends React.Component{
    constructor(props){
        super(props)
        this.state={
           showPlatform:false
        }
    }
    platform=()=>{
        this.setState({showPlatform:!this.state.showPlatform})
    }
    render(){
        console.log(this.state.showPlatform)
        return(
            <div className='wrapper'>
                <div className='middlePart'>
                    <div className='deliveryHolder'>
                        <app-general-phase-platform>
                            <div  className="platformBox">
                                <h3>Decide your deliverables</h3>
                                <p>Select platform for your product</p>
                                <ul>
                                    <li>
                                        <img  src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9b0014c49f7f46746441/Android_blue.png" alt="Android"></img>
                                    </li>
                                    <li >
                                        <img  src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd56b888f3ac79a46ef210/ios_blue.png" alt="iOS"></img>
                                    </li>
                                    <li>
                                        <img  src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd570d88f3ac79a46ef213/Web_xh.png" alt="Web"></img>
                                    </li>
                                    <li  className="moreplatform" onClick={this.platform}>
                                        <em  className="icon-plus"></em>
                                    </li>
                                </ul>
                            </div>
                            
                            {this.state.showPlatform?<SideBar/>:null}
                        </app-general-phase-platform>
                        <div className='phasesSection'>
                            <h2> Select phases for your product 
                                <div  className="advanceTab">
                                    <span>Advance</span>
                                    <strong></strong>
                                </div>
                            </h2>
                            <div className='phasesRowSlider'>
                                <div className='phasesRowContent'>
                                    <div className='phaseRow'>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="planDelivery">
                            <h3>When do you want the delivery?</h3>
                            <div  className="rowBoxes">
                                <team-card  className="hide">
                                    <div className="teamBox">
                                        <h4>Your team to be located in</h4>
                                        <div  className="customDropdown">
                                            <div  className="selectedValue"> Anywhere </div>
                                        </div>
                                    </div>
                                </team-card>
                                <app-general-phase-speed>
                                    <div  className="speedBox">
                                        <h4 >Select a delivery speed</h4>
                                        <div  className="speedSlider">
                                        </div>
                                    </div>
                                </app-general-phase-speed>
                                <div  className="planDates">
                                    <p>First delivery: 
                                        <strong >11 November 2020</strong>
                                        <span  className="infoIcon">
                                            <em  className="icon-infonew"></em>
                                            <span  className="infoContent">
                                                <span  className="icon-cancel"></span> You will get 
                                                <u>24 features</u> 
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
                            <button type="button" className="nextButton"><Link to='#' style={{color:'white'}}> Done </Link></button>
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

