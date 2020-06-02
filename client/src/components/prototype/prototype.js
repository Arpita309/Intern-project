import React from 'react'
import './prototype.css'
import Header from '../prototypeHeader/prototypeHeader'
import { mobileIMg,webIMg } from '../prototypeDb'
import Popup from '../prototypePopup/prototypePopup'
 
class Prototype extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentImageIndex:0,
            mobileView:true,
            data:mobileIMg,
            showpop:false
        }
        
    }
    previousSlide= ()=> {
		const lastIndex = this.state.data.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
        });
        
	}
	
	nextSlide =() =>{
		const lastIndex = this.state.data.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
    }
    
    setView = (view)=>{
       this.setState({mobileView:view})
        view?this.setState({data:mobileIMg}):this.setState({data:webIMg})
    }
    showPopUp=()=>{
        this.setState({showpop:true})
    }
    closePopUp=()=>{
        this.setState({showpop:false})
    }
    
    render(){
         
        return(
            <div>
                <Header setView={this.setView}/>
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
                            <div className='wrapper-prototype' style={{transform: 'translate(-50%, -50%) scale(0.75)'}}>
                                {this.state.mobileView?<div className='device-preview '>
                                    <div className='image-frame'>
                                        <img  className="device-preview-img" src="https://now.builder.ai/assets/images/iphone-body.png"></img>
                                        <div className='prototype-preview'>
                                            <div  className="splashScreen splashScreenMobile"></div>
                                            <div className='prototype-animate'>
                                                <div className='frame-wrapper ' style={{touchAction: 'none',userSelect: 'none',webkitUserDrag: 'none',webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',transform: 'translate(-50%, -50%) scale(1.45)',top: '50%',left: '50%'}}>
                                                    <div>
                                                        
                                                            <div  className="hero-image-container">
                                                                <img  src={this.state.data[this.state.currentImageIndex].img}></img>
                                                            </div>
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div  className="preview screen-control highlight-off ">
                                        <span  className="screen-control-sign icon-angle-left" onClick={this.previousSlide}></span>
                                    </div>
                                    <div  className="next screen-control highlight-off ">
                                        <span  className="screen-control-sign icon-angle-right" onClick={this.nextSlide}></span>
                                    </div>
                                </div>:<div className='device-preview webView'>
                                    <div className='image-frame'>
                                        
                                        <div className='prototype-preview'>
                                            <div  className="splashScreen "></div>
                                            <div className='prototype-animate'>
                                                <div className='frame-wrapper webFrame' style={{touchAction: 'none',userSelect: 'none',webkitUserDrag: 'none',webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',transform: 'translate(-50%, -35%) scale(0.6)',top: '50%',left: '50%'}}>
                                                    <div>
                                                        
                                                            <div  className="hero-image-container">
                                                                <img  src={this.state.data[this.state.currentImageIndex].img}></img>
                                                            </div>
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div  className="preview screen-control highlight-off ">
                                        <span  className="screen-control-sign icon-angle-left" onClick={this.previousSlide}></span>
                                    </div>
                                    <div  className="next screen-control highlight-off ">
                                        <span  className="screen-control-sign icon-angle-right" onClick={this.nextSlide}></span>
                                    </div>
                                </div>}
                                
                                
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
                        <button onClick={this.showPopUp}>Customise your prototype</button>
                    </div>
                </div>
                {this.state.showpop?<Popup close={this.closePopUp}/>:null}
            </div>
        )
    }
}
export default Prototype;