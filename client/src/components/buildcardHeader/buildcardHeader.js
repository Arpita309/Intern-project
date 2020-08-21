import React from 'react'
import './buildcardHeader.css'
import ProtoTypeButton from '../viewProtoType/viewProtoType'
import User from '../loggedInUser/loggedInUser'
import NeedHelp from '../needHelp/needHelp'
import AuthContext from '../../context/state'
class Header  extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mobUser:false,userLogin:false
        }
    }
    mobUserNav=(e)=>{
        this.setState({mobUser:!this.state.mobUser})
        if(e.target.id==1){
            this.setState({userLogin:true})
        }
        else {this.setState({userLogin:false})}
    }
    
    render(){return(
       <nav id='header'>
           <div className='container-fluid'>
               <div>
                    <div className="logo">
                        <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                        <a><img width="26" height="35" alt="" class="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                    </div>
                    
                    
                    <div style={{marginLeft:'10px'}}>
                    <AuthContext.Consumer>{(props)=><User auth={props.auth.auth}/>}</AuthContext.Consumer>
                    </div>
                    <div  className='hidden-xs'>
                    <ProtoTypeButton />
                    </div>
                    <div  className='show-xs'>
                    <NeedHelp />
                    </div>
                    <div class="mobuserLogin" style={{marginLeft:'5px'}}><em class="icon-usernew" id='1' onClick={(e)=>this.mobUserNav(e)}></em></div>
                    <div class="mobileClick" style={{marginLeft:'5px'}}><em class="icon-hamicon" onClick={(e)=>this.mobUserNav(e)}></em></div>
                    <div className={`priceSideBar ${this.props.showSidebar?'active':''}`}>
                                    <div className="priceOverflow"></div>
                                    <div className="priceBoxHold">
                                        <div className="priceListing">
                                            <div className="close-btn"><em class="icon-cancel" onClick={this.props.sidebar}></em></div>
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
                    <div className={`mobNavigation ${this.state.mobUser?'active':''}`}>
                        <div className="mobOverlay"></div>
                        <div className="menuBox">
                            <div className="closeNav">
                                <em className="icon-close" onClick={this.mobUserNav}></em>
                            </div>
                           {this.state.userLogin?<div>
                           <AuthContext.Consumer>{(props)=><div className="welcomeUser"> Hello, <strong>{props.auth.auth.name}</strong></div>}</AuthContext.Consumer>
                                <ul className="mobile-loginscreen">
                                    <li><span class="userSetting"><em class="icon-settings-streamline-1"></em> Settings</span></li>
                                    <li className="mydashBoard"><span><em class="icon-dashboard-3"></em> Go to Dashboard</span></li>
                                    <li><span className="userLogout"><em class="icon-logout-1"></em> Logout</span></li>
                                </ul>
                            </div>:<div><div className="requestDemo view-proto mobile-btn"><div className="text"><span><em className="right-tringle"></em></span> View Prototype </div></div><div className="requestLinks"><h3>NEED HELP?</h3><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newsales"></em></span> Want a demo? <strong>Talk to Sales <span>(Free)</span></strong></button></span><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newexpert"></em></span> Want help with specing? <strong>Talk to Expert <span>(Refundable)</span></strong></button></span></div></div> } 
                        </div>
                        </div>
               </div>
           </div>
       </nav>
    )}
}
export default Header;