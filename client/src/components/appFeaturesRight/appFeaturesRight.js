import React from 'react'
import './appFeaturesRight.css'
import {mobileData,webData,carouselDescription} from '../featuresdb/featuresdb'
import axios from 'axios'
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
           img:'',
           currentImageIndex: 0,selectedItem:[],fullScreen:false,
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
        this.setState({img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[this.state.currentImageIndex].id})
        axios.get(`http://localhost:4000/app/?attributes.title=${this.props.name}`)
          .then(res => {
            const data = res.data;
            this.setState({ app:data });
          })
          axios.get(`http://localhost:4000/bundle`)
          .then(res => {
            const data = res.data;
            this.setState({ features:data });
          })  
    }
    
    
    nextSlide () {
		const lastIndex = this.state.data.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        
		this.setState({
            currentImageIndex: index,img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[this.state.currentImageIndex].id,selectedItem:[],
            test:this.state.app.map((data)=>
                data.attributes.map(info=>
                    info.features.filter(
                        value=>value.id==this.state.app[this.state.currentImageIndex].id
                    ))
                 
            )
        });
       
    }
   previousSlide () {
    const lastIndex = this.state.data.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
        currentImageIndex: index,img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[this.state.currentImageIndex].id,selectedItem:[],
        test:this.state.app.map((data)=>
                data.attributes.map(info=>
                    info.features.filter(
                        value=>value.id==this.state.app[this.state.currentImageIndex].id
                    ))
                 
            )
    });
    
    
    

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
        let item=this.state.data.filter((value)=>{
            return value.id.indexOf(id)!==-1})
        console.log(item)
        this.setState({selectedItem:item,active:id,
            test:this.state.features.map((data)=>
                data.features.filter(
                        value=>value.id==id
                    )
                 
            )
        })
         
         
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
    
    render(){
        
         
       console.log(this.state.app)
       console.log(this.state.test)
      
        
       
        
        return(
            
                <div className={`studioRight ${this.props.hide?'active':''}`}>
                    <div class="iphoneToolbar">
                        <div class="backButton">
                            <em class="icon-prev" onClick={this.props.show}></em>
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
                                        {this.state.app.map((value)=>
                                              value.attributes.map(info=>
                                                info.features.map(data=>
                                                    <React.Fragment key={data.id}>
                                                   
                                                   <div className={`slideItem ${this.state.active==data.id?'active':''}`} id={data.id} onClick={(e)=>{this.handleClick(e,data.id)}}>
                                                       <div class="slideImg">
                                                       {data.feature_screenshots.map(img=>
                                                            
                                                            <img src={this.state.mobileView?img.android:img.web}></img>
                                                       )}
                                                        </div>
                                                        <span className="deleteItem">+</span>
                                                        <h4>{data.title}</h4>
                                                    </div>
                                               </React.Fragment>
                                                    
                                                    )
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
                                    
                                {this.state.selectedItem.length==1?<img src={this.state.selectedItem[0].img}></img>:<img className="active animation1" src={this.state.data[this.state.currentImageIndex].img} onChange={this.showBundle}></img>}    
                                </div>
                            </div>
                            <div className="iphoneNav">
                                <button type="button" className="prevButton" onClick={this.previousSlide}><em class="icon-leftarrow" ></em></button>
                                <button type="button" class="nextButton" onClick={this.nextSlide}><em class="icon-rightarrow"></em></button>
                            </div>
                        </React.Fragment>      
                        
                        
                    </div>
                   
                </div>
           
        )
    }
}
export default FeatureRight;