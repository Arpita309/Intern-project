import React from 'react'
import './appHeader.css'
import  Drawer  from '../drawer/drawer'
import CurrencyBox from '../currencyBox/currencyBox'
import LoginIcon from '../loginIcon/loginIcon'
import User from '../loggedInUser/loggedInUser'

import AuthContext from '../../context/state'
class AppHeader extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            mobNavigation:false
        }
    }
    closeNavigation=()=>{
        this.setState({mobNavigation:false})
      }
    mobNavigation=()=>{
        this.setState({
          mobNavigation:true
        });
      }
    render(){
        return (
            <AuthContext.Consumer>
                {
                    (props)=>{
                        return(
                            <div className='headerpart'>
                <div className='offerbarTop'>
                    <div className='offerHolder'>
                        <p></p>
                        <div className='dropdownMenu'>
                            <span></span>
                        </div>
                        <a target="_blank" style={{color:"#fff"} } href="/acceptable_fair_use_policy">Acceptable (Fair) Use Policy</a>
                    </div>
                </div>
                <nav id='header'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='logo'>
                                <a href='http://localhost:3000/'><img width="107" height="26" alt="" class="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                                <a href='http://localhost:3000/'><img width="26" height="35" alt="" class="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                            </div>
                            <div className='mobilebreadcrums'>
                                 <strong>Apps</strong>
                                 <span>(Step 1/4)</span>
                            </div>
                            <div className='appBottom'>
                                <div className='breadcrums'>
                                    <ul>
                                    <li class="active">Apps <span style={{color:' rgba(0,0,0,.5)'}}>{'>'}</span> </li>
                                         <li class="disablelink">Features <span style={{color:' rgba(0,0,0,.5)'}}>{'>'}</span></li>
                                         <li class="disablelink">Delivery and Deliverables <span style={{color:' rgba(0,0,0,.5)'}}>{'>'}</span></li>
                                         <li class="disablelink">Build Card </li>
                                    </ul>

                                </div>
                            </div>
                            
                            <div className="requestDemo hidden-xs expOnlineBx" style={{marginLeft:'400px'}}>
                                <div className="text text-uppercase expertavail">
                                    <span className="expert-icons"><img src="https://studio.builder.ai/assets/images/expert_btn.png" alt="experts" className="one"></img></span> 
                                    Experts online 
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
                                <div className="requestLinks"><h3>NEED HELP?</h3><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newsales"></em></span> Want a demo? <strong>Talk to Sales <span>(Free)</span></strong></button></span><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newexpert"></em></span> Want help with specing? <strong>Talk to Expert <span>(Refundable)</span></strong></button></span></div>
                                </div>
                                </div>
                                </div>
                                    </div>
                                </div>

                            </nav>
                        </div>
                        )
                    }
                }
            </AuthContext.Consumer>
            
        );
    }
}
export default AppHeader;