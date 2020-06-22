import React,{useState} from 'react'
import './loginIcon.css'
import {Modal,ModalBody,Form,FormGroup} from 'reactstrap'
import ReactDOM from 'react-dom';
import {Tooltip} from 'reactstrap'
import {Link} from 'react-router-dom'
import {auth }from '../authentication';
import axios from 'axios';
const Tool= () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
  
    const toggle = () => setTooltipOpen(!tooltipOpen);
  
    return (
      <div>
        <button type="button" class="btn btn-primary signin" id='Tooltip'  style={{marginLeft:'10px'}}>Sign In</button>
        <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltip" toggle={toggle} className='tool' autohide={false}>
            <div class="loginDropdown ol ">
             <i class="fas fa-user-check fa-2x li" style={{color:'#0572e0'}}></i>
             <span className='demo user-txt li'>Already have an account? </span><br/>
            <Link to='/signin' className='login user-txt li' >Login</Link>
            <hr/>
            <i class="fas fa-user-plus icon-newregister fa-2x li" style={{color:'#0572e0'}}></i>
            <span className='demo user-txt li'>Don't have an account?</span><br/>
            <Link to='/signup' className='login li' >Register</Link>
            </div>
        

        </Tooltip>
      </div>
    );
  }
class LoginIcon extends React.Component{
    constructor(props) {
        super(props);
    
        
        this.state = {
        
            isOpen: false,
            mobNavigation:false

        
        };
        this.togglePopUp = this.togglePopUp.bind(this);
        this.handleClickOutside=this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        
      }
      componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    
      
      setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
      handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.setState({isOpen:false})
        }
      }
      
      closeMobNavigation=()=>{
        this.setState({mobNavigation:false})
      }

     
      togglePopUp() {
        this.setState({
          isOpen: !this.state.isOpen,mobNavigation:true
        });
      }
      
    render(){
    return (
           <div>
                <div className='mobuserLogin' style={{marginLeft:'150px'}}>
                <em onClick={this.togglePopUp} style={{backgroundColor:'white'}} ><i class="far fa-user " style={{color:'rgb(0, 112, 224)'}}></i></em></div>
          {this.props.auth?<div className={`mobNavigation ${this.state.mobNavigation?'active':''}`}>
                  <div className="mobOverlay"></div>
                  <div className="menuBox">
                    <div className="closeNav" onClick={this,this.closeMobNavigation}><em className="icon-close"></em></div>
                    <div>
                      <div className="welcomeUser"> Hello, <strong>{auth.name}</strong></div>
                      <ul className="mobile-loginscreen">
                        <li><span className="userSetting"><em className="icon-settings-streamline-1"></em> Settings</span></li>
                        <li className="mydashBoard"><span>
                          <em class="icon-dashboard-3"></em> Go to Dashboard</span></li>
                          <li><span className="userLogout" ><em className="icon-logout-1"></em><a href='http://localhost:4000/auth/logout'>  Log Out</a></span></li></ul></div></div></div>:<div className={`commonPopUp ${this.state.isOpen?'active':''}`} >
                    <div class="popOverlay"></div>
                    <div class="popHolder loginoverlayPopup" ref={this.setWrapperRef}>
                        <div class="main">
                            <div class="login-list">
                                <p class="login_txt"> Already have an account? </p>
                                <button class="login_btn pink"> Login </button>
                            </div>
                            <div class="login-list">
                                <p class="login_txt"> Don’t have an account? </p>
                                <button class="login_btn"> Register </button>
                            </div>
                        </div>
                    </div>
                </div>}
                
                    
                
                
              {this.props.auth?'':<div class="loginPanel ul" >
                    <Tool/>
                    
                </div>}  
                
            </div>

    )}

}
export default LoginIcon;