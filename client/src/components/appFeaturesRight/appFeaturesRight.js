import React from 'react'
import './appFeaturesRight.css'
import {mobileData,webData,carouselDescription} from '../featuresdb/featuresdb'

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
           currentImageIndex: 0,selectedItem:[]
         };
         this.handleClick=this.handleClick.bind(this);
         this.showmore=this.showmore.bind(this);
         this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.showBundle=this.showBundle.bind(this)
         
     
    }
    componentDidMount(){
        this.setState({img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[this.state.currentImageIndex].id})
    }
    
    
    nextSlide () {
		const lastIndex = this.state.data.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        
		this.setState({
            currentImageIndex: index,img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[this.state.currentImageIndex].id,selectedItem:[],
            test:this.state.Description.filter((value)=>{
                return value.id.indexOf(this.state.data[this.state.currentImageIndex].id)!==-1
            })
        });
       
    }
   previousSlide () {
    const lastIndex = this.state.data.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
        currentImageIndex: index,img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[this.state.currentImageIndex].id,selectedItem:[],
        test:this.state.Description.filter((value)=>{
            return value.id.indexOf(this.state.data[this.state.currentImageIndex].id)!==-1
        })
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
        this.setState({selectedItem:item,active:id,test:this.state.Description.filter((value)=>{
            return value.id.indexOf(id)!==-1
        })})
         
         
    }
    
    showmore=()=>{
        this.setState({more:!this.state.more})
    }
    showBundle=()=>{
        this.setState({img:this.state.data[this.state.currentImageIndex].id,active:this.state.data[this.state.currentImageIndex].id})
    }
   
    
    render(){
        
         
       
        
       
        
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
                        <button type="button" className="fullScreen"><span></span></button>
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