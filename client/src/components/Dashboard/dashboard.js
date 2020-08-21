import React from 'react'
import './dashboard.css'

import AuthContext from '../../context/state'
import { ApiGet } from '../../api'
class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            active:false,
            saved:[],completed:[]
        }
    }
    componentDidMount(){
        ApiGet('buildCard')
        .then(res=>{
            console.log(res.data)
            res.data.map(value=>{
                if(value.status=='saved')
                this.setState({saved:[...this.state.saved,value]})
                else if(value.status=='completed')
                this.setState({completed:[...this.state.completed,value]})
            })
                
        }
           )
    }
    setActive=()=>{
        this.setState({active:!this.state.active})
        
    }
    render(){
        
        return(
            
            <div className='wrap'>
                <AuthContext.Consumer>
                {
                    (props)=>{
                        return(
                            <div className='headerPart'>
                    <nav id='header'>
                        <div className='container-fluid'>
                            <div>
                                <div className="logo">
                                    <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                                    <a><img width="26" height="35" alt="" class="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                                </div>
                                
                                <div className="userPanel">
                                    <h3> Hello <strong onClick={this.setActive}>{props.auth.auth.name}</strong></h3>
                                    <div className={`userDropdown ${this.state.active?'active':''}`} style={{zIndex:'2'}}>
                                        <ul>
                                            <li>
                                                <span><em className="icon-pricenewproject">Price new project</em></span>
                                            </li>
                                            
                                            <li><span className="userLogout" ><em class="icon-logout-1"></em><a href='http://localhost:4000/auth/logout'>  Log Out</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="selectedCurrency "><img alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/image/file/591a9aa714c49f7f467463f6/Rupee.svg"></img></div>
                                <div className="newProject"><button> Price new project </button></div>
                            </div>
                        </div>
                    </nav>
                </div>
                        )
                    }
                }
            </AuthContext.Consumer>
                
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
                                        {this.state.completed.map(value=>
                                         <div className='progressCard'>
                                         <div  className="cardHead">
                                             <div  className="cardLeft">
                                                 <h3>{value.projectName}</h3>
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
                                         <div className='cardMiddle'>
                                             <div  className="completeDetail">
                                                 <div  className="completeRow">
                                                     <div className="completeBox">
                                                         <h3><span  className="blueText">{value.templateId.length}</span> template</h3>
                                                         <em  className="icon-template"></em>
                                                     </div>
                                                     <div className="completeBox">
                                                         <h3><span  className="pinkText">{value.features[0].features.length}</span> features</h3>
                                                         <em  className="icon-feature"></em>
                                                     </div>
                                                 </div>
                                                 <div  className="completeRow">
                                                     <h4 >
                                                         <div  className="team-dash-country">Team <span>{value.teamLocation}</span></div>
                                                         <em  className="icon-team"></em>
                                                     </h4>
                                                     <h4 >
                                                         <div>Duration <span>6 months (24 weeks)</span></div>
                                                         <em  className="icon-speed"></em>
                                                     </h4>
                                                 </div>
                                             </div>
                                             <div className='projectPhases'>
                                                 <ul>
                                                     {value.phase.map(phase=>
                                                        <li>
                                                            <div  className="phaseTitle">{phase.title}</div>
                                                            <div className="phaseDetail">
                                                                <img  alt="" src="https://s3.ap-south-1.amazonaws.com/assets.engineering.ai/icon_android.png"></img>
                                                                <div  className="morePhase">+ {value.platformIDs.length-1} <div  className="platformTooltip"><h5>{value.platformIDs.length} Platform Selected</h5>{value.platforms.map(platform=><h6><em className="icon-right"></em>{platform.title}</h6>)}</div></div>
                                                            </div>
                                                        </li>
                                                        )}
                                                 </ul>
                                             </div>
                                             
                                         </div>
                                         <div  className="cardBottom">
                                             <div  className="priceTag"><div >{value.price}</div></div>
                                             <button>View </button>
                                             <div  className="clearfix"></div>
                                         </div>
                                     </div>
                                            )}
                                       
                                    </div>
                                </app-complete-cards>
                                <app-saved-cards>
                                    <div className="dashHeading">Saved Cards 
                                        <button type="button">Show all </button>
                                    </div>
                                    <div className='dashProjectRow hideCard'>
                                        {this.state.saved.map(value=>
                                        <div className='progressCard'>
                                        <div  className="cardHead">
                                            <div  className="info-card">
                                                <em  className="icon-cancel"></em>
                                                <p>Complete this card to get full information.</p>
                                            </div>
                                            <div  className="cardLeft">
                                                <h3>My Builder Project</h3>
                                                <h4>Last edited: 14th June 2020</h4>
                                            </div>
                                            <div  className="cardRight">
                                                <div  className="cardMore">
                                                    <em  className="icon-more"></em>
                                                    <div  className="cardDropDown">
                                                        <ul>
                                                            <li > Delete Card </li><li>Rename</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cardMiddle'>
                                             <div  className="completeDetail">
                                                 <div  className="completeRow">
                                                     <div className="completeBox">
                                                         <h3><span  className="blueText">{value.templateId.length}</span> template</h3>
                                                         <em  className="icon-template"></em>
                                                     </div>
                                                     <div className="completeBox">
                                                         <h3><span  className="pinkText">{value.features[0].features.length}</span> features</h3>
                                                         <em  className="icon-feature"></em>
                                                     </div>
                                                 </div>
                                                 <div  className="completeRow">
                                                     <h4 >
                                                         <div  className="team-dash-country">Team <span>{value.teamLocation}</span></div>
                                                         <em  className="icon-team"></em>
                                                     </h4>
                                                     <h4 >
                                                         <div>Duration <span>6 months (24 weeks)</span></div>
                                                         <em  className="icon-speed"></em>
                                                     </h4>
                                                 </div>
                                             </div>
                                             <div className='projectPhases'>
                                                 <ul>
                                                     {value.phase.map(phase=>
                                                        <li>
                                                            <div  className="phaseTitle">{phase.title}</div>
                                                            <div className="phaseDetail">
                                                                <img  alt="" src="https://s3.ap-south-1.amazonaws.com/assets.engineering.ai/icon_android.png"></img>
                                                                <div  className="morePhase">+ {value.platformIDs.length-1} <div  className="platformTooltip"><h5>{value.platformIDs.length} Platform Selected</h5>{value.platforms.map(platform=><h6><em className="icon-right"></em>{platform.title}</h6>)}</div></div>
                                                            </div>
                                                        </li>
                                                        )}
                                                 </ul>
                                             </div>
                                             
                                         </div>
                                        <div  className="cardBottom">
                                            <button>Complete Card </button>
                                        </div>
                                    </div>
                                            )}
                                        
                                    </div>
                                </app-saved-cards>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}
export default Dashboard;