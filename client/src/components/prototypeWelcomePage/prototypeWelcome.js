import React from 'react'
import './prototypeWelcome.css'
import {Link} from 'react-router-dom'
class Welcome extends React.Component{
    render(){
        return(
            <div>
                <div className='prototype-welcome-screen'>
                    <div className='pwc-left-sec'>
                        <span  className="icon">
                            <img  src="https://now.builder.ai/assets/images/buildernow-logo.svg"></img>
                        </span>
                        <div  className="content">
                            <h3 > Your idea in
                                <br />your hands, 
                                <span  className="color-txt"> NOW! 
                                    <span className="left-border"></span>
                                    <span  className="right-border"></span>
                                    <span  className="top-border"></span>
                                    <span  className="bottom-border"></span>
                                </span>
                            </h3>
                            <p>Experience your app with a prototype.</p>
                            <button style={{color:'white'}}><a href ='/prototype' >Get your free prototype</a></button></div>
                    </div>
                    <div  className="pwc-animation">
                        <img  src="https://now.builder.ai/assets/images/welcome-animation.gif"></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default Welcome;