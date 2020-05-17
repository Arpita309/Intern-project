import React from 'react'
import'./SignIn.css'
import {Link } from 'react-router-dom'
import { Divider } from '@material-ui/core'

const SignIn=()=>{
    
    return (
      <div className='row'>
         <div className='col-lg-6'>
            
             <img src='https://studio.builder.ai/login-bg1.4d0d1b65f3e2992486fb.png'style={{zIndex:'1',position:'absolute'}} className='bgimg'></img>
             <div className='row'>
            <div className='col-2' style={{backgroundColor:'white'}}> <img width="26" height="35" src='https://studio.builder.ai/assets/images/logoSmall.png' style={{zIndex:'2',position:'absolute',top:'10px',backgroundColor:'white'}}></img>
             </div>
             </div>
         </div>
         <div className='col-lg-6'>
             <div>
                <button className='cross' onClick={event =>  window.location.href='/'}>X</button>
             </div>
             <div className='container'>
                <div>
                    <h2 style={{textAlign:'left',fontSize:'40px',fontWeight:'bolder'}}>Welcome Back!</h2>
                    <span className='subhead'>Sign in and let's create something amazing</span>
                </div>
                <div>
                    <p style={{color:'gray',marginTop:'30px',marginLeft:'0px',textDecoration:'none',fontWeight: 'normal'}}>Enter Details</p>
                    <input   type="email" placeholder="Email address" name="email" maxlength="100" pattern="^\w+(?:[\.-]\w+)*@\w+(?:[\.-]\w+)*(?:\.\w{2,3})+$" appautofocus="" required="" ></input><br/>
                    <input className='in2'  placeholder="Password" name="password" maxlength="100" minlength="8" required="" type="password" ></input><br/>
                    <span className="forgotPass">Forgot password?</span>
                </div>
                <div>
                    <button className='log'>LOGIN</button>
                    <span className='sign'>Don't have an account?<Link to='/' className='signup'>SignUp</Link></span>
                </div>
                <div>
                    <Divider width="500px" style={{marginTop:'30px'}}/>
                    <p className='connect'>or connect using</p>
                    <span><button className='connectfb'><i class="fa fa-facebook" aria-hidden="true"style={{color:'#3a5998'}}></i></button><button className='connectg'><i class="fa fa-google-plus" aria-hidden="true" style={{color:'#dc4e41'}}></i></button></span>
                </div>
             </div>
         </div>    
          

      </div>
    );

}
export default SignIn;