import React from 'react'
import './paymentPlan.css'
import NeedHelp from '../needHelp/needHelp'

import{Link} from 'react-router-dom'
import Footer from '../footer/footer'

class PaymentPlan extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showDue:false,weekly:false,showDetail:false,showThis:false,expand:false,showSidebar:false,
            builderCareinfo:false,builderCloud:false,dueNow:false,downPayment:false
        }
    }
    showdue=()=>{
        this.setState({showDue:!this.state.showDue})
    }
    showWeekly=(e)=>{
        if(e.target.id==1)
        {
            this.setState({weekly:true})
        }
        
        else{
            this.setState({weekly:false})
        }
    }
    showInfobox=(e)=>{
        if(e.target.id==1){
            this.setState({builderCareinfo:true})
            
        }
        else if(e.target.id==2){
            this.setState({builderCloud:true})
            
        }
        else if(e.target.id==3){
            this.setState({dueNow:true})
            
        }
        else if(e.target.id==4){
            this.setState({downPayment:true})
            
        }
        else{
            this.setState({builderCareinfo:false,builderCloud:false,dueNow:false,downPayment:false})
            
            
        }
       
    }
    showDetail=()=>{
        this.setState({showDetail:!this.state.showDetail})
    }
    showThis=()=>{
        this.setState({showThis:!this.state.showThis})
    }
    expand=()=>{
        this.setState({expand:!this.state.expand})
    }
    sidebar=()=>{
        this.setState({showSidebar:!this.state.showSidebar})
    }
    render (){
        return(
            <div className='wrapper'>
                <div className='headerPart'>
                    <nav id='header'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='logo'>
                                    <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                                    <a><img width="26" height="35" alt="" className="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                                </div>
                                <div className="mobilebreadcrums" style={{marginBottom:'15px'}}><strong>Payment Plan</strong><span >(Step 1/3)</span></div>
                                <div className='breadcrums'>
                                    <ul>
                                        <li>Buildcard</li>
                                        <li class="active">Payment Plan </li>
                                        <li>Billing Details/Contract </li>
                                        <li className='disablelink'>Confirm and Pay</li>
                                    </ul>
                                </div>
                                <div  className='show-xs'>
                                <NeedHelp/>
                                </div>
                                   
                                <div className="secure hidden-xs " style={{marginLeft:'10px'}}><img src="https://studio.builder.ai/assets/images/shield.png" alt=""></img> 100% Secure </div>
                                
                                <div className={`priceSideBar ${this.state.showSidebar?'active':''}`}>
                                    <div className="priceOverflow"></div>
                                    <div className="priceBoxHold">
                                        <div className="priceListing">
                                            <div className="close-btn"><em class="icon-cancel" onClick={this.sidebar}></em></div>
                                            <div className="applyPromoBox"><h4>Apply Promotion</h4>
                                            <div className="pro-box"><form noValidate="" ><input type="text" maxLength="15" placeholder="Enter coupon code" ></input>
                                            <button type="submit"> Apply </button></form></div></div>
                                            <div className="promotionListing">
                                                <h3>Best Coupons available for you</h3>
                                                <ul>
                                                    <li>
                                                        <div className="promoTag">
                                                            <div className="promoIcon"><img src="https://studio.builder.ai/assets/images/logoSmall.png" width="26" height="35"></img></div>
                                                            <div className="promoName">10percentoff</div>
                                                        </div>
                                                        <button type="button">Apply</button>
                                                        <p>Use above code and get 10% off.<br/> Expires on <strong>December 31, 2020.</strong></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='middlePart'>
                    <div className='container paymentContainer' style={{width:'100%'}} >
                        <div className='row'>
                            <div className='col-xs-12 col-md-4 col-sm-12 pull-right' style={{float:'right'}}>
                                <div className='paymentSummary modifyPaymnt-summry'>
                                    <h3>Payment Summary 
                                        <div  className={`expandicon ${this.state.showThis?'active':''}`} onClick={this.showThis}><strong></strong></div>
                                        <div  className="icon-cancel custom-only-xs"></div>
                                    </h3>
                                    <div  className="costDuration">
                                        <div>
                                            <div  className="detailRow">
                                                <label>Total Cost <br/><small>(Including Taxes)</small></label>
                                                <p ><strong>₹9,88,484.00 <div  className={`expand ${this.state.expand?'active':''}`} onClick={this.expand}></div></strong></p>
                                            </div>
                                        </div>
                                        {this.state.expand?<React.Fragment>
                                            <div  className="detailRow "><label>Project Cost</label><p >₹8,37,698.00</p></div>
                                            <div  className="detailRow "><label>Tax (18% GST)</label><p >₹1,50,786.00</p></div>
                                        </React.Fragment>:''}
                                        <div  className="detailRow">
                                            <label>Development duration</label>
                                            <p> 24 weeks</p>
                                        </div>
                                    </div>
                                    <div  className="applyPromo">
                                        <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                                        <button  type="button"  onClick={this.sidebar}>Apply Promotion </button>
                                    </div>
                                    <div  className={`additionalService ${this.state.showThis?'showthis':''}`}>
                                        <h4 >Additional Service</h4>
                                        <div  className="builderCare">
                                            <div  className="builderSelect">
                                                <label  className="builderCareCheck" >Builder Care <input  type="checkbox" name="checkbox" class="check " defaultChecked></input><span  className="checkmark"></span></label>
                                                <div  className="info"  >
                                                    <img  src="https://studio.builder.ai/assets/images/info_blue.png" alt="" id='1' onClick={(e) => this.showInfobox(e)}></img>
                                                   {this.state.builderCareinfo? <React.Fragment><div  className="infoBox ">
                                                        <ul>
                                                            <li >24/7 support and maintenance for your project year round.</li>
                                                            <li >On demand cloud support - setup, monitoring, scalability, and migrations.</li>
                                                            <li>Upgrade your app to support the newer iOS/ Android updates.</li>
                                                            <li >Technical support for SDK, third party integrations, and upgrades.</li>
                                                            <li>Support for unexpected bugs, crashes, and security issues.</li>
                                                        </ul>
                                                        <em  className="icon-cancel closeInfo" onClick={this.showInfobox}></em></div></React.Fragment>:''}
                                                    </div>
                                            </div>
                                            <p >₹8,237.37 /Mo</p>
                                        </div>
                                        <div  className="builderCare ">
                                            <div  className="builderSelect">
                                                <label  className="builderCareCheck">Builder Cloud <input  type="checkbox" name="checkbox" class="check " checked='true'></input><span  className="checkmark"></span></label>
                                                <div  className="info">
                                                    <img  src="https://studio.builder.ai/assets/images/info_blue.png" alt="" id='2' onClick={(e) => this.showInfobox(e)}></img>
                                                   {this.state.builderCloud?<div  className="infoBox ">
                                                       <ul >
                                                           <li ><strong>Commitment-free savings:</strong> our customers saved over $4.5m, last year.</li>
                                                           <li ><strong >World-class analytics:</strong> Optimise your software and infrastructure.</li>
                                                           <li ><strong >Best-in-class multicloud:</strong> AWS, Digital Ocean, Azure and more. Just one bill (for a lot less).</li>
                                                        </ul>
                                                        <em  className="icon-cancel closeInfo" onClick={this.showInfobox}></em></div>:''}
                                                    </div>
                                            </div>
                                            <p >₹2,263.93 /Mo</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div  className={`paymentSummry dueNow ${this.state.showDue?'active':''}`}>
                                    <div  className="mobilehandling">
                                        <div  className="mobileClick" onClick={this.showdue}></div>
                                        <div  className="closeButton" onClick={this.showdue}></div>
                                        <h3  className="xs-small-head">Due Now <span  className="info">
                                            <img  src="https://studio.builder.ai/assets/images/info_blue.png" alt="" id='3' onClick={(e) => this.showInfobox(e)}></img>
                                           {this.state.dueNow? <div className="infoBox">
                                            <ul >
                                                <li >This is the amount of money you will pay at the end of checkout to begin your project. Later, you will be able to choose the date when your project begins development.</li>
                                            </ul><em  className="icon-cancel closeInfo" onClick={this.showInfobox}></em></div>:''}
                                            </span></h3>
                                        <div  className="downPayment">
                                            <div className="detailRow"><label> Security Deposit <span  className="info">
                                                <img  src="https://studio.builder.ai/assets/images/info_blue.png" alt="" id='4' onClick={(e) => this.showInfobox(e)}></img>
                                               {this.state.downPayment?<div  className="infoBox ">
                                                    <ul >
                                                        <li>This is payed up front and reserves your development team to ensure they are ready to start on time.</li>
                                                        <li>This cost will be refunded at the end of the development process (we will deduct the cost from your final payment).</li>
                                                    </ul>
                                                    <em  className="icon-cancel closeInfo" onClick={this.showInfobox}></em></div>:''}
                                                </span></label><p > ₹1,39,616.32 </p></div>
                                            <div  className="detailRow ">
                                                <label>Tax (18% GST) </label>
                                                <p >₹25,130.94</p>
                                            </div>
                                        </div>
                                        <div  className="totalContinue">
                                            <div  className="detailRow">
                                                <h3>Total</h3>
                                                <h3> ₹1,64,747.26</h3>
                                            </div>
                                            <div  className="detailRow">
                                                <button  type="button" class="continueBtn "><Link to='/billing-details' style={{color:'white'}}>CONTINUE</Link> </button>
                                            </div>
                                            <p >By clicking continue button, you agree with our Terms and Conditions and the related documents will be sent to your registered email address</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-md-7 col-sm-12'>
                                <div className='paymentPlan'>
                                    <div className='billingCycle'>
                                        <h3>Billing Cycle</h3>
                                        <div className='billingCycleMainTab'>
                                            <ul className='billingCycleMainTabs'>
                                           
                                                <li id='1' className={`${this.state.weekly?'active':''}`} onClick={(e)=>this.showWeekly(e)}>Weekly</li>
                                                <li className={`${this.state.weekly?'':'active'}`} id='2' onClick={(e)=>this.showWeekly(e)}>Monthly</li>
                                                
                                            
                                            </ul>
                                            <div className='billingCycleContent weekly fixHeight billingheight'>
                                                {this.state.weekly?[this.state.showDetail?<React.Fragment><ul  className="weeklyMonthlyWise">
                                                    <li ><label>Installment Amount</label><p >₹14,186.81</p></li>
                                                    <li><label>Number of Installments</label><div  className="txt-inline"><p >24</p></div></li>
                                                    <li><label>Frequency of Installments</label><p >Weekly</p></li>
                                                    <li><label>Date of First Payment</label><p >June 5, 2020</p></li>
                                                    <li><label >Date of Last Payment</label><p>November 20, 2020</p></li>
                                                    </ul>
                                                    <div className='text-right'>
                                                    <button  className="hideDetail active " onClick={this.showDetail}>Hide Details </button></div>
                                                    <div  className="installmentDetail "><h3 >Installment Details</h3>
                                                    <ul  className="installmentDetailList "><li><label >Installment 01</label><p>June 12, 2020</p><p>₹41,186.81</p></li></ul>
                                                    <ul  className="installmentDetailList"><li><label>Installment 02</label><p >June 19, 2020</p><p >₹41,186.81</p></li></ul>
                                                    <ul  className="installmentDetailList "><li ><label>Installment 03</label><p >June 26, 2020</p><p >₹41,186.81</p></li></ul>
                                                    <ul className="installmentDetailList"><li ><label >Installment 04</label><p >July 3, 2020</p><p >₹41,186.81</p></li></ul>
                                                    <ul  className="installmentDetailList "><li ><label >Installment 05</label><p >July 10, 2020</p><p >₹41,186.81</p></li></ul>
                                                    <ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 06</label><p _ngcontent-serverapp-c164="">July 17, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 07</label><p _ngcontent-serverapp-c164="">July 24, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 08</label><p _ngcontent-serverapp-c164="">July 31, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 09</label><p _ngcontent-serverapp-c164="">August 7, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 10</label><p _ngcontent-serverapp-c164="">August 14, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 11</label><p _ngcontent-serverapp-c164="">August 21, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 12</label><p _ngcontent-serverapp-c164="">August 28, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 13</label><p _ngcontent-serverapp-c164="">September 4, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 14</label><p _ngcontent-serverapp-c164="">September 11, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 15</label><p _ngcontent-serverapp-c164="">September 18, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 16</label><p _ngcontent-serverapp-c164="">September 25, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 17</label><p _ngcontent-serverapp-c164="">October 2, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 18</label><p _ngcontent-serverapp-c164="">October 9, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 19</label><p _ngcontent-serverapp-c164="">October 16, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 20</label><p _ngcontent-serverapp-c164="">October 23, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 21</label><p _ngcontent-serverapp-c164="">October 30, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 22</label><p _ngcontent-serverapp-c164="">November 6, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 23</label><p _ngcontent-serverapp-c164="">November 13, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul><ul _ngcontent-serverapp-c164="" class="installmentDetailList ng-star-inserted"><li _ngcontent-serverapp-c164=""><label _ngcontent-serverapp-c164="">Installment 24</label><p _ngcontent-serverapp-c164="">November 20, 2020</p><p _ngcontent-serverapp-c164="">₹41,186.81</p></li></ul></div>
                                                    </React.Fragment>:<ul  className="weeklyMonthlyWise">
                                                    <li ><label>Installment Amount</label><p >₹14,186.81</p></li>
                                                    <li><label>Number of Installments</label><div  className="txt-inline"><p >24</p></div></li>
                                                    <li><label>Frequency of Installments</label><p >Weekly</p></li>
                                                    <li><label>Date of First Payment</label><p >June 5, 2020</p></li>
                                                    <li><label >Date of Last Payment</label><p>November 20, 2020</p></li>
                                                    </ul>]: [this.state.showDetail?<React.Fragment><ul  className="weeklyMonthlyWise">
                                                    <li ><label>Installment Amount</label><p >₹1,64,747.26</p></li>
                                                    <li><label>Number of Installments</label><div  className="txt-inline"><p >6</p></div></li>
                                                    <li><label>Frequency of Installments</label><p >Monthly (4 Weeks)</p></li>
                                                    <li><label>Date of First Payment</label><p >June 5, 2020</p></li>
                                                    <li><label >Date of Last Payment</label><p>November 20, 2020</p></li>
                                                    </ul>
                                                    <div className='text-right'>
                                                    <button  className="hideDetail active " onClick={this.showDetail}>Hide Details </button></div>
                                                    <div  className="installmentDetail"><h3 style={{fontWeight:'bolder'}}>Installment Details</h3><ul  className="installmentDetailList"><li><label>Installment 01</label><p >July 3, 2020</p><p _ngcontent-serverapp-c164="">₹1,64,747.26</p></li></ul><ul  className="installmentDetailList "><li><label >Installment 02</label><p >July 31, 2020</p><p >₹1,64,747.26</p></li></ul><ul className='installmentDetailList'><li><label>Installment 03</label><p>August 28, 2020</p><p>₹1,64,747.26</p></li></ul><ul  className="installmentDetailList "><li ><label >Installment 04</label><p >September 25, 2020</p><p >₹1,64,747.26</p></li></ul><ul className="installmentDetailList "><li ><label >Installment 05</label><p>October 23, 2020</p><p>₹1,64,747.26</p></li></ul><ul class="installmentDetailList "><li ><label>Installment 06</label><p >November 20, 2020</p><p>₹1,64,747.26</p></li></ul></div></React.Fragment>:<ul  className="weeklyMonthlyWise">
                                                    <li ><label>Installment Amount</label><p >₹1,64,747.26</p></li>
                                                    <li><label>Number of Installments</label><div  className="txt-inline"><p >6</p></div></li>
                                                    <li><label>Frequency of Installments</label><p >Monthly (4 Weeks)</p></li>
                                                    <li><label>Date of First Payment</label><p >June 5, 2020</p></li>
                                                    <li><label >Date of Last Payment</label><p>November 20, 2020</p></li>
                                                    </ul>]}
                                                    <div  className="text-right">
                                                    {this.state.showDetail?<button  className="hideDetail active " onClick={this.showDetail}>Hide Details </button>:<button  className="viewDetail active " onClick={this.showDetail}>View Details </button>}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default PaymentPlan;