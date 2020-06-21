import React from 'react'
import './dashboard.css'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className='wrap'>
                <div className='headerPart'>
                    <nav id='header'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className="logo">
                                    <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                                    <a><img width="26" height="35" alt="" class="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                                </div>
                                <div className="selectedCurrency " style={{marginLeft:'1000px'}}><img alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/image/file/591a9aa714c49f7f467463f6/Rupee.svg"></img></div>
                                <div className="newProject"><button> Price new project </button></div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='middlePart'>
                    <div className='dashboardArea'>
                        <div className="mobileMsg">
                            <h2>Sorry dashboard is not active for mobile view. To see the full dashboard, please open it on desktop.</h2>
                        </div>
                        <div className='dashboardLeft' style={{overflow:'scroll'}}>
                            <div  className="mainTab">
                                <em  className="icon-dashboard-1"></em>
                                <span >Dashboard</span>
                            </div>
                            <div className='subMenu'>
                                <h4 >IDEA CARDS</h4>
                                <ul>
                                    <li>
                                        <div  className="subMenuRow">
                                            <em className="icon-finished"></em>Spec call details <strong >0</strong>
                                        </div>
                                    </li>
                                    <li><div  className="subMenuRow"><em  className="icon-finished"></em> Generated Build Cards<strong >18</strong></div></li>
                                    <li><div  className="subMenuRow"><em  className="icon-archived"></em> Incomplete Build Cards <strong >14</strong></div></li>
                                    <li><div  className="subMenuRow"><em className="icon-archived"></em> Invited <strong>0</strong></div></li>
                                </ul>
                            </div>
                            <div className='subMenu'>
                                <h4>PROJECTS</h4>
                                <ul>
                                    <li ><div  className="subMenuRow"><em  className="icon-running"></em> Running <strong >0</strong></div></li>
                                    <li><div  className="subMenuRow"><em  className="icon-queued"></em> Queued <strong >0</strong></div></li>
                                    <li><div  className="subMenuRow"><em  className="icon-finished"></em> Completed <strong >0</strong></div></li>
                                    <li><div  className="subMenuRow"><em  className="icon-archived"></em> Archived <strong >0</strong></div></li></ul>
                            </div>
                            <div  className="subMenu">
                                <h4>PROTOTYPE</h4>
                                <ul>
                                    <li ><div  className="subMenuRow"><em  className="icon-customprototype"></em> Tailor-made Prototype <strong>0</strong></div></li>
                                    <li><div  className="subMenuRow"><em  className="icon-prototype-1"></em> Prototype <strong >10</strong></div></li>
                                </ul>
                            </div>
                            <div  className="subMenu">
                                <ul>
                                    <li><div  className="subMenuRow"><em  className="icon-plus"></em> Additional Features Request<strong>0</strong></div></li>
                                </ul>
                            </div>
                            <div  className="subMenu">
                                <ul>
                                    <li><div  className="subMenuRow"><span className="left-icon"><img  src="https://studio.builder.ai/assets/images/payment-icons.png"></img></span> Payment </div></li>
                                </ul>
                            </div>
                            <div  className="mainTab">
                                <em  className="icon-settings"></em>
                                <span>Settings</span>
                            </div>
                        </div>
                        <div className='dashboardRight'>
                            <div className='dashboardHold'>
                                <app-complete-cards>
                                    <div  className="dashHeading">Completed Cards <button  type="button">Show all </button></div>
                                    <div className='dashProjectRow hideCard'>
                                        <div className='progressCard'>
                                            <div  className="cardHead">
                                                <div  className="cardLeft">
                                                    <h3>My Builder Project</h3>
                                                    <h4>Last edited: 18th June 2020</h4>
                                                </div>
                                                <div  className="cardRight">
                                                    <div  className="cardMore">
                                                        <em  className="icon-more"></em>
                                                        <div  className="cardDropDown">
                                                            <ul >
                                                                <li>Delete Card</li>
                                                                <li>Sign an NDA</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="shareIcon">
                                                        <em  className="icon-share"></em>
                                                    </div>
                                                    <div  className="inviteIcon"><em  className="icon-invite"></em></div>
                                                    <div  className="transferIcon"><em  className="icon-transfer-1"></em></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </app-complete-cards>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}
export default Dashboard;