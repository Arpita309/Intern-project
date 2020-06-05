import React from 'react'
import './buildcardHeader.css'
import ProtoTypeButton from '../viewProtoType/viewProtoType'
import User from '../userDashboard/userDashboard'
import NeedHelp from '../needHelp/needHelp'
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
               <div className='row'>
                    <div className="logo">
                        <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                        <a><img width="26" height="35" alt="" class="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                    </div>
                    <div style={{marginLeft:'800px'}} className='hidden-xs'>
                    <ProtoTypeButton />
                    </div>
                    <div  className='show-xs'>
                    <NeedHelp />
                    </div>
                    <div style={{marginLeft:'10px'}}>
                    <User />
                    </div>
                    <div class="mobuserLogin" style={{marginLeft:'5px'}}><em class="icon-usernew" id='1' onClick={(e)=>this.mobUserNav(e)}></em></div>
                    <div class="mobileClick" style={{marginLeft:'5px'}}><em class="icon-hamicon" onClick={(e)=>this.mobUserNav(e)}></em></div>
                    <div className={`mobNavigation ${this.state.mobUser?'active':''}`}>
                        <div className="mobOverlay"></div>
                        <div className="menuBox">
                            <div className="closeNav">
                                <em className="icon-close" onClick={this.mobUserNav}></em>
                            </div>
                           {this.state.userLogin?<div>
                                <div className="welcomeUser"> Hello, <strong>Arpita</strong></div>
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