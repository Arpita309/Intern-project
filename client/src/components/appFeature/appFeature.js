import React from 'react'
import Slider from '../slider/slider'
import './appFeature.css'
let mobileData=[
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/android_image/57e0aff95cba2a27d6af277f/Comments.png","strong":"Comments","span":"0.8 week","h4":"₹14,344.12"},
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/android_image/5c5000b81f0c64172a7f77c6/download_options_mob.png","strong":"Download Options","span":"0.4 Week","h4":"₹5,259.51"},
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/android_image/583e648e5cba2a4656829cd2/Email-Login.png","strong":"EmailLogin","span":"0.8 week","h4":"₹21,516.17"},
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/android_image/583e64de5cba2a4656829cd3/Facebook-Login.png","strong":"Facebook Login","span":"0.4 Week","h4":"₹7,650.20"},
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/android_image/5c5000b81f0c64172a7f77b6/forgot_password_mob.jpg","strong":"Forgot Password","span":"1.5 Weeks","h4":"₹21,038.04"},
   
]
let webData=[
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/web_image/57e0aff95cba2a27d6af277f/Comments-Web.png","strong":"Comments","span":"0.8 week","h4":"₹14,344.12"},
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/web_image/5c5000b81f0c64172a7f77c6/download_options_web.png","strong":"Download Options","span":"0.4 Week","h4":"₹5,259.51"},
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/web_image/583e648e5cba2a4656829cd2/Email-Login.png","strong":"EmailLogin","span":"0.8 week","h4":"₹21,516.17"},
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/web_image/583e64de5cba2a4656829cd3/Facebook-Login.png","strong":"Facebook Login","span":"0.4 Week","h4":"₹7,650.20"},
    {"img":"https://duj87royd3ze0.cloudfront.net/uploads/feature/web_image/5c5000b81f0c64172a7f77b6/forgot_password_web.jpg","strong":"Forgot Password","span":"1.5 Weeks","h4":"₹21,038.04"},
   
]
export default class FeatureInfo extends React.Component {
    constructor() {
        super();
    
        this.state = {
           mobileView:true,
          width: 0,
          data:mobileData
        };
    
        window.addEventListener("resize", this.update);
      }
    
      componentDidMount() {
        this.update();
      }
    
      update = () => {
        this.setState({
         
          width: window.innerWidth
        });
      };
      setMobileView=()=>{
          this.setState({mobileView:true,data:mobileData})
        
      }
      setWebView=()=>{
          this.setState({mobileView:false,data:webData})
      }

    render() {
        
        
        
            
        
       console.log(this.state.data)
       if (this.state.width > 768) {
         return (
            <div className='appfeatureSection'>
            <div  className="sectionHeading">
                <h3>26 Features</h3>
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
                        {this.state.data.map(value => {
                            
                            return (
                                <React.Fragment  >
                                    <div className='appfeatureBox' style={{display:'inline-block'}}>
                                        <div className='frameBox'>
                                            <div className='imageFrame'>
                                                <img src={value.img}></img>
                                            </div>
                                        </div>
                                        <div  className="appfeatureInfo">
                                            <h3 >
                                                <strong>{value.strong}</strong>
                                                <span>{value.span}</span>
                                            </h3>
                                            <h4>{value.h4}</h4>
                                        </div>
                                    </div>
                                </React.Fragment>   
                                    
                            );
                        })}
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
                <h3>26 Features</h3>
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
    
                     {this.state.data.map(value => {
                         
                         return (
                             <React.Fragment  >
                                 <div className='appfeatureBox' style={{display:'inline-block'}}>
                                     <div className='frameBox'>
                                         <div className='imageFrame'>
                                             <img src={value.img}></img>
                                         </div>
                                     </div>
                                     <div  className="appfeatureInfo">
                                         <h3 >
                                             <strong>{value.strong}</strong>
                                             <span>{value.span}</span>
                                         </h3>
                                         <h4>{value.h4}</h4>
                                     </div>
                                 </div>
                             </React.Fragment>   
                                 
                         );
                     })}
                 
             </div>                 
             </div>

        </div>
        </div>
         );
       }
    }
  
  }