import React from 'react'
import './prototype.css'
import Header from '../prototypeHeader/prototypeHeader'

class Prototype extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                <div style={{touchAction: 'none',userSelect: 'none',webkitUserDrag: 'none',webkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                    <div  className="preview-flowchart-route-wrap highlight-off">
                        <a  className="btn-style left-btn active" href="#" target="_blank">Prototype
                            <span  className="btn-icon icon-play-1"></span>
                        </a>
                        <a  className="btn-style right-btn" href="#">Flow mode
                            <span className="btn-icon icon-user-flow"></span>
                        </a>
                    </div>
                    <div className='prototype-container custom-view'>
                        <div className='prototype-wrap branding-option'>
                            <div className='wrapper-prototype' style={{transform: 'translate(-50%, -50%) scale(1)'}}>
                                <div className='device-preview'>
                                    <div className='image-frame'>
                                        <img  className="device-preview-img" src="https://now.builder.ai/assets/images/iphone-body.png"></img>
                                        <div className='prototype-preview'></div>
                                    </div>
                                    <div  className="preview screen-control highlight-off ">
                                        <span  className="screen-control-sign icon-angle-left"></span>
                                    </div>
                                    <div  className="next screen-control highlight-off ">
                                        <span  className="screen-control-sign icon-angle-right"></span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="hotkeys-options highlight-off ">
                                <span  className="option">Other Options</span>
                                <div  className="options">
                                    <div  className="option">Go to launch screen (L)</div>
                                    <div className="option">Next Screen (N)</div>
                                    <div  className="option">Previous Screen (P)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="tailor-desc-popup">
                        <h3  className="title">What’s a tailor-made prototype?</h3>
                        <ul  className="desc">
                            <li>Custom designs on all your main features.</li>
                            <li>Make it unique: your logo, colours and images.</li>
                            <li>Rapid turnaround time (less than 5 days).</li>
                        </ul>
                        <button>Customise your prototype</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Prototype;