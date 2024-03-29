import React from 'react'

import CurrencyBox from '../currencyBox/currencyBox'
import {Link} from 'react-router-dom'

import User from '../loggedInUser/loggedInUser'
import LoginIcon from '../loginIcon/loginIcon'
import './Navbar.css'

import AuthContext from '../../context/state'
import {ApiGet} from '../../api'
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
this.state = {
        mobNavigation:false,auth:{}

    
    }}
   
    
    
    closeNavigation=()=>{
      this.setState({mobNavigation:false})
    }

   
    mobNavigation=()=>{
      this.setState({
        mobNavigation:true
      });
    }
    render() {
     
      
        
         return (
           <AuthContext.Consumer>
             {
               (props)=>{ 
                return(<nav id='header'>
                {console.log(props.auth.auth)}
                <div className='container-fluid'>
                  <div>
                   <div className="logo">
                     <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                     <a className="mobilehome-logo-only"><img alt="" width="107" height="26" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                     <a><img width="26" height="35" alt="" className="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                   </div>
                   <LoginIcon auth={props.auth.auth}/>
                 {props.auth.auth?<div className='hidemobileScreen'><User auth={props.auth.auth}/></div>:
                   <div >
                     <CurrencyBox/></div>}
                     
                      
                    <div className="requestDemo ">
                   <div className="text text-uppercase ">
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
               <div className='becomePartner'><Link to='become-a-partner' >BECOME A PARTNER</Link></div>
                   <div class="mobileClick" ><em class="icon-hamicon" onClick={this.mobNavigation}></em></div>
                   <div className={`mobNavigation ${this.state.mobNavigation?'active':''}`}>
                     <div className="mobOverlay"></div>
                     <div className="menuBox"><div class="closeNav" onClick={this.closeNavigation}><em class="icon-close"></em></div>
                     <div>
                       <div className="becomePartnerButton"> Become a Partner </div>
                       <div className="requestDemo view-proto mobile-btn custom-disabled"></div>
                       <div className="requestLinks"><h3>NEED HELP?</h3><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newsales"></em></span> Want a demo? <strong>Talk to Sales <span>(Free)</span></strong></button></span><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newexpert"></em></span> Want help with specing? <strong>Talk to Expert <span>(Refundable)</span></strong></button></span></div></div></div></div>
                 
                   
                   
                  </div>
                </div>
                
               </nav>)
               }
             }
           </AuthContext.Consumer>
           
           
           
         )
         }
  
  }