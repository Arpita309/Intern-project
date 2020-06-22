import React from 'react'
import './loggedInUser.css'
import {auth }from '../authentication'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Dashboard from '../Dashboard/dashboard'
class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            active:false
        }
    }
    setActive=()=>{
        this.setState({active:!this.state.active})
        
    }
   
    render(){
        
        return(
            <div className="userPanel">
                <h3> Hello <strong onClick={this.setActive}>{auth.name}</strong></h3>
                <div className={`userDropdown ${this.state.active?'active':''}`} style={{zIndex:'2'}}>
                    <ul>
                        <li className="mydashBoard">
                            <span><em className="icon-dashboard-3" onClick={<Dashboard user={auth}/>}></em><Link to='/dashboard'>My Dashboard</Link> </span>
                        </li>
                        <li><span className="userSetting"><em className="icon-settings-streamline-1"></em> Settings</span></li>
                        <li><span className="userLogout" ><em class="icon-logout-1"></em><a href='http://localhost:4000/auth/logout'>  Log Out</a></span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default User;