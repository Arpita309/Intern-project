import React from 'react'
import './becomePartner.css'

class BecomePartner extends React.Component{
    render(){
        return(
            <div className='wrapper'>
                <div className='headerPart'>
                    <nav id='header'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className="logo">
                                    <a><img src="https://studio.builder.ai/assets/images/engineer-logo.png" width="107" height="26" alt="" class="mainLogo"></img></a>
                                    <a><img src="https://studio.builder.ai/assets/images/logoSmall.png" width="26" height="35" alt="" class="smallLogo"></img></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='middlePart'>
                    <div className="partnerWelcome">
                        <div className="partnerWelcomeText">
                            <h2>Welcome Partner!</h2>
                            <h3>You Think It. We Build It.</h3>
                            <p>Welcome to #BuilderGeneration. We turn great ideas into amazing apps. Come join the #BuilderGeneration at engineer.ai</p>
                            <button type="button">SignUp as Partner</button>
                        </div>
                        <div className="partnerWelcomeImg">
                            <img src="https://studio.builder.ai/assets/images/partnerWelcome.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BecomePartner;