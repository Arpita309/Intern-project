import React,{useState} from 'react'
import './status.css'
import Footer from '../footer/footer'
import User from '../loggedInUser/loggedInUser'
import LoginIcon from '../loginIcon/loginIcon'
const Status=()=>{
    const [mobNavigation,setMobNavigation]=useState(false)
    return(
        <div className='wrapper'>
            <div className='headerPart'>
                <nav id='header'>
                    <div className="logo">
                        <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.svg"/></a>
                        <a><img width="26" height="35" alt="" class="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.svg"/></a>
                    </div>
                    <div className="mobilebreadcrums"><strong>Confirmation</strong><span>(Step 5/4)</span></div>
                    
                    <div className="mobileClick" ><em class="icon-hamicon" onClick={(e)=>setMobNavigation(true)}></em></div>
                                <div className={`mobNavigation ${mobNavigation?'active':''}`}>
                                    <div className="mobOverlay"></div>
                                    <div className="menuBox"><div class="closeNav" onClick={(e)=>setMobNavigation(false)}><em class="icon-close"></em></div>
                                    <div>
                                    
                                    <div className="requestDemo view-proto mobile-btn custom-disabled"></div>
                                    <div className="requestLinks"><h3>NEED HELP?</h3><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newsales"></em></span> Want a demo? <strong>Talk to Sales <span>(Free)</span></strong></button></span><span className="buttonHold"><button type="button"><span className="reqIcon"><em className="icon-newexpert"></em></span> Want help with specing? <strong>Talk to Expert <span>(Refundable)</span></strong></button></span></div>
                                </div></div>
                                        
                                    
                            </div>
                            <LoginIcon/> 
                    <div className='hidemobileScreen'><User/></div>
                </nav>
            </div>
            <div className='middlePart'>
                <div className='payment-bx'>
                    <div className='container'>
                        <div className='row'>
                            <div className='paymentFlow'>
                                <div className='paymentDetailTable'>
                                    <div  className="leftColumn">
                                        <div>
                                            <div  className="topIcon">
                                                <span>
                                                    <em  className="icon-right"></em>
                                                </span>
                                            </div>
                                            <h3>Thank you!</h3>
                                            <p>Thank you for showing interest<br /> with us. We will get back to you<br/> shortly to discuss your payment <br/> preferences.</p></div></div>
                                    <div className='rightColumn'>
                                        <div className="stepsRow">
                                            <div  className="stepCol">
                                                <div  className="stepIcon tickmark"></div>
                                                <div  className="stepName">Buildcard</div>
                                            </div>
                                            <div  className="stepCol">
                                                <div  className="stepIcon exclamatorysign"></div>
                                                <div  className="stepName">Payment</div>
                                            </div>
                                            <div  className="stepCol">
                                                <div  className="stepIcon currentmark"></div>
                                                <div  className="stepName">Expert Call</div>
                                            </div>
                                            <div  className="stepCol">
                                                <div className="stepIcon graymark"></div>
                                                <div  className="stepName">Development</div>
                                            </div>
                                            <div  className="exclamatoryline"></div>
                                            
                                        </div>
                                        <h3 >Why need an expert call?</h3>
                                        <ul>
                                            <li >Expert will help you in finalising your idea.</li>
                                            <li >Expert will help you in creating right buildcard for your product.</li>
                                            <li >Expert will help you in finalising your idea.</li>
                                        </ul>
                                        <div className='scheduleExpert'>
                                            <button  type="button" className="callButton">Schedule an expert call</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Status;