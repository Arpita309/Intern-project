import React from 'react'
import './appHeader.css'
import  Drawer  from '../drawer/drawer'
import CurrencyBox from '../currencyBox/currencyBox'
import LoginIcon from '../loginIcon/loginIcon'
class AppHeader extends React.Component{
    render(){
        return (
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
                            <div className='appBottombar'>
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
                            <div style={{marginLeft:'60px',verticalAlign:'center'}}>
                               <CurrencyBox/>
                            </div>
                            <LoginIcon/>
                            <div className='mobileClick'>
                                <em class="icon-hamicon" ><Drawer/></em>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        );
    }
}
export default AppHeader;