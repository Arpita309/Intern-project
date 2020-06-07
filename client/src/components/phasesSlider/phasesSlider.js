import React from 'react'
import SliderComponent from '../deliverySlider/deliverySlider';
export default class PhasesRow extends React.Component {
    constructor() {
        super();
    
        this.state = {
          
          width: 0
       
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
      render(){
        if (this.state.width > 768) { return(

          
                 <div className='phasesRowSlider'>
                    <div className='phasesRowContent'>
                        <div className='phasesRow'>
                    <SliderComponent>

                    <div className="phasesBox Product-theme dactive" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon">
                                    <img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/58cbad7d14c49f1f2a318071/Roadmap_blue.png"></img>
                                </div>
                                <strong>Product Roadmap </strong>
                                <div  className="phasesinfo"><img alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            <div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>
                            <div className="checkBox">
                                <input  type="checkbox" id="phaseSelected4"></input><label  htmlfor="phaseSelected4"></label>
                            </div>
                        </div>
                        <learn-more>
                            <div  className="phaseOverlay"></div>
                            <div  className="phaseInfo">
                                <div  className="phaseContent">
                                    <div  className="closeIcon"><em  class="icon-cancel"></em></div>
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
                    <div  className="phasesBox Design-theme active" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b61d/Design_blue.png"></img></div>
                                <strong>Design </strong>
                                <div  className="phasesinfo"><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            <div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span > 09 August 2020 </span>
                                <span ></span>
                            </div>
                            <div  className="checkBox">
                                <input  type="checkbox" id="phaseSelected1"></input>
                                <label  htmlFor="phaseSelected1"></label>
                            </div>
                        </div>
                    </div>
                    <div className="phasesBox Tailor-made-theme dactive" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon">
                                    <img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b61e/Prototype_blue.png"></img>
                                </div>
                                <strong>Tailor-made Prototype </strong>
                                <div  className="phasesinfo">
                                    <img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img>
                                </div>
                            </h3>
                            <div  className="mobileDate">
                                <strong >Delivered by</strong><span ></span></div>
                                <div  className="checkBox"><input  type="checkbox" id="phaseSelected2"></input><label  htmlFor="phaseSelected2"></label></div>
                            </div>
                        </div>
                    <div className="phasesBox MVP-theme active" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/5963a29c14c49f1407590ad5/MVP_blue.png"></img></div>
                                <strong >MVP </strong>
                                <div className="phasesinfo"><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            <div  className="mobileDate">
                                <strong >Delivered by</strong><span > 08 December 2020 </span><span ></span>
                            </div>
                            <div  className="checkBox">
                                <input  type="checkbox" id="phaseSelected0"></input>
                                <label  htmlFor="phaseSelected0"></label>
                            </div>
                        </div>
                        <div  className="featureSection">
                            <h3 >Features <span >Change</span></h3>
                            <p>24 Features Selected</p>
                        </div>
                        <div  className="platformSection">
                            <h3>Platform <span>Change</span></h3>
                            <ul>
                                <li><div  className="platformIcon"><img  src="https://bstudio-assets.azureedge.net/assets-builder/uploads/image/file/59fd56b888f3ac79a46ef210/ios_blue.png"></img></div> iOS </li>
                                <li ><div  className="platformIcon"><img  src="https://bstudio-assets.azureedge.net/assets-builder/uploads/image/file/59fd570d88f3ac79a46ef213/Web_xh.png"></img></div> Web </li>
                            </ul>
                        </div>
                        <learn-more >
                            <div  className="phaseOverlay"></div>
                            <div  className="phaseInfo">
                                <div  className="phaseContent">
                                    <div  className="closeIcon"><em  className="icon-cancel"></em></div>
                                    <h3>MVP</h3>
                                    <h4>Ship the first build of your idea and get early adopters to try out your product</h4>
                                    <p >We help design a Minimum Viable Product as a proof of concept to satisfy early customers and provide feedback for future development. It’s an easy way to build a product with a minimum set of features to test the market. Collect the maximum amount of validated learning about your customers with the least effort.</p>
                                    <div  className="infoButton"></div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    <div className="phasesBox Full-theme active" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b620/Full_blue.png"></img></div>
                                <strong>Full Build </strong>
                                <div  className="phasesinfo"><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            <div  className="mobileDate">
                                <strong>Delivered by</strong><span> 14 December 2020 </span><span ></span>
                            </div>
                            <div  className="checkBox">
                                <input  type="checkbox" id="phaseSelected3"></input>
                                <label htmlFor="phaseSelected3"></label>
                            </div>
                        </div>
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
                    <div className="phasesBox Product-theme dactive" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon">
                                    <img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/58cbad7d14c49f1f2a318071/Roadmap_blue.png"></img>
                                </div>
                                <strong>Product Roadmap </strong>
                                <div  className="phasesinfo"><img alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            <div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>
                            <div className="checkBox">
                                <input  type="checkbox" id="phaseSelected4"></input><label  htmlfor="phaseSelected4"></label>
                            </div>
                        </div>
                        <learn-more>
                            <div  className="phaseOverlay"></div>
                            <div  className="phaseInfo">
                                <div  className="phaseContent">
                                    <div  className="closeIcon"><em  class="icon-cancel"></em></div>
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
                    <div  className="phasesBox Design-theme active" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b61d/Design_blue.png"></img></div>
                                <strong>Design </strong>
                                <div  className="phasesinfo"><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            <div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span > 09 August 2020 </span>
                                <span ></span>
                            </div>
                            <div  className="checkBox">
                                <input  type="checkbox" id="phaseSelected1"></input>
                                <label  htmlFor="phaseSelected1"></label>
                            </div>
                        </div>
                    </div>
                    <div className="phasesBox Tailor-made-theme dactive" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon">
                                    <img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b61e/Prototype_blue.png"></img>
                                </div>
                                <strong>Tailor-made Prototype </strong>
                                <div  className="phasesinfo">
                                    <img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img>
                                </div>
                            </h3>
                            <div  className="mobileDate">
                                <strong >Delivered by</strong><span ></span></div>
                                <div  className="checkBox"><input  type="checkbox" id="phaseSelected2"></input><label  htmlFor="phaseSelected2"></label></div>
                            </div>
                        </div>
                    <div className="phasesBox MVP-theme active" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/5963a29c14c49f1407590ad5/MVP_blue.png"></img></div>
                                <strong >MVP </strong>
                                <div className="phasesinfo"><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            <div  className="mobileDate">
                                <strong >Delivered by</strong><span > 08 December 2020 </span><span ></span>
                            </div>
                            <div  className="checkBox">
                                <input  type="checkbox" id="phaseSelected0"></input>
                                <label  htmlFor="phaseSelected0"></label>
                            </div>
                        </div>
                        <div  className="featureSection">
                            <h3 >Features <span >Change</span></h3>
                            <p>24 Features Selected</p>
                        </div>
                        <div  className="platformSection">
                            <h3>Platform <span>Change</span></h3>
                            <ul>
                                <li><div  className="platformIcon"><img  src="https://bstudio-assets.azureedge.net/assets-builder/uploads/image/file/59fd56b888f3ac79a46ef210/ios_blue.png"></img></div> iOS </li>
                                <li ><div  className="platformIcon"><img  src="https://bstudio-assets.azureedge.net/assets-builder/uploads/image/file/59fd570d88f3ac79a46ef213/Web_xh.png"></img></div> Web </li>
                            </ul>
                        </div>
                        <learn-more >
                            <div  className="phaseOverlay"></div>
                            <div  className="phaseInfo">
                                <div  className="phaseContent">
                                    <div  className="closeIcon"><em  className="icon-cancel"></em></div>
                                    <h3>MVP</h3>
                                    <h4>Ship the first build of your idea and get early adopters to try out your product</h4>
                                    <p >We help design a Minimum Viable Product as a proof of concept to satisfy early customers and provide feedback for future development. It’s an easy way to build a product with a minimum set of features to test the market. Collect the maximum amount of validated learning about your customers with the least effort.</p>
                                    <div  className="infoButton"></div>
                                </div>
                            </div>
                        </learn-more>
                    </div>
                    <div className="phasesBox Full-theme active" style={{display: 'inline-block'}}>
                        <div  className="phasesHead">
                            <h3>
                                <div  className="phaseIcon"><img  alt="" src="https://bstudio-assets.azureedge.net/assets-builder/uploads/build_phase/icon/587f162314c49f39f0d5b620/Full_blue.png"></img></div>
                                <strong>Full Build </strong>
                                <div  className="phasesinfo"><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img></div>
                            </h3>
                            <div  className="mobileDate">
                                <strong>Delivered by</strong><span> 14 December 2020 </span><span ></span>
                            </div>
                            <div  className="checkBox">
                                <input  type="checkbox" id="phaseSelected3"></input>
                                <label htmlFor="phaseSelected3"></label>
                            </div>
                        </div>
                    </div>
                    {this.props.custom.map(child => child)}
                    </div>
                </div>
            </div>        
        )
    }}
    }