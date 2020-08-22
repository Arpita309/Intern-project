import React from 'react'
import './loggedInUser.css'

import {Link} from 'react-router-dom'
import axios from 'axios'

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
                <h3> Hello <strong onClick={this.setActive}>{this.props.auth.name?this.props.auth.name.split(" ")[0] :''}</strong></h3>
                <div className={`userDropdown ${this.state.active?'active':''}`} style={{zIndex:'2'}}>
                    <ul>
                        <li className="mydashBoard">
                        <Link to='/dashboard' style={{textDecoration:'none'}}><span><em className="icon-dashboard-3" ></em>My Dashboard</span></Link> 
                        </li>
                        {/*<li><span className="userSetting"><em className="icon-settings-streamline-1"></em> Settings</span></li>*/}
                        <li><a href='http://localhost:4000/auth/logout' style={{textDecoration:'none'}}><span className="userLogout" ><em class="icon-logout-1"></em>  Log Out</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default User;