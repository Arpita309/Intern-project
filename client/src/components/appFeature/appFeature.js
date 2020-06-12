import React from 'react'
import Slider from '../slider/slider'
import './appFeature.css'

export default class FeatureInfo extends React.Component {
    constructor() {
        super();
    
        this.state = {
           mobileView:true,
          width: 0,
          data:[]
        };
    
        window.addEventListener("resize", this.update);
      }
    
      componentDidMount() {
        this.update();
          
      }
    update=()=>{
        this.setState({
         
            width: window.innerWidth
          });
    }
    setMobileView=()=>{
        this.setState({mobileView:true})
      
    }
    setWebView=()=>{
        this.setState({mobileView:false})
    }

    render() {
        
       
            if (this.state.width > 768) {

         return (
            
            <div className='appfeatureSection'>
                      
            <div  className="sectionHeading">
                <h3>{this.props.data.feature_count} Features</h3>
                <p >List of the feature included in the app</p>
            </div>
               
           
            <div  className="switchView">
                <ul>
                    <li className={`${this.state.mobileView?'active':''}`} onClick={this.setMobileView}>
                        <em  className="icon-phonescreen"></em>
                        <strong>Mobile</strong>
                    </li>
                    <li  className={`${this.state.mobileView?'':'active'}`} onClick={this.setWebView}>
                        <em  class="icon-webscreen"></em>
                        <strong>Web</strong>
                    </li>
                </ul>
            </div>
            <div className={`appfeatureSlider ${this.state.mobileView?'mobileview':'webview'}`}>
               <div style={{pointerEvents:'auto'}}>
               <div className='drag-scroll-content' style={{display: 'block',whiteSpace: 'nowrap',width: '100%',height: 'calc(100% + 20px)'}}>
                    <Slider>
                    {this.props.data.features.map(value=>{
                    return(
                                          <React.Fragment  >
                              
                                    <div className='appfeatureBox' style={{display:'inline-block'}}>
                                        
                                        <div className='frameBox'>
                                            {value.feature_screenshots.map(img=>
                                            <div className='imageFrame'>
                                            <img src={this.state.mobileView?img.android:img.web}></img>
                                            </div>
                                      
                                                )}
                                        
                                        </div>
                                        
                                        <div  className="appfeatureInfo">
                                            <h3 >
                                                <strong>{value.title}</strong>
                                                <span>{value.feature_weeks}</span>
                                            </h3>
                                            <h4>{value.price}</h4>
                                        </div> 
                                               
                                        
                                        
                                    </div>
                                    </React.Fragment> )})}
                                    
                           
                    </Slider>
                </div>                 
                </div>

           </div>
            
            
      </div>
           
         );
       } else {
         return (
            <div className='appfeatureSection'>
            <div  className="sectionHeading">
                <h3>{this.props.data.feature_count} Features</h3>
                <p >List of the feature included in the app</p>
            </div>
            <div  className="switchView">
                <ul>
                <li className={`${this.state.mobileView?'active':''}`} onClick={this.setMobileView}>
                        <em  className="icon-phonescreen"></em>
                        <strong>Mobile</strong>
                    </li>
                    <li  className={`${this.state.mobileView?'':'active'}`} onClick={this.setWebView}>
                        <em  class="icon-webscreen"></em>
                        <strong>Web</strong>
                    </li>
                </ul>
            </div>
            <div className={`appfeatureSlider ${this.state.mobileView?'mobileview':'webview'}`}>
            <div style={{pointerEvents:'auto'}}>
            <div className='flexView' >
    
            {this.props.data.features.map(value=>{
                return(
                                          <React.Fragment  >
                              
                                    <div className='appfeatureBox' style={{display:'inline-block'}}>
                                        
                                        <div className='frameBox'>
                                            {value.feature_screenshots.map(img=>
                                            <div className='imageFrame'>
                                            <img src={this.state.mobileView?img.android:img.web}></img>
                                            </div>
                                      
                                                )}
                                        
                                        </div>
                                        
                                        <div  className="appfeatureInfo">
                                            <h3 >
                                                <strong>{value.title}</strong>
                                                <span>{value.feature_weeks}</span>
                                            </h3>
                                            <h4>{value.price}</h4>
                                        </div> 
                                               
                                        
                                        
                                    </div>
                                    </React.Fragment> )})}
                 
             </div>                 
             </div>

        </div>
        </div>
         );
       }
    }
  
  }