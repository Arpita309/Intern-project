import React from 'react'
import './appDetail.css'
import axios from 'axios'
import Carousel from '../carouselimgDetail/carouselImgDetail'
import Slider from '../platformSlider/platformSlider'
import FeatureInfo from '../appFeature/appFeature'
import Footer from '../footer/footer'
import Header from '../appDetailHeader/appDetailHeader'
class AppDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            name:'',
            
        }
    }
     name=this.props.match.params.name;
    
    
    render(){
        const platform=[
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9b0014c49f7f46746441/Android_blue.png","span":"Android"},
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd570d88f3ac79a46ef213/Web_xh.png","span":"Web"},
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd56b888f3ac79a46ef210/ios_blue.png","span":"iOS"},
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd576988f3ac79a46ef217/Windows_blue.png","span":"Windows Phone"},
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/59376fd714c49f5759f8cd9f/Mac_os_xh.png","span":"macOs"},
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd58d688f3ac79a46ef21d/Windows_os_xh.png","span":"Windows"},
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd592088f3ac79a46ef220/Watch_os_xh.png","span":"watchOS"},
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd595488f3ac79a46ef223/Oculus_xh.png","span":"Oculus"},
            {"img":"https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd59ac88f3ac79a46ef226/mobile.png","span":"Mpbile Site"}
        ]
        
        return(
            <div className='wrapper'>
                <Header/>
                <div className='middlePart'>
                    <div className='appdetailSection'>
                        <Carousel/>
                        <div className='appdetailBox'>
                            <h2 >9GAG <strong>26 Unique Features</strong></h2>
                            <div class="chipsrow">
                                <div>
                                    <span >Web</span>
                                </div>
                                <div >
                                    <span>Mobile Apps</span>
                                </div>
                            </div>
                            <p > A rich media platform and online community of users. Share, watch and upload videos, GIFs, memes and viral rich media.</p>
                            <div className='nonrental-price'>
                            <div className="listing monthly active">
                                <h4>Monthly</h4>
                                <div className="custom-checkbox">
                                    <input type="checkbox" id="monthly"></input>
                                        <label  for="monthly"></label>
                                    
                                </div>
                                <strong >₹8,42,478.00</strong>
                                <span className="pull-right">
                                    <b >24 weeks</b> duration for development
                                </span>
                            </div>
                            </div>
                            <div  className="promocodeArea">
                                <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                                <div><button  type="button">Apply Promo Code</button></div>
                            </div>
                            <div className="builderCare">
                                <input  type="checkbox" id="buildercarecheck"></input>
                                <label  for="buildercarecheck"></label>
                                <strong >Builder Care: </strong>
                                <span> ₹7,020.65/Month</span>
                            </div>
                            <div className='selectPlatform'>
                                <h3 >Select Platform</h3>
                                <div className='selectPlatformSlider'>
                                    <div style={{pointerEvents:'auto'}}>
                                        <div className='drag-scroll-content' style={{display: 'block',whiteSpace: 'nowrap',width: '100%',height: 'calc(100% + 20px)'}}>
                                        <Slider>
                                        {platform.map(value => {
                                            
                                            return (
                                                <React.Fragment  >
                                                    <div className='selectPlatformbox'>
                                                        <img src={value.img}></img>
                                                        <span>{value.span}</span>
                                                        <em  className="icon-tick"></em>
                                                    </div>
                                                </React.Fragment>   
                                                    
                                            );
                                        })}
                                    </Slider>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="createBuild view-brak-bx">
                                <button  type="button" className="view-proto-btn">
                                    <span className="desktop"><a href="http://localhost:3000/features" style={{textDecoration:'none'}}>Customize with an Expert</a> </span>
                                    <span className="mobile"> Customize with Expert</span>
                                </button>
                                <button  type="button " >Customize Your Idea </button>
                            </div>
                            
                        </div>
                        
                    </div>
                    <FeatureInfo/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default AppDetail;

