
import React from 'react'
import './billingDetails.css'
import NeedHelp from '../needHelp/needHelp'
import Footer from '../footer/footer'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {ApiPost, ApiGet} from '../../api'
var userData={}
class BillingDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            billingDetails:true,contract:false,
            paymentSummary:false,dueNow:false,security:false,firstname:'',email:'',contact:'',loaclity:'',state:'',city:'',zip:'',apartment:'',gst:'',lastname:'',company:'',
            price:'',weeks:''
        }

    }
    componentDidMount(){
        ApiGet(`priceAndDuration/template/?templateId=${this.props.match.params.template}`)
        .then(res=>{
            this.setState({price:res.data.price,weeks:res.data.weeks})
        })
    }
    showBilling=()=>{
        if(this.state.contract){
            this.setState({contract:false})
        }
       this.setState({billingDetails:!this.state.billingDetails})
    }
    showContract=()=>{
        if(this.state.billingDetails){
            this.setState({billingDetails:false})
        }
        this.setState({contract:!this.state.contract})
    }
    showPaymentSummary=()=>{
        this.setState({paymentSummary:!this.state.paymentSummary})
    }
    showinfobox=(e)=>{
        
        if(e.target.id==2){
            this.setState({dueNow:true})
        }
        else if(e.target.id==3){
            this.setState({security:true})
        }
        else{
            this.setState({dueNow:false,security:false})
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.id]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
     userData = {
          firstName:this.state.firstname,
          lastName:this.state.lastname,
          companyName:this.state.company,
          locality:this.state.locality,
          contact:this.state.contact,
          state:this.state.state,
          apartment:this.state.apartment,
          country:this.state.country,
          gst:this.state.gst,
          zip:this.state.zip,
          email:this.state.email,
          city:this.state.city
        };
    console.log(userData);
    ApiPost("billing", userData)
            
            .then(res => {
                console.log(res)
              if(res.data){
                  console.log('successful ')
                  
              }
              else console.log('error')
            })
            .catch(err =>
              console.log(err.response.data)
              
            ); 
        
}
    render(){
        return(
            <div className='wrapper'>
                <div className='headerPart'>
                    <nav id='header'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='logo'>
                                    <a href='/'><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                                    <a href='/'><img width="26" height="35" alt="" className="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                                </div>
                                <div className="mobilebreadcrums" style={{marginBottom:'15px'}}><strong>Payment Plan</strong><span >(Step 1/3)</span></div>
                                <div className='breadcrums'>
                                    <ul>
                                        <li>Buildcard</li>
                                        <li >Payment Plan </li>
                                        <li class="active">Billing Details/Contract </li>
                                        <li className='disablelink'>Confirm and Pay</li>
                                    </ul>
                                </div>
                                <div  className='show-xs'>
                                <NeedHelp/>
                                </div>
                                   
                                <div className="secure hidden-xs " style={{marginLeft:'10px'}}><img src="https://studio.builder.ai/assets/images/shield.png" alt=""></img> 100% Secure </div>
                            </div>
                        </div>
                    </nav>
                </div>            
                <div className='middlePart'>
                    <div className='container-fluid paymentContainer' style={{marginRight:'500px',marginTop:'50px'}}>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='billingDetails'>
                                    <h1  style={{textAlign:'left'}}>Billing Details<em  className={`${this.state.billingDetails?'icon-minus':'icon-plus'}`} onClick={this.showBilling}></em></h1>
                                   {this.state.billingDetails? <div className='fixHeight'>
                                        <form>
                                            <div className='row'>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label>First Name <strong>*</strong></label>
                                                    <div  className="inputfield">
                                                        <input  type="text" id="firstname" placeholder="Your first name" required="" maxlength="100" minlength="1" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label>Last Name <strong>*</strong></label>
                                                    <div  className="inputfield">
                                                        <input  type="text" id="lastname" placeholder="Your last name" required="" maxlength="100" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label>Company Name </label>
                                                    <div  className="inputfield">
                                                        <input type="text" id="company" minlength="1" maxlength="15" placeholder="Your Company Name" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label>E-mail Address <strong>*</strong></label>
                                                    <div  className="inputfield">
                                                        <input  type="text" id="email" placeholder="Your e-mail address" required="" email="" maxlength="100" disabled="" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6' style={{textAlign:'left'}}>
                                                    <label>Phone Number <strong>*</strong></label>
                                                    <div className='row'>
                                                        <div  className="col-md-12" style={{textAlign:'left'}}>
                                                            <div  className="inputfield">
                                                                <international-phone-number  placeholder="Your phone number" name="mobileNumber" required=""  maxlength="20" >
                                                                    <div className="input-group">
                                                                        
                                                                        <input  required="" class="form-control " placeholder="Your phone number" type="text" maxlength="20" id='contact' onChange={(e)=>this.handleChange(e)}></input>
                                                                    </div>
                                                                </international-phone-number>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label>Street/ Locality <strong>*</strong></label>
                                                    <div  className="inputfield">
                                                        <input   type="text" id="locality" required="" maxlength="100" minlength="1" className=" pac-target-input" placeholder="Enter a location" autoComplete="off" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label>City <strong >*</strong></label>
                                                    <div  className="inputfield">
                                                        <input  type="text" id="city" placeholder="eg. Los Angeles" required="" maxlength="100" minlength="1" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label >Apartment/ Unit Number <strong>*</strong></label>
                                                    <div className="inputfield">
                                                        <input type="text" id="apartment" placeholder="eg. 1234" required="" maxlength="100" minlength="1" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                                <div  className="col-md-6 col-sm-12 col-xs-12 " style={{textAlign:'left'}}>
                                                    <label>State/ Territory/ Region <strong>*</strong></label>
                                                    <div  className="inputfield">
                                                        <input  type="text" id="state" placeholder="eg. California" required="" maxlength="100" minlength="1" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label>ZIP Code <strong>*</strong></label>
                                                    <div  className="inputfield">
                                                        <input  type="text" id="zip" placeholder="eg. 90051" required="" minlength="1" maxlength="12" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                                <div  className="col-md-6 col-sm-12 col-xs-12" style={{textAlign:'left'}}>
                                                    <label >Country <strong>*</strong></label>
                                                    <div  className="inputfield">
                                                        <input  type="text" id="country" placeholder="eg. USA" required="" maxlength="100" minlength="1" onChange={(e)=>this.handleChange(e)}></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div  className="col-xs-12">
                                                    <div className="usegstin" style={{textAlign:'left'}}>
                                                        <input  type="checkbox" name="vehicle" value="" id="gst"onChange={(e)=>this.handleChange(e)}></input>
                                                        <label  htmlFor="gst" > Use GSTIN for this project <span >(optional)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="row">
                                                <div  className="col-md-12">
                                                    <button  type="button" onClick={(e)=>this.onSubmit(e)}>SAVE<span   className="tooltip-left-arrow">Please fill billing details</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>:''}
                                </div>
                                <div className='contracts' style={{textAlign:'left'}}>
                                    <h1 >Terms and Conditions <em  className={`${this.state.contract?'icon-minus':'icon-plus'} `} onClick={this.showContract}></em></h1>
                                    {this.state.contract?<div>
                                        <div className='contractListBox'>
                                            <p >
                                                <input  type="checkbox" id="checkboxone"></input>
                                                <label htmlFor="checkboxone"></label> I understand that my project(s) ("Buildcard(s)") is built on a framework of potential or existing reusable features, designs, workflows and templates; and this will be licensed to me on a non exclusive basis upon my final payment; I will also be provided a copy of the source code. I agree and understand Builder.ai will be able to use any of its potential or existing reusable parts for other customers. I understand that I can only have one instance of the project running in parallel; if I wish to run more than one instance then I shall seek written permission from Builder.ai
                                            </p>
                                            <p>
                                                <input type="checkbox" id="checkboxtwo"></input>
                                                <label  htmlFor="checkboxtwo"></label> I understand that whatever is explicitly defined and/or billed for as customizations (design, source code, business logic, workflows or custom features) in my Buildcard(s) will remain my intellectual property and be assigned to me exclusively upon payment. I understand that the aggregate intellectual property of my Buildcard(s) will become my property upon the final payment.
                                            </p>
                                            <p >
                                                <input  type="checkbox" id="checkboxthree"></input>
                                                <label  htmlFor="checkboxthree"></label> I understand that any timelines given are indicative and Builder.ai will do whatever is reasonably necessary to achieve them but does not guarantee them unless otherwise provided for in writing. I understand that my timely response to questions and approvals is essential to a speedy completion of my Buildcard(s).
                                            </p>
                                            <p>
                                                <input  type="checkbox" id="checkboxfour"></input>
                                                <label  htmlFor="checkboxfour"></label> I understand that Builder will retain all control of the Intellectual Property except any data entered by me or my company until all contracted payments have been made unless otherwise agreed with Builder.ai in writing. I agree that Builder.ai can delete my data if I do not make payments for 14 days from any due date.
                                            </p>
                                            <p>
                                                <input  type="checkbox" id="checkboxfive"></input>
                                                <label  htmlFor="checkboxfive"></label> I understand and agree to the terms and conditions as outlined in the Builder.ai ( Engineer.ai's) <span>Master User Terms &amp; License Agreement</span>. I understand and agree to the <span>mutual non disclosure clauses</span> within the agreement.
                                            </p>
                                        </div>
                                    </div>:''}
                                </div>
                            </div>
                            
                            <div className='col-md-4'>
                                <div className={`paymentSummary dueNow ${this.state.paymentSummary? 'active':''}`}>
                                    <div className='mobilehandling'>
                                        <div className='mobileClick'  onClick={this.showPaymentSummary}></div>
                                        <div  className="closeButton" onClick={this.showPaymentSummary}></div>
                                        <h3  className="xs-small-head" style={{textAlign:'left'}}>Due Now <span  className="info"><img  src="https://studio.builder.ai/assets/images/info_blue.png" alt="" id='2' onClick={(e)=>{this.showinfobox(e)}}></img>
                                        {this.state.dueNow?<div  className="infoBox "><ul ><li>This is the amount of money you will pay at the end of checkout to begin your project. Later, you will be able to choose the date when your project begins development.</li></ul><em  className="icon-cancel closeInfo" onClick={this.showinfobox}></em></div>:''}
                                        </span></h3>
                                        <div className='downPayment'>
                                            <div  className="detailRow">
                                                <label> Security Deposit <span  className="info "><img  src="https://studio.builder.ai/assets/images/info_blue.png" alt="" id='3' onClick={(e)=>{this.showinfobox(e)}}></img>
                                                {this.state.security?<div  className="infoBox "><ul ><li >This is payed up front and reserves your development team to ensure they are ready to start on time.</li><li >This cost will be refunded at the end of the development process (we will deduct the cost from your final payment).</li></ul><em  class="icon-cancel closeInfo" onClick={this.showinfobox}></em></div>:''}
                                                </span></label>
                                                <p> ₹1,39,809.16 </p>
                                            </div>
                                            <div  className="detailRow">
                                                <label>Tax (18% GST) </label><p>₹25,165.65</p>
                                            </div>
                                        </div>
                                        <div className='totalContinue'>
                                            <div  className="detailRow">
                                                <h3>Total</h3>
                                                <h3> ₹1,64,974.81 </h3>
                                            </div>
                                            <div className='detailRow'>
                                                <specing-payment className='specingCompo'>
                                                   <Link to={`/payment/${this.props.match.params.template}`}><button  type="button" className="payNowBtn onlyShowDesktop" > Continue </button></Link> 
                                                    <button  type="button" className="payNowBtn onlyShowMobile"> PROCEED TO PAYMENT </button>
                                                </specing-payment>
                                            </div>
                                            <p style={{textAlign:'left'}}>By clicking continue button, you agree with our Terms and Conditions and the related documents will be sent to your registered email address</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div  className="col-md-1"></div>
                         </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default BillingDetails;