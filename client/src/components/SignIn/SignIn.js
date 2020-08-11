import React,{useContext} from 'react'
import'./SignIn.css'
import {Link,Redirect } from 'react-router-dom'
import { Divider } from '@material-ui/core'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import {ApiPost} from '../../api'
import AuthContext from '../../context/state'

var userData={}
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
                email: "",
                password: "",
                loggedin:false,user:{}
                
        }
    }
    static contextType = AuthContext
    handleChange=(e)=>{
        this.setState({[e.target.id]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
     userData = {
          username: this.state.email,
          password: this.state.password
        };
    console.log(userData);
     

        
           
            ApiPost("auth/login", userData)
            .then(res => {
                console.log(res)
              // Save to localStorage
        // Set token to localStorage
              const token = res.data.token;
              localStorage.setItem("jwtToken", token);
              this.setState({loggedin:true})
              //console.log(localStorage.getItem('jwtToken'))
              
              // Set token to Auth header
              setAuthToken(token);
              // Decode token to get user data
              const {auth,getUser}=this.context
                getUser();
                this.setState({user:auth})
                console.log(this.state.user) 
                        
              // Set current user
             
              
            })
            .catch(err =>
              console.log(err.response)
              
            );
           
    }
       
     
    render(){
        
    if(this.state.loggedin){
       
        return(<Redirect to='/'/> )
    }
    else return (
        <div className='loginRegister'>
            <span  className="mobileSmall-logo">
                <img  src="https://studio.builder.ai/assets/images/logoSmall.svg" width="26" height="35" alt="logo"/>
            </span>
            <div  className="new-CloseButton" onClick={event =>  window.location.href='/'}><em  className="icon-cancel"></em></div>
            <div  className="loginRegisterLeft">
                <div  className="loginRegisterLeft-bg1 active"></div>
                <div  className="loginRegisterLeft-bg2"></div>
                <div className="loginRegisterLeft-bg2"></div>
                <span  className="topSmall-logo">
                    <img  src="https://studio.builder.ai/assets/images/logoSmall.svg" width="26" height="35" alt="logo"/>
                </span>
            </div>
            <div  className="loginRegisterRight">
                <div className="heading-appdetail">
                    <p > one last step. </p>
                    <h2 > Build your own version of <span ></span></h2>
                </div>
                <div  className="loginRegisterForm">
                    <div  className="authHeading">
                        <span  className="authHeading-main">Welcome back!</span>
                        <span  className="authHeading-sub">Sign in and let’s create something amazing</span>
                    </div>
                    <form  name="loginForm" >
                        <ul >
                            <li>
                                <span  className="field-labels">Enter Details</span>
                                <div  className="errorMsgBox"></div>
                                <input type="email" placeholder="Email address" name="email" maxlength="100" pattern="^\w+(?:[\.-]\w+)*@\w+(?:[\.-]\w+)*(?:\.\w{2,3})+$" appautofocus="" required="" id='email' onChange={(e)=>this.handleChange(e)}/>
                            </li>
                            <li  className="clearfix">
                                <div  className="relativeRow">
                                    <input  placeholder="Password" name="password" maxlength="100" minlength="8" required="" type="password" id='password' onChange={(e)=>this.handleChange(e)}/>
                                </div>
                                <span  className="forgotPass">Forgot password?</span>
                            </li>
                            <li>
                                <button  type="submit" className="submitButton" onClick={this.onSubmit}>
                                    Login
                                </button>
                                <p  className="orAction">Don't have an account? 
                                    <button  type="button"><Link to='/' className='signup'>SignUp</Link></button>
                                </p>
                            </li>
                        </ul>
                    </form>
                    <div  className="socialLogin">
                        <h4><span>or connect using</span></h4>
                        <span  className="socialIcon fbIcon" >
                        <a href='http://localhost:4000/auth/facebook'>    <em  className="icon-facebook" style={{color:'#3a5998'}}><i class="fab fa-facebook-f"></i></em></a>
                        </span>
                        <span  className="socialIcon googleIcon">
                        <a href='http://localhost:4000/auth/google'>   <em  className="icon-google-plus" style={{color:'#dc4e41'}}><i class="fab fa-google-plus-g"></i></em></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
      
    );

}}
export default SignIn;



