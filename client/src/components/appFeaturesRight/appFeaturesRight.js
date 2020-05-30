import React from 'react'
import './appFeaturesRight.css'
import {mobileData,webData,carouselDescription} from '../featuresdb/featuresdb'
import Carousel from '../featuresCarousel/featuresCarousel';
let selectedDescription=[]
class FeatureRight extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mobileView:true,
           showAll:true,
           data:mobileData,
           selected:'',
           active:'',
           more:true,
           Description:carouselDescription,
           test:carouselDescription,
           img:''
         };
         this.handleClick=this.handleClick.bind(this);
         this.showmore=this.showmore.bind(this);
         
     
    }
    
   componentDidMount(){
       const update=this.showBundle;
       
   }
   
    setMobileView=()=>{
        this.setState({mobileView:true,data:mobileData})
      
    }
    setWebView=()=>{
        this.setState({mobileView:false,data:webData})
    }
    show=()=>{
        this.setState({showAll:true})
    }
    hide=()=>{
        this.setState({showAll:false})
    }
    handleClick=(e,id)=>{
         this.setState({selected:id})
         
    }
    
    showmore=()=>{
        this.setState({more:!this.state.more})
    }
    showBundle=(selectedImg,description)=>{
        this.setState({img:selectedImg,active:selectedImg,test:description})
    }
   
    
    render(){
        
        let selectedItem=this.state.data.filter((value)=>{
            return value.id.indexOf(this.state.img)!==-1
        })
        
        console.log(this.state.Description)
        
        return(
            
                <div className='studioRight'>
                    <div class="iphoneToolbar">
                        <div class="backButton">
                            <em class="icon-prev"></em>
                            <span>7/26</span>
                        </div>
                        <h3>
                            <div class="countAnimationBox animation2">
                                <div class="countHold">7/26</div>
                                <div class="countIcon">
                                    <em class="icon-shopping-cart"></em>
                                </div>
                            </div> Selected Features 
                            <span>Remove All</span>
                        </h3>
                        <h4>
                            <span className={`${this.state.showAll?'':'showLess'}`} onClick={this.hide}>See Less <em class="icon-next"></em></span>
                            <span className={`${this.state.showAll?'showAll':'show'}`} onClick={this.show}>See All <em class="icon-prev"></em></span>
                        </h4>
                        <div class="viewSelect">
                            <ul>
                                <li className={`${this.state.mobileView?'active':''}`} onClick={this.setMobileView}><em class="icon-phonescreen"></em> Mobile </li>
                                <li className={`${this.state.mobileView?'':'active'}`} onClick={this.setWebView}><em class="icon-webscreen"></em> Web </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`previewTop ${this.state.showAll?'':'hide'}`}>
                        <div className={`previewSlider ${this.state.mobileView?'':'webView'}`}>
                            <perfect-scrollbars>
                                <div style={{position:'static'}}>
                                    <div className='ps-content'>
                                        {this.state.data.map((value)=>{
                                           return(
                                               <React.Fragment key={value.id}>
                                                   <div className={`slideItem ${this.state.active==value.id?'active':''}`} id={value.id} onClick={(e)=>{this.handleClick(e,value.id)}}>
                                                       <div class="slideImg">
                                                           <img src={value.img}></img>
                                                        </div>
                                                        <span className="deleteItem">+</span>
                                                        <h4>{value.h4}</h4>
                                                    </div>
                                               </React.Fragment>
                                           )
                                        })}
                                    </div>
                                </div>
                            </perfect-scrollbars>

                        </div>
                        {this.state.active? 
                        <div className="featureDescription">
                       
                            <div className="descriptionIcon">
                                <object data={this.state.Description[0].img}></object>
                            </div>
                            <div class="descriptionText">
                                <h4>{this.state.Description[0].carouselH4}</h4>
                                <div class="webView">
                                    <p>{this.state.more?this.state.Description[0].webViewP:this.state.Description[0].P}<span onClick={this.showmore}>{this.state.more?'more...':'less...'}</span></p>
                                    
                                </div>
                                <div className='mobileView'>
                                        <p>{this.state.more?this.state.Description[0].mobileViewP:this.state.Description[0].P}<span onClick={this.showmore}>{this.state.more?'more...':'less...'}</span></p>
                                </div>    
                            </div>

                               
                        
                    </div>:''}
                    </div>
                    <div className="previewSection mobileView">
                        <button type="button" className="fullScreen"><span></span></button>
                        <Carousel selectedImg={this.showBundle} id={this.state.selected}/>
                        
                        
                    </div>
                   
                </div>
           
        )
    }
}
export default FeatureRight;