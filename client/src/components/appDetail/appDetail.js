import React from 'react'
import './appDetail.css'
import axios from 'axios'
import Carousel from '../carouselimgDetail/carouselImgDetail'
import Slider from '../platformSlider/platformSlider'
import FeatureInfo from '../appFeature/appFeature'
import Footer from '../footer/footer'
import Header from '../appDetailHeader/appDetailHeader'
import {ApiGet} from '../../api'
class AppDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            images:[],
            platforms:[],
            platformId:[]
           
            
        }
    }
     
     componentDidMount() {
        
        ApiGet(`app/?attributes.title=${this.props.match.params.name}`)
          .then(res => {
            const data = res.data;
            this.setState({ data });
          })
          ApiGet('configurations')
          .then(res => {
            const data = res.data;
            this.setState({platforms: data });
          })  
          
          
      }
    
      selectPlatform=(id)=>{
            this.state.platformId.push(id)
            
      }
    
    render(){
        console.log(this.state.data)
        let price=this.state.platforms.map(value=>{
            return(
                value.platforms.filter(info=>info.id===this.state.platformId))
            
        })
        
        return(
            <div className='wrapper'>
                <Header/>
                <div className='middlePart'>
                    <div className='appdetailSection'>
                    {this.state.data.map(value=>{
                            return(value.attributes.map(info=>{
                                let images=[]
                                images.push(info.web_cover_image_url)
                                images.push(info.mobile_cover_image_url)
                                this.state.images=[...images]
                        return(
                                <Carousel images={this.state.images}/>)}))})}
                           

                        
                        

                        <div className='appdetailBox'>
                        {this.state.data.map(value=>{
                            return(value.attributes.map(info=>{
                                
                                return(<React.Fragment key={info.id}>
                                    
                            <h2 >{info.title}<strong>{info.feature_count} Unique Features</strong></h2>
                            <div class="chipsrow">
                                {info.products.map(product=>
                                <div>
                                    <span >{product}</span>
                                </div>
                                    )}
                            </div>
                            <p >{info.description}</p>
                                <div className='nonrental-price'>
                                <div className="listing monthly active">
                                    <h4>Monthly</h4>
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="monthly"></input>
                                            <label  for="monthly"></label>
                                        
                                    </div>
                                    <strong >{info.price}</strong>
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
                                        {this.state.platforms.map(value => 
                                            value.platforms.map(data=>
                                                data.attributes.map(platform=>
                                                    <React.Fragment key={platform.id} >
                                                        
                                                        <div className={`selectPlatformbox ${this.state.platformId.filter(obj=>obj==platform.id).length||info.platform_ids.filter(value=>value==platform.id).length?'selected':''}`} style={{display:'inline-block'}} onClick={(e)=>this.selectPlatform(platform.id)}>
                                                            <img src={platform.icon}></img>
                                                            <span>{platform.title}</span>
                                                            <em  className="icon-tick"></em>
                                                        </div>
                                                        {console.log(this.state.platformId.filter(obj=>obj==platform.id))}
                                                    </React.Fragment>  
                                                    )
                                                )
                                            
                                                 
                                                    
                                            
                                        )}
                                    </Slider>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="createBuild view-brak-bx">
                                <button  type="button" className="view-proto-btn">
                                    <span className="desktop"><a href={`http://localhost:3000/features/${info.title}`} style={{textDecoration:'none'}}>Customize with an Expert</a> </span>
                                    <span className="mobile"> Customize with Expert</span>
                                </button>
                                <button  type="button " >Customize Your Idea </button>
                            </div>
                            </React.Fragment>)}
                            ))}
                            )}
                        
                            
                            
                        </div>
                        
                    </div>
                    {this.state.data.map(value=>{
                            return(value.attributes.map(info=>
                    <FeatureInfo data={info}/>))})}
                </div>
                <Footer/>
            </div>
        )
    }
}
export default AppDetail;

