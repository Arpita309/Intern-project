import React from 'react'
import './userDashboard.css'
 class User extends React.Component{
     constructor(props){
         super(props)
         this.state={
             dropdown:false
         }
     }
     dropdown=()=>{
         this.setState({dropdown:!this.state.dropdown})
     }
     render(){
         return(
            <div className="userPanel">
                <h3 style={{verticalAlign:'middle'}}> Hello <strong onClick={this.dropdown}>Arpita</strong></h3>
                <div className={`userDropdown ${this.state.dropdown?'active':''}`}>
                    <ul>
                        <li className="mydashBoard">
                            <span><em className="icon-dashboard-3"></em> My Dashboard</span>
                        </li>
                        <li>
                            <span className="userSetting"><em class="icon-settings-streamline-1"></em> Settings</span>
                        </li>
                        <li>
                            <span className="userLogout"><em class="icon-logout-1"></em> Log Out</span>
                        </li>
                    </ul>
                </div>
            </div>
         )
     }
 }
 export default User;