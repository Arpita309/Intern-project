import React from 'react'
import SliderComponent from '../deliverySlider/deliverySlider';
import Slider from '@material-ui/core/Slider';
import AuthContext from '../../context/state'
const useStyles = theme => ({
    root: {
      width: 250,
      
    },
    rail:{
        color:'#d8e0f3'
    }
  });
export default class PhasesRow extends React.Component {
    static contextType=AuthContext
    constructor(context) {
        super(context);
    
        this.state = {
            productRoadmap:false,mvp:false,design:false,fullBuild:false,tailor:false,slider:'',
          width: 0,selected:[]
       
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
      infoBox=(id)=>{
       
        if(id==1){
            
        this.setState({productRoadmap:true})}
        else if(id==2){
            
            this.setState({mvp:true})}
        else if(id==3){
            
            this.setState({design:true})}
        else if(id==4){
         this.setState({fullBuild:true})}
        else if(id==5){
         this.setState({tailor:true})}
        else this.setState({productRoadmap:false,mvp:false,design:false,fullBuild:false,tailor:false})
      }
      selectPhase=(e)=>{
          if(this.state.selected.filter(value=>value==e.target.id).length){
              this.setState({selected:this.state.selected.filter(value=>value!=e.target.id)})
          }
          else
          this.setState({selected:[...this.state.selected,e.target.id]})
          this.props.selectPhase(e.target.id)
      }

      render(){
         console.log(this.state.selected) 
        const classes = useStyles();     
    
        const marks = [
        {
          value: 0,
          label: 'relaxed',
        }
      ]; 
      function valuetext(value) {
          return `${value}`;
          
        }
        const handleSliderChange = (event, newValue) => {
          this.setState({slider:newValue});
      
        };
          
        if (this.state.width > 768) { return(

          
                 <div className='phasesRowSlider'>
                    <div className='phasesRowContent'>
                        <div className='phasesRow'>
                    <SliderComponent>

                    <div className={`phasesBox Product-theme ${this.state.selected.filter(value=>value=='1').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon">
                                    <img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/58cbad7d14c49f1f2a318071/Roadmap_blue.png"></img>
                                </div>
                                <strong>Product Roadmap </strong>
                                <div  className="phasesinfo"  id= '1' onClick={(e)=>this.infoBox(1)}><img alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div className="checkBox">
                                <input  type="checkbox" id="1" onClick={(e)=>this.selectPhase(e)} checked={this.state.selected.filter(value=>value==='1').length}></input><label  htmlFor="1"></label>
                            </div>
                        </div>
                        {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >{this.props.features.features.length} Features Selected</p></div>
                        
                                                    <div  className="deliveryDate"><h3>
                                                        <strong >Delivered By</strong>
                                                        <span > 07 August 2020 </span></h3></div>
                                                    </React.Fragment>:''}
                        <learn-more>
                            <div  className={`phaseOverlay ${this.state.productRoadmap?'active':''}`}></div>
                            <div  className={`phaseInfo ${this.state.productRoadmap?'active':''}`}>
                                <div  className="phaseContent">
                                    <div  className="closeIcon" onClick={(e)=>this.infoBox(e)}><em  class="icon-cancel"></em></div>
                                    <h3>Product Roadmap</h3>
                                    <h4 >Avail an in-depth product timeline with development and release plans to align your goals</h4>
                                    <p >A product roadmap is simply a guiding strategy document with a timeline that makes execution hassle-free. We help lay out the foundation of what you're building, converting your vision into formal documents with development action plan. Our product roadmap will help put your launch plan in place so that you can align your business and marketing strategy.</p>
                                    <div  className="infoButton">
                                        <button type="button">View document</button><button  type="button">Download document</button>
                                    </div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    <div  className={`phasesBox Design-theme ${this.state.selected.filter(value=>value==='2').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b61d/Design_blue.png"></img></div>
                                <strong>Design </strong>
                                <div  className="phasesinfo" onClick={(e)=>this.infoBox(3)}><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div  className="checkBox">
                                <input  type="checkbox" id="2" onClick={(e)=>this.selectPhase(e)}></input>
                                <label  htmlFor="2"></label>
                            </div>

                        </div>
                        {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >{this.props.features.features.length} Features Selected</p></div>
                        <div  className="platformSection">
                            <h3>Platform <span onClick={this.props.selectPlatform}>Change</span></h3>
                            <ul>
                                {this.props.platform.slice(0,3).map(info=>
                                   <li><div  className="platformIcon"><img src={info.icon}></img></div>{info.title}</li>
                                   )}
                               {this.props.platform.length>3?<li  className="lastLi">
                                    <div  className="platformIcon moreLink"><span>+{this.props.platform.length-3}</span></div></li>:''}
                                
                            </ul>
                        </div>
                        
                                                    <div  className="deliveryDate"><h3>
                                                        <strong >Delivered By</strong>
                                                        <span > 07 August 2020 </span></h3></div>
                                                    </React.Fragment>:''}
                        <learn-more>
                            <div  className={`phaseOverlay ${this.state.design?'active':''}`}></div>
                            <div  className={`phaseInfo ${this.state.design?'active':''}`}>
                                <div  className="phaseContent">
                                    <div  className="closeIcon" onClick={this.infoBox}><em  className="icon-cancel"></em></div>
                                    <h3>Design</h3>
                                    <h4>Trust us to do the wireframing of your concept and design a seamless experience. Get a fully scalable UI/UX</h4>
                                    <p>We combine visual principles, data, color psychology, and decades worth of experience to create aesthetic interfaces that will drive the growth of your product. We are experts in creating human-centric designs that allow customers to intuitively use your product and have a great product experience.</p>
                                    <div  className="infoButton"></div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    <div className={`phasesBox Tailor-made-theme ${this.state.selected.filter(value=>value==='3').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon">
                                    <img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b61e/Prototype_blue.png"></img>
                                </div>
                                <strong>Tailor-made Prototype </strong>
                                <div  className="phasesinfo" onClick={(e)=>this.infoBox(5)}>
                                    <img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img>
                                </div>
                            </h3>
                            
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                                <div  className="checkBox"><input  type="checkbox" id="3" onClick={(e)=>this.selectPhase(e)}></input><label  htmlFor="3"></label></div>
                            </div>
                            {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >{this.props.features.features.length}  Features Selected</p></div>
                        <div  className="platformSection">
                            <h3>Platform <span onClick={this.props.selectPlatform}>Change</span></h3>
                            <ul>
                                {this.props.platform.slice(0,3).map(info=>
                                   <li><div  className="platformIcon"><img src={info.icon}></img></div>{info.title}</li>
                                   )}
                                {this.props.platform.length>3?<li  className="lastLi">
                                    <div  className="platformIcon moreLink"><span>+{this.props.platform.length-3}</span></div></li>:''}
                            </ul>
                        </div>
                           
                                                    <div  className="deliveryDate"><h3>
                                                        <strong >Delivered By</strong>
                                                        <span > 07 August 2020 </span></h3></div>
                                                        </React.Fragment>:''}
                            <learn-more>
                                <div  className={`phaseOverlay ${this.state.tailor?'active':''}`}></div>
                                <div  className={`phaseInfo ${this.state.tailor?'active':''}`}>
                                    <div  className="phaseContent">
                                        <div  className="closeIcon" onClick={this.infoBox}><em  class="icon-cancel"></em></div>
                                        <h3>Tailor-made Prototype</h3>
                                        <h4>Get a fully functional design prototype to test the design hypothesis, and end user journey. This includes designs for prototype too</h4>
                                        <p>Prototypes are realistic design representation of your ideas. We design interactive prototypes for iPhone, iPad, Android, and Web. Creation of prototypes is more specific, measurable, quick, and intensive than just describing the design. Test how the user will interact with an environment comparable to the final product.</p>
                                        <div  className="infoButton"></div>
                                    </div>
                                </div>
                            </learn-more>
                        </div>
                    <div className={`phasesBox MVP-theme ${this.state.selected.filter(value=>value==='4').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/5963a29c14c49f1407590ad5/MVP_blue.png"></img></div>
                                <strong >MVP </strong>
                                <div className="phasesinfo " onClick={(e)=>this.infoBox(2)}><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div  className="checkBox">
                                <input  type="checkbox" id="4" onClick={(e)=>this.selectPhase(e)}></input>
                                <label  htmlFor="4"></label>
                            </div>
                        </div>
                        <div  className="featureSection">
                            <h3 >Features <span >Change</span></h3>
                            <p>{this.props.mvpFeature} Features Selected</p>
                        </div>
                        <div  className="platformSection">
                            <h3>Platform <span onClick={this.props.selectPlatform}> Change</span></h3>
                            <ul>
                                {this.props.platform.slice(0,3).map(info=>
                                   <li><div  className="platformIcon"><img src={info.icon}></img></div>{info.title}</li>
                                   )}
                                {this.props.platform.length>3?<li  className="lastLi">
                                    <div  className="platformIcon moreLink"><span>+{this.props.platform.length-3}</span></div></li>:''}
                                
                            </ul>
                        </div>
                        {this.props.advance? <div  className="deliveryDate"><h3>
                                <strong >Delivered By</strong>
                                <span > 07 August 2020 </span></h3></div>
                                :''}
                        <learn-more >
                            <div  className={`phaseOverlay ${this.state.mvp?'active':''}`}></div>
                            <div  className={`phaseInfo ${this.state.mvp?'active':''}`}>
                                <div  className="phaseContent">
                                    <div  className="closeIcon" onClick={this.infoBox}><em  className="icon-cancel"></em></div>
                                    <h3>MVP</h3>
                                    <h4>Ship the first build of your idea and get early adopters to try out your product</h4>
                                    <p >We help design a Minimum Viable Product as a proof of concept to satisfy early customers and provide feedback for future development. It’s an easy way to build a product with a minimum set of features to test the market. Collect the maximum amount of validated learning about your customers with the least effort.</p>
                                    <div  className="infoButton"></div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    <div className={`phasesBox Full-theme ${this.state.selected.filter(value=>value==='5').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b620/Full_blue.png"></img></div>
                                <strong>Full Build </strong>
                                <div  className="phasesinfo" onClick={(e)=>this.infoBox(4)}><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div  className="checkBox">
                                <input  type="checkbox" id="5" onClick={(e)=>this.selectPhase(e)}></input>
                                <label htmlFor="5"></label>
                            </div>
                        </div>
                        {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >{this.props.features.features.length}  Features Selected</p></div>
                        <div  className="platformSection">
                            <h3>Platform <span onClick={this.props.selectPlatform}>Change</span></h3>
                            <ul>
                                {this.props.platform.slice(0,3).map(info=>
                                   <li><div  className="platformIcon"><img src={info.icon}></img></div>{info.title}</li>
                                   )}
                                {this.props.platform.length>3?<li  className="lastLi">
                                    <div  className="platformIcon moreLink"><span>+{this.props.platform.length-3}</span></div></li>:''}
                                
                            </ul>
                        </div>
                        
                                                    <div  className="deliveryDate"><h3>
                                                        <strong >Delivered By</strong>
                                                        <span > 07 August 2020 </span></h3></div>
                                                    </React.Fragment>:''}
                        <learn-more>
                            <div  className={`phaseOverlay ${this.state.fullBuild?'active':''}`}></div>
                            <div  className={`phaseInfo ${this.state.fullBuild?'active':''}`}>
                                <div  className="phaseContent">
                                    <div  className="closeIcon" onClick={this.infoBox}><em  className="icon-cancel"></em></div>
                                    <h3>Full Build</h3>
                                    <h4>We will do end to end designing and development of your idea. Get a market-ready product</h4>
                                    <p >We build a full-fledged product based on the product roadmap and the features laid out in the specification document. We will also perfect the product based on user feedback received on the Minimum Viable Product. We will ship a fully mature, responsive, scalable, business-ready and a user-friendly product.</p>
                                    <div  className="infoButton"></div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    {this.props.custom.map(child => child)}
                    </SliderComponent>
                    </div>
                </div>
            </div>        
          )
      }
    else {
        return(
            
                    <div className='phasesRowSlider'>
                    <div className='phasesRowContent'>
                        <div className='phasesRow'>
                    <div className={`phasesBox Product-theme ${this.state.selected.filter(value=>value==='1').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon">
                                    <img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/58cbad7d14c49f1f2a318071/Roadmap_blue.png"></img>
                                </div>
                                <strong>Product Roadmap </strong>
                                <div  className="phasesinfo" onClick={(e)=>this.infoBox(1)}><img alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div className="checkBox">
                                <input  type="checkbox" id="1" onClick={(e)=>this.selectPhase(e)}></input><label  htmlFor="1"></label>
                            </div>
                        </div>
                        {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >{this.props.features.features.length}  Features Selected</p></div>
                        
                                                    <div  className="deliveryDate"><h3>
                                                        <strong >Delivered By</strong>
                                                        <span > 07 August 2020 </span></h3></div>
                                                    </React.Fragment>:''}
                        <learn-more>
                            <div  className={`phaseOverlay ${this.state.productRoadmap?'active':''}`}></div>
                            <div  className={`phaseInfo ${this.state.productRoadmap?'active':''}`}>
                                <div  className="phaseContent">
                                    <div  className="closeIcon" onClick={this.infoBox}><em  class="icon-cancel"></em></div>
                                    <h3 style={{color:'black'}}>Product Roadmap</h3>
                                    <h4 >Avail an in-depth product timeline with development and release plans to align your goals</h4>
                                    <p >A product roadmap is simply a guiding strategy document with a timeline that makes execution hassle-free. We help lay out the foundation of what you're building, converting your vision into formal documents with development action plan. Our product roadmap will help put your launch plan in place so that you can align your business and marketing strategy.</p>
                                    <div  className="infoButton">
                                        <button type="button">View document</button><button  type="button">Download document</button>
                                    </div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    <div  className={`phasesBox Design-theme ${this.state.selected.filter(value=>value==='2').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b61d/Design_blue.png"></img></div>
                                <strong>Design </strong>
                                <div  className="phasesinfo" onClick={(e)=>this.infoBox(3)}><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div  className="checkBox">
                                <input  type="checkbox" id="2" onClick={(e)=>this.selectPhase(e)}></input>
                                <label  htmlFor="2"></label>
                            </div>
                        </div>
                        {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >{this.props.features.features.length}  Features Selected</p></div>
                        <div  className="platformSection">
                            <h3>Platform <span onClick={this.props.selectPlatform}>Change</span></h3>
                            <ul>
                                {this.props.platform.slice(0,3).map(info=>
                                   <li><div  className="platformIcon"><img src={info.icon}></img></div>{info.title}</li>
                                   )}
                                {this.props.platform.length>3?<li  className="lastLi">
                                    <div  className="platformIcon moreLink"><span>+{this.props.platform.length-3}</span></div></li>:''}
                                
                            </ul>
                        </div>
                        
                                                    <div  className="deliveryDate"><h3>
                                                        <strong >Delivered By</strong>
                                                        <span > 07 August 2020 </span></h3></div>
                                                    </React.Fragment>:''}
                        <learn-more>
                            <div  className={`phaseOverlay ${this.state.design?'active':''}`}></div>
                            <div  className={`phaseInfo ${this.state.design?'active':''}`}>
                                <div  className="phaseContent">
                                    <div  className="closeIcon" onClick={this.infoBox}><em  className="icon-cancel"></em></div>
                                    <h3>Design</h3>
                                    <h4>Trust us to do the wireframing of your concept and design a seamless experience. Get a fully scalable UI/UX</h4>
                                    <p>We combine visual principles, data, color psychology, and decades worth of experience to create aesthetic interfaces that will drive the growth of your product. We are experts in creating human-centric designs that allow customers to intuitively use your product and have a great product experience.</p>
                                    <div  className="infoButton"></div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    <div className={`phasesBox Tailor-made-theme ${this.state.selected.filter(value=>value==='3').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon">
                                    <img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b61e/Prototype_blue.png"></img>
                                </div>
                                <strong>Tailor-made Prototype </strong>
                                <div  className="phasesinfo" onClick={(e)=>this.infoBox(5)}>
                                    <img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img>
                                </div>
                            </h3>
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div  className="checkBox"><input  type="checkbox" id="3" onClick={(e)=>this.selectPhase(e)}></input><label  htmlFor="3"></label></div>
                            </div>
                            {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >{this.props.features.features.length}  Features Selected</p></div>
                        <div  className="platformSection">
                            <h3>Platform <span onClick={this.props.selectPlatform}>Change</span></h3>
                            <ul>
                                {this.props.platform.slice(0,3).map(info=>
                                   <li><div  className="platformIcon"><img src={info.icon}></img></div>{info.title}</li>
                                   )}
                                {this.props.platform.length>3?<li  className="lastLi">
                                    <div  className="platformIcon moreLink"><span>+{this.props.platform.length-3}</span></div></li>:''}
                                
                            </ul>
                        </div>
                            <div  className="deliveryDate"><h3>
                                <strong >Delivered By</strong>
                                <span > 07 August 2020 </span></h3></div>
                            </React.Fragment>:''}
                            <learn-more>
                                <div  className={`phaseOverlay ${this.state.tailor?'active':''}`}></div>
                                <div  className={`phaseInfo ${this.state.tailor?'active':''}`}>
                                    <div  className="phaseContent">
                                        <div  className="closeIcon" onClick={this.infoBox}><em  class="icon-cancel"></em></div>
                                        <h3>Tailor-made Prototype</h3>
                                        <h4>Get a fully functional design prototype to test the design hypothesis, and end user journey. This includes designs for prototype too</h4>
                                        <p>Prototypes are realistic design representation of your ideas. We design interactive prototypes for iPhone, iPad, Android, and Web. Creation of prototypes is more specific, measurable, quick, and intensive than just describing the design. Test how the user will interact with an environment comparable to the final product.</p>
                                        <div  className="infoButton"></div>
                                    </div>
                                </div>
                            </learn-more>
                        </div>
                    <div className={`phasesBox MVP-theme ${this.state.selected.filter(value=>value==='4').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/5963a29c14c49f1407590ad5/MVP_blue.png"></img></div>
                                <strong >MVP </strong>
                                <div className="phasesinfo" onClick={(e)=>this.infoBox(2)}><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                           
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div  className="checkBox">
                                <input  type="checkbox" id="4" onClick={(e)=>this.selectPhase(e)}></input>
                                <label  htmlFor="4"></label>
                            </div>
                        </div>
                        <div  className="featureSection">
                            <h3 >Features <span >Change</span></h3>
                            <p>{this.props.mvpFeature} Features Selected</p>
                        </div>
                        <div  className="platformSection">
                            <h3>Platform <span onClick={this.props.selectPlatform}>Change</span></h3>
                            <ul>
                                {this.props.platform.slice(0,3).map(info=>
                                   <li><div  className="platformIcon"><img src={info.icon}></img></div>{info.title}</li>
                                   )}
                                {this.props.platform.length>3?<li  className="lastLi">
                                    <div  className="platformIcon moreLink"><span>+{this.props.platform.length-3}</span></div></li>:''}
                                
                            </ul>
                        </div>
                        {this.props.advance?<div  className="deliveryDate"><h3>
                                                        <strong >Delivered By</strong>
                                                        <span > 07 August 2020 </span></h3></div>
                                                    :''}
                        <learn-more >
                            <div  className={`phaseOverlay ${this.state.mvp?'active':''}`}></div>
                            <div  className={`phaseInfo ${this.state.mvp?'active':''}`}>
                                <div  className="phaseContent">
                                    <div  className="closeIcon" onClick={this.infoBox}><em  className="icon-cancel"></em></div>
                                    <h3>MVP</h3>
                                    <h4>Ship the first build of your idea and get early adopters to try out your product</h4>
                                    <p >We help design a Minimum Viable Product as a proof of concept to satisfy early customers and provide feedback for future development. It’s an easy way to build a product with a minimum set of features to test the market. Collect the maximum amount of validated learning about your customers with the least effort.</p>
                                    <div  className="infoButton"></div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    <div className={`phasesBox Full-theme ${this.state.selected.filter(value=>value==='5').length?'active':'dactive'}`} style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b620/Full_blue.png"></img></div>
                                <strong>Full Build </strong>
                                <div  className="phasesinfo" onClick={(e)=>this.infoBox(4)}><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
                            <div  className="checkBox">
                                <input  type="checkbox" id="5" onClick={(e)=>this.selectPhase(e)}></input>
                                <label htmlFor="5"></label>
                            </div>
                        </div>
                        {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >{this.props.features.features.length}  Features Selected</p></div>
                        <div  className="platformSection">
                            <h3>Platform <span onClick={this.props.selectPlatform}>Change</span></h3>
                            <ul>
                                {this.props.platform.slice(0,3).map(info=>
                                   <li><div  className="platformIcon"><img src={info.icon}></img></div>{info.title}</li>
                                   )}
                                {this.props.platform.length>3?<li  className="lastLi">
                                    <div  className="platformIcon moreLink"><span>+{this.props.platform.length-3}</span></div></li>:''}
                            </ul>
                        </div>
                        
                        <div  className="deliveryDate"><h3>
                            <strong >Delivered By</strong>
                            <span > 07 August 2020 </span></h3></div>
                        </React.Fragment>:''}
                        <learn-more>
                            <div  className={`phaseOverlay ${this.state.fullBuild?'active':''}`}></div>
                            <div  className={`phaseInfo ${this.state.fullBuild?'active':''}`}>
                                <div  className="phaseContent">
                                    <div  className="closeIcon" onClick={this.infoBox}><em  className="icon-cancel"></em></div>
                                    <h3>Full Build</h3>
                                    <h4>We will do end to end designing and development of your idea. Get a market-ready product</h4>
                                    <p >We build a full-fledged product based on the product roadmap and the features laid out in the specification document. We will also perfect the product based on user feedback received on the Minimum Viable Product. We will ship a fully mature, responsive, scalable, business-ready and a user-friendly product.</p>
                                    <div  className="infoButton"></div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    {this.props.custom.map(child => child)}
                    </div>
                </div>
            </div>        
        )
    }}
    }