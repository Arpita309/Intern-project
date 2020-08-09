import React from 'react'
import './appFeaturesRight.css'
import {carouselDescription} from '../featuresdb/featuresdb'
import axios from 'axios'
import {ApiGet} from '../../api'
let selectedDescription=[] 

class FeatureRight extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mobileView:true,
           showAll:true,
           data:[],   
           selected:'',
           active:'',
           more:true,
           Description:[],
           test:carouselDescription,
           img:'',
           currentImageIndex: 0,selectedItem:{},fullScreen:false,
           app:[],
           features:[]
         };
         this.handleClick=this.handleClick.bind(this);
         this.showmore=this.showmore.bind(this);
         this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.showBundle=this.showBundle.bind(this)
        
     
    }
    componentDidMount(){
        
        ApiGet(`app/?attributes.title=${this.props.name}`)
          .then(res => {
            const data = res.data;
            this.setState({ app:data,active:data.map(value=>value.attributes.map(info=>info.features[0].id)) });
           
          })
          ApiGet('bundle')
          .then(res => {
            const data = res.data;
            this.setState({ features:data });
          })
          
                        
          
    }
    
    componentDidUpdate(prevProps){
        
            let mobileImages=[]
            {this.state.app.map((value)=>
              value.attributes.map(info=>{
                mobileImages.push(...info.features)
                this.state.data=[...mobileImages]}))}
                
                
       if(this.props!=prevProps) this.setFeature()
        
              
    }
    
    nextSlide () {
		const lastIndex = this.state.data.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        
		this.setState({
            currentImageIndex: index,img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[index].id,selectedItem:{},
           
        });
       
    }
   previousSlide () {
    const lastIndex = this.state.data.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
        currentImageIndex: index,img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[index].id,selectedItem:{},
    
        
    });
    
    
    

}
    setMobileView=()=>{
        this.setState({mobileView:true,data:this.state.mobileImages})
      
    }
    setWebView=()=>{
        this.setState({mobileView:false,data:this.state.webImages})
    }
    show=()=>{
        this.setState({showAll:true})
        console.log('show')
    }
    hide=()=>{
        this.setState({showAll:false})
        console.log('hide')
    }
    handleClick=(e,id,index)=>{
        let item=this.state.data.filter(value=>
             value.id==id)
       
        this.setState({selectedItem:item,active:id,currentImageIndex:index
        })
         
         
    }
    setFeature=()=>{
        
       
    if(this.props.selectedFeature.length){this.state.app.map(value=>
        value.attributes.map(info=>
        info.features.push(...this.props.selectedFeature[0])))}
        if(this.props.view.length){
            this.state.selectedItem=this.props.view[0]
        }       
    
        
    }
    showmore=()=>{
        this.setState({more:!this.state.more})
    }
    showBundle=()=>{
        this.setState({img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[this.state.currentImageIndex].id})
    }
    showFullScreen=()=>{
        this.setState({fullScreen:!this.state.fullScreen})
        this.props.hideLeft()
    }
    Delete=(id,e)=>{
        this.state.app.forEach(value=>value.attributes.forEach(info=>{return(info.features=info.features.filter(data=>data.id!=id))})) 
        }   
    
    render(){
        console.log(this.state.features)
       this.state.app.map(value=>value.attributes.map(info=>info.features.map(a=>this.state.Description=[...this.state.Description,this.state.features.map(b=>b.features.filter(c=>c.id===info.id))])))
      console.log(this.state.Description)
        let mobileImages=[]
            {this.state.app.map((value)=>
              value.attributes.map(info=>{
                mobileImages.push(...info.features)
                this.state.data=[...mobileImages]}))}

               
        
        const removeAll=()=>{
            this.setState({app:[],data:[]})
        }
   
        
        return(
            this.state.app.length?<div className={`studioRight ${this.props.hide?'active':''}`}>
                    <div class="iphoneToolbar">
                        <div class="backButton" onClick={this.props.show}>
                            <em class="icon-prev" ></em>
                            <span>7/26</span>
                        </div>
                        <h3>
                            <div class="countAnimationBox animation2">
                                <div class="countHold">7/26</div>
                                <div class="countIcon">
                                    <em class="icon-shopping-cart"></em>
                                </div>
                            </div> Selected Features 
                            <span onClick={removeAll}>Remove All</span>
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
                                        {this.state.app.map((value)=>
                                              value.attributes.map(info=>{
                                                
                                                return(info.features.map((data,index)=>
                                                    <React.Fragment key={data.id}>
                                                   
                                                   <div className={`slideItem ${this.state.active==data.id?'active':''}`} id={data.id} onClick={(e)=>{this.handleClick(e,data.id,index)}}>
                                                       <div class="slideImg">
                                                       {data.feature_screenshots.map(img=>{
                                                            
                                                            
                                                            
                                                            return(<img src={this.state.mobileView?img.android:img.web}></img>)}
                                                       )}
                                                        </div>
                                                        <span className="deleteItem" onClick={(e)=>this.Delete(data.id,e)}>+</span>
                                                        <h4>{data.title}</h4>
                                                    </div>
                                               </React.Fragment>
                                                    
                                                    ))}
                                                )
                                               
                                           
                                        )}
                                    </div>
                                </div>
                            </perfect-scrollbars>

                        </div>
                        {this.state.active? 
                        <div className="featureDescription">
                       
                            <div className="descriptionIcon">
                                <img src={this.state.test[0].img}></img>
                            </div>
                            <div class="descriptionText">
                                <h4>{this.state.test[0].carouselH4}</h4>
                                <div class="webView">
                                    <p>{this.state.more?this.state.test[0].webViewP:this.state.test[0].P}<span onClick={this.showmore}>{this.state.more?'more...':'less...'}</span></p>
                                    
                                </div>
                                <div className='mobileView'>
                                        <p>{this.state.more?this.state.test[0].mobileViewP:this.state.test[0].P}<span onClick={this.showmore}>{this.state.more?'more...':'less...'}</span></p>
                                </div>    
                            </div>

                               
                        
                    </div>:''}
                    </div>
                    <div className="previewSection mobileView">
                        <button type="button" className={`fullScreen ${this.state.fullScreen?'active':''}`} onClick={this.showFullScreen}><span></span></button>
                        <React.Fragment>
                            <div className={`${this.state.mobileView?'iphonePrev':'webPrev'}`}>
                                <div className={`${this.state.mobileView?'phoneScreen':'webScreen'}`}>
                                
                                {this.state.selectedItem.length===1?<img className="active animation1" src={this.state.selectedItem[0].feature_screenshots.map(img=>this.state.mobileView?img.android:img.web)}></img>:<img className="active animation1" src={this.state.data.length?this.state.data[this.state.currentImageIndex].feature_screenshots.map(img=>this.state.mobileView?img.android:img.web):''} onChange={this.showBundle}></img>}    
                                </div>
                            </div>
                            <div className="iphoneNav">
                                <button type="button" className="prevButton" onClick={this.previousSlide}><em class="icon-leftarrow" ></em></button>
                                <button type="button" class="nextButton" onClick={this.nextSlide}><em class="icon-rightarrow"></em></button>
                            </div>
                        </React.Fragment>      
                        
                        
                    </div>
                    </div>:<div className={`studioRight nofeatureSelect ${this.props.hide?'active':''}`}>
                <div className="previewBack" onClick={this.props.show}>
                    <em className="icon-prev"></em>
                    <span>Back</span>
                </div>
                <div className="previewSection mobileView">
                    <div className="iphonePrev">
                        <div className="phoneScreen">
                            <img src="https://studio.builder.ai/assets/images/placeholder.png" alt=""></img>
                            <div class="noPrev">
                                <img src="https://studio.builder.ai/assets/images/zeroFeatures_mobile.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
              
           
        )
    }
}
export default FeatureRight;