import React from 'react'
import'./signup.css'
import {Link } from 'react-router-dom'
import { Divider } from '@material-ui/core'

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
                email: "",
                password: "",
                name:'',organisation:'',contactNumber:''
                
        }
    }
   
    handleChange=(e)=>{
        this.setState({[e.target.id]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
     userData = {
          email: this.state.email,
          password: this.state.password,
          name:this.state.name,
          organisation:this.state.organisation,
          contactNumber:this.state.contactNumber
        };
    console.log(userData);
     

        
           
            axios.post("http://localhost:4000/users/login", userData)
            .then(res => {
                console.log(res.data)
              // Save to localStorage
        // Set token to localStorage
              const { token } = res.data;
              localStorage.setItem("jwtToken", token);
              // Set token to Auth header
              setAuthToken(token);
              // Decode token to get user data
              const decoded = jwt_decode(token);
              // Set current user
              this.setCurrentUser(decoded);
            })
            .catch(err =>
              console.log(err.response.data)
              
            ); };
    render(){
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
                    <h1 style={{textAlign:'left',fontWeight:'bolder',fontSize:'40px'}}>Get Started with builder</h1>
                    <span className='subhead'>Price your idea,absolutely free</span>
                </div>
                <div>
                    <p style={{color:'gray',marginTop:'30px',marginLeft:'0px',textDecoration:'none',fontWeight: 'normal'}}>Sign up to builder</p>
                    <input   type="email" placeholder="Email address" name="email" maxlength="100" pattern="^\w+(?:[\.-]\w+)*@\w+(?:[\.-]\w+)*(?:\.\w{2,3})+$" appautofocus="" required=""  id='email' onChange={(e)=>{this.handleChange(e)}}></input><br/>
                    
                    
                </div>
                <div>
                    <button className='log'>Next</button>
                    <span style={{color:'gray',fontSize:'14px',marginLeft:'190px',marginTop:'30px'}}>No credit card needed</span>
                    <span className='sign'>Already have an account?<Link to='/signin' className='signup'>Sign in</Link></span>
                </div>
                <div>
                    <Divider width="500px" style={{marginTop:'20px'}}/>
                    <p className='connect'>or connect using</p>
                    <span><button className='connectfb'><i class="fa fa-facebook" aria-hidden="true"style={{color:'#3a5998'}}></i></button><button className='connectg'><i class="fa fa-google-plus" aria-hidden="true" style={{color:'#dc4e41'}}></i></button></span>
                </div>
             </div>
         </div>    
          

      </div>
    );}

}
export default SignUp;