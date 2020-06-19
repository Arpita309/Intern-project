import React from 'react'
import'./signup.css'
import {Link, Redirect } from 'react-router-dom'
import { Divider } from '@material-ui/core'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
var userData={}
class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
                email: "",
                password: "",
                name:'',organisation:'',contactNumber:'',nextStep:false,
                redirect:false,
                fbData:{}
                
        }
    }
   
    handleChange=(e)=>{
        this.setState({[e.target.id]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
     userData = {
          username: this.state.email,
          password: this.state.password,
          name:this.state.name,
          organisation:this.state.organisation,
          contactNumber:this.state.contactNumber
        };
    console.log(userData);
     

        
           
            axios.post("http://localhost:4000/auth/signup", userData)
            
            .then(res => {
                console.log(res.config.data)
              if(res.data){
                  console.log('successful signup')
                  this.setState({redirect:true})
              }
              else console.log('signup error')
            })
            .catch(err =>
              console.log(err.response.data)
              
            ); 
        
            }
            
            
    showNext=()=>{
        this.setState({nextStep:!this.state.nextStep})
    }
    loginFB=()=>{
        axios.get("http://localhost:4000/auth/facebook/token")
            
            .then(res => {
                console.log(res)
              if(res.data){
                  console.log('successful signup')
                  this.setState({redirect:true})
              }
              else console.log('signup error')
            })
            .catch(err =>
              console.log(err.response.data)
              
            ); 
        
            
    }        
    render(){
        if(this.state.redirect){
            return <Redirect to='/signin'/>
        }
    return (
     <div className='loginRegister'>
        
        <div  className={`mobileSmall-logo ${this.state.nextStep?'hide':''}`}>
            <img  src="https://studio.builder.ai/assets/images/logoSmall.png" width="26" height="35" alt="logo"></img>
        </div>
        {this.state.nextStep?<div  className="new-goBack signup" onClick={this.showNext}><em  className="icon-left-arrow"></em></div>:''}
        {this.state.nextStep?<div  className="backtoSignin"> Already have an account? <span><Link to='/signin' style={{color:'#0071e4'}}>Sign in</Link></span></div>:<div  className="new-CloseButton" ><em  className="icon-cancel"></em></div>}
        <div className='loginRegisterLeft'>
            <div className="loginRegisterLeft-bg2 active"></div>
            <span  className="topSmall-logo">
                <img  src="https://studio.builder.ai/assets/images/logoSmall.png" width="26" height="35" alt="logo"></img>
            </span>
        </div>
        <div className='loginRegisterRight'>
            <div  className="heading-appdetail">
                <p> one last step. </p>
                <h2> Build your own version of <span></span></h2>
            </div>
            <div className='loginBox active'>
                <div className='loginRegisterForm'>
                   
                   {this.state.nextStep?<div  className="authHeading">  <span className="authHeading-main">Instant quote</span><span className="authHeading-sub">for your product</span></div>:<div  className="authHeading"><span  className="authHeading-main" style={{fontWeight:'bolder'}}>Bring your idea to life</span>
                        <span  className="authHeading-sub">It’s easy – no techie skills needed</span></div>}
                    
                    <form name='registerForm'>
                        <ul className={`signupSteps ${this.state.nextStep?'':'activeStep'}`}>
                            <li>
                                <span  className="field-labels">Sign up to builder</span>
                                <div  className="errorMsgBox"></div>
                                <div  className="input-container">
                                    <input  type="text" placeholder="Email Address" maxLength="100" email="" autoComplete="off" name="email"  id='email' onChange={(e)=>this.handleChange(e)}></input>
                                </div>

                            </li>
                            <li>
                                <button  type="button" className="submitButton extraSpace signUpNextButtonClass errorAnimation" onClick={this.showNext}>Next </button>
                                <p  className="extraText">No credit card needed</p>
                                <p  className="orAction noMargin">Already have an account? <button  type="button" ><Link to='/signin' style={{color:'#0071e4'}}>Sign in</Link></button></p>
                            </li>
                        </ul>
                        <ul className={`signupSteps ${this.state.nextStep?'activeStep':''}`}>
                            <li>
                                <div  className="onlyAppdetailPopup"> Edit </div>
                                <div  className="errorMsgBox"></div>
                                <div ><legend className="ex-label">Email Address</legend><span  className="enteredEmail">{this.state.email}</span></div>
                            </li>
                            <li >
                                <input  name="name" type="text" pattern="[a-zA-Z ]*" maxLength="100" placeholder="Enter Name (ex. John Smith)" id='name' onChange={(e)=>this.handleChange(e)}></input>
                            </li>
                            <li>
                                <international-phone-number  placeholder="Mobile Number" name="mobileNumber"  maxLength="20" >
                                    <div  className="input-group">
                                        <span  className="input-group-addon flagInput">
                                            <div  className="dropdown">
                                                <button  type="button" class="dropbtn btn">
                                                    <span  className="flag flag-in"></span>
                                                    <span className="arrow-down"></span>
                                                </button>
                                            </div>
                                        </span>
                                        <input  className="form-control" placeholder="Mobile Number" type="text" maxLength="20" id='contactNumber' onChange={(e)=>this.handleChange(e)}></input>
                                    </div>
                                </international-phone-number>
                            </li>
                            <li>
                                <input  name="organisation" type="text" maxLength="100" placeholder="Organisation (Optional)"  id='organisation' onChange={(e)=>this.handleChange(e)}></input>
                            </li>
                            <li>
                                <div  className="relativeRow"><input  placeholder="Password" name="password" maxLength="100" minLength="8"  type="password" onChange={(e)=>this.handleChange(e)} id='password'></input></div>
                            </li>
                            <li>
                                <div  className="registerCheck">
                                    <p><input type="checkbox" id="businesspurposes"></input>
                                    <label  htmlFor="businesspurposes" ></label> Email me exclusive Builder promotions and updates. I can unsubscribe at any time as stated in the <a  href="https://www.engineer.ai/privacy-policy" target="_blank">Privacy Policy.</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <button  type="submit" className="submitButton" onClick={this.onSubmit}><span  className="icon-right"></span> Register </button>
                                <p  className="orAction">By clicking on Register, you are agree with our <a  href="https://www.engineer.ai/terms" target="_blank">Terms and Conditions.</a></p>
                            </li>
                            <div  className="backtoSigninMob"> Already have an account? <span><Link to='/signin' style={{color:'#0071e4'}}>Sign in</Link></span></div>
                        </ul>

                    </form>
                    {this.state.nextStep?'':<div>
                        <div  className="socialLogin">
                            <h4><span>or connect using</span></h4>
                            <span  className="socialIcon fbIcon" onClick={this.loginFB}>
                            <a href='http://localhost:4000/auth/facebook'>    <em  className="icon-facebook"><i class="fab fa-facebook-f"></i></em></a>
                            </span>
                            <span  className="socialIcon googleIcon">
                            <a href='http://localhost:4000/auth/google'>   <em  className="icon-google-plus"><i class="fab fa-google-plus-g"></i></em></a>
                            </span>
                        </div></div>} 
                    
                </div>
            </div>
        </div>
        
     </div>
    );}

}
export default SignUp;