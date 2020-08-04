import React, { useState } from 'react'
import './connectModal.css'


const Contact=()=>{
    const [call,setCall]=useState(false);
    return(
            <div className='commonPopUp specCall-bx active'>
                <div className="popOverlay"></div>
                <div className='popHolder'>
                    <app-meet-now className="speCallPopup_bx" >
                        <div  className="baseBlock">
                            <div  className="middle-block">
                                <div  className={`${call?'sinndapopupscreen':'main-screen'} slideThis`}>
                                    <div  className="spec-call-folow">
                                        <div>
                                            <div  className="closeButton">
                                                <span  className="icon-cancel"></span>
                                            </div>
                                            <h2  className="header">{call?'Sign NDA':'Need Help?'} </h2>
                                            <div className="experts-block">
                                                {call?<div  className="nadtext-text">
                                                    <p>The Customer and Engineer.ai are considering entering into a contract for the provision of software building services. In advance of doing so the parties intend to exchange information that may be sensitive to their business.<br/> The <span>non-disclosure agreement</span> is entered into in contemplation of that exchange of information.</p>
                                                    <h4>By clicking ‘I agree’, you warrant that you are duly authorised, and understand and agree to all of the above terms without exception.</h4>
                                                </div>:<><div  className="img-bx">
                                                    <img  src="https://studio.builder.ai/assets/images/experts.png" alt="exprts icon"/>
                                                </div>
                                                <div  className="talktoTeam">
                                                    <p>Talk to our team of product expert <br />
                                                        <strong  className="strick">worth $300 </strong>
                                                        <strong > absolutely <span>FREE</span></strong>
                                                    </p>
                                                </div></>}
                                            </div>
                                        </div>
                                        <div  className="action-space">
                                            <form>
                                                {call?<div  className="actionbtn">
                                                    <button  type="button"> I agree </button>
                                                    </div>:<><div  className="availableCall">
                                                    <input  type="text" placeholder="Are you ready for 30 mins call?"/>
                                                    <button  type="button" className="yesButton">Yes</button>
                                                    <button  type="button" className="connectButton"> Connect Now </button>
                                                </div>
                                                <div  className="actionbtn">
                                                    <button  type="button" className="scheduleButton" onClick={()=>setCall(true)}>Schedule a Call</button>
                                                </div>
                                                <div  className="actionbtn"></div>
                                                <div  className="actionbtn"></div></>}
                                            </form>
                                        </div>
                                        <p className="noteText">Note: All calls are protected by NDA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </app-meet-now>
                </div>
            </div>
    )
}
export default Contact;