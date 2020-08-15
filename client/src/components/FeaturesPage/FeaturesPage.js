import React from 'react'
import './FeaturePage.css'
import Left from '../appFeaturesLeft/appFeaturesLeft'
import Right from '../appFeaturesRight/appFeaturesRight'
import FeaturesHeader from '../featuresHeader/featuresHeader'
import { ApiGet, ApiPost} from '../../api'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../../context/state'
class Features extends React.Component{
    static contextType=AuthContext
    constructor(props,context){
        super(props,context)
        this.state={
            hideLeft:false,name:'',
            selectedFeature:[],
            selectedView:{},
            customFeature:false,
            advanced:false,
            promotion:false,
            showPlatform:false,
            data:[],
            selectedPlatform:[],
            platformId:[],
            bottomBar:false,
            platformList:[],
            price:'',
            weeks:'',
            redirect:false,
            template:''
        }
    }
    componentDidMount(){
        ApiGet('configurations')
          .then(res => {
            const data = res.data;
            this.setState({platformList: data[0].platforms });
          }) 
        ApiGet(`app/?attributes.title=${this.props.match.params.name}`).then(
            (res) => {
              const data = res.data;
              this.setState({ data });
              this.state.data.map(value=>value.attributes.map(info=>{
                  info.features.map(obj=>{
                      this.setState({price:+this.state.price+ +obj.effective_cost,template:value.id})
                      if(Number(obj.effective_weeks)<0.5)
                        {
                            this.setState({weeks:this.state.weeks})
                        }
                     else
                     this.setState({weeks:+this.state.weeks+ +obj.effective_weeks})   
                  })
                  ApiGet(`selectedPlatform/template/?templateId=${this.state.template}`)
                    .then(res=>{
                        let platforms=res.data.platforms
                        platforms.map(obj=>
                        this.state.platformList.map(data=>data.attributes.map(platform=>{
                            if(platform.id===obj)
                            {
                                this.setState({selectedPlatform:[...this.state.selectedPlatform,platform],platformId:[...this.state.platformId,obj],
                                    price:+this.state.price* +platform.price_multiplier,weeks:Math.round(+this.state.weeks* +platform.week_multiplier)
                                })
                            }
                        
                            }))
                    )
                    
                })
                  }))
            })
    }
    platform=()=>{
        this.setState({showPlatform:!this.state.showPlatform})
    }
    componentWillUpdate(){
        let value=this.context
        if(Object.keys(value.feature).length){
        this.state.price=+this.state.price+ +value.feature.effective_cost
        if(Number(value.feature.effective_weeks)<0.5)
        {
            this.state.weeks=this.state.weeks
        }
        else
        this.state.weeks=Math.round(`${+this.state.weeks+ +value.feature.effective_weeks}`)
        }
        

    }
    selectPlatform=(icon,e,id)=>{
        
        if(this.state.platformId.filter(value=>value===id).length){
            this.state.selectedPlatform=this.state.selectedPlatform.filter(value=>value!=icon)
            this.state.platformId=this.state.platformId.filter(value=>value!=id)
        }
        else{
        this.state.selectedPlatform=[...this.state.selectedPlatform,icon]
        this.state.platformId=[...this.state.platformId,id]
        }
    }
    hideLeft=()=>{
        this.setState({hideLeft:!this.state.hideLeft})
    }
    showLeft=()=>{
        this.setState({hideLeft:false})
    }
    selectedFeature=(value)=>{
          this.setState({selectedFeature:value})
    }
    selectedView=(value)=>{
        this.setState({selectedView:value})
    }
    customFeature=()=>{
        this.setState({customFeature:!this.state.customFeature})
      }
      advanced=()=>{
        this.setState({advanced:!this.state.advanced})
      }
    promotion=()=>{
        this.setState({promotion:!this.state.promotion})
    }  
    showInfo=()=>{
        this.setState({bottomBar:!this.state.bottomBar})
    }
    redirect=()=>{
        
        let value=this.context
        value.setPrice(this.state.price)
        value.setWeeks(this.state.weeks)
        let payload={price:this.state.price,weeks:this.state.weeks,templateId:this.state.template}
        ApiPost('priceAndDuration',payload)
        .then(res=>
            this.setState({redirect:true})
            )
        

    }
    render(){
        console.log(this.state.selectedPlatform)
        if(this.state.redirect){
            return(<Redirect to={`/delivery/${this.state.template}`}/>)
        }
        this.state.name=this.props.match.params.name
        console.log(this.state.price,this.state.weeks)
        return(
        <div className='wrapper'>
            <FeaturesHeader/>
            <div className='middlePart'>
            <div className='featureStudio'>
                <Left hide={this.state.hideLeft} hideLeft={this.hideLeft} selectedFeature={this.selectedFeature} name={this.state.name} selectedView={this.selectedView} customFeature={this.customFeature}/>
                <Right hideLeft={this.hideLeft} hide={this.state.hideLeft} show={this.showLeft} name={this.state.name} selectedFeature={this.state.selectedFeature.filter(value=>value.length)} view={this.state.selectedView}/>
            </div></div>
            <div class="bottomSelectFeature">
                <div className='appBottomBar'>
                    <div className="priceBox">
                        <h3 >
                            <span>Installment</span> ₹34,931.00 / week <em ></em>
                        </h3>
                    </div>
                
                    <div  className="durationBox">
                        <h3>
                            <span>Duration</span>{this.state.weeks} weeks
                        </h3>
                    </div>
                    <div className="maxpriceBox">
                        <h3>
                            <span >Max Price</span>
                            <strong>{this.state.price}</strong>
                        </h3>
                        <div  className="phasebreakBox">
                            <div  className="phaseIcon" onClick={this.showInfo}>
                                <img alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img>
                            </div>
                            <div  className={`phasebreakOverlay ${this.state.bottomBar?'active':''}`}></div>
                                <div className={`phasebreakDetail ${this.state.bottomBar?'active':''}`}>
                                    <div  className="closeButton" onClick={this.showInfo}><em  className="icon-cancel"></em></div>
                                    <div className='pricedetailBox'>
                                        <h3 >Price Details</h3>
                                        <ul>
                                            <li  className="headRow">
                                                <span>Phases</span>
                                                <span>Duration</span>
                                                <span>Price</span>
                                            </li>
                                            <li  className="headRow">
                                                <span>Product Roadmap</span>
                                                <span>Not Added</span>
                                            </li>
                                            <li>
                                                <span>Design</span>
                                                <span>6  weeks</span>
                                                <span>₹209641</span>
                                            </li>
                                            <li  className="headRow">
                                                <span>Tailor-made Prototype</span>
                                                <span>Not Added</span>
                                            </li>
                                            <li>
                                                <span>MVP</span>
                                                <span>17.2  weeks</span>
                                                <span>₹585377</span>
                                            </li>
                                            <li>
                                                <span >Full Build</span>
                                                <span >0.8  week</span>
                                                <span >₹43546</span>
                                            </li>
                                            <li  className="bgRow discountRow applyPromoMobile">
                                                <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                                                <button type="button" onClick={this.promotion}>Apply Promotion</button>
                                            </li>
                                            <li  className="bgRow">
                                                <strong>Total</strong>
                                                <strong>24 weeks</strong>
                                                <strong>₹8,38,564.00</strong>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='platformdetailBox'>
                                    <h3>Platform <span onClick={this.platform}>Change</span></h3>
                                    <ul>
                                    {this.state.selectedPlatform.map(value=>
                                            <li>
                                                <img src={value.icon}></img>
                                            </li>)}
                                    </ul>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div  className="applyPromoBox">
                        <span className="promo-hd">Promotion </span>
                        <div  className="promo-container">
                            <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                            <button  type="button" onClick={this.promotion}>Apply Promotion</button>
                        </div>
                    </div>
                    <div  className="previewBottom">
                        <div >
                            <button type="button" className="nextButton" onClick={this.redirect}> Plan Delivery</button>
                        </div>
                        <share-url-button  >
                            <button  type="button" className="shareUrl">
                                <em  class="icon-share-outline"></em>
                            </button>
                        </share-url-button>
                    </div>
                 </div>
            </div>
            <div className={`priceSideBar ${this.state.promotion?'active':''}`} >
              <div className="priceOverflow"></div>
              <div className="priceBoxHold">
                  <div className="priceListing">
                      <div className="close-btn"><em className="icon-cancel" onClick={this.promotion}></em></div>
                      <div className="applyPromoBox">
                          <h4>Apply Promotion</h4>
                          <div className="pro-box">
                              <form>
                                  <input type="text" maxLength="15" placeholder="Enter coupon code"></input>
                                  <button type="submit"> Apply </button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            {this.state.showPlatform?<platform-list  className="forMobileNew">
                <div  className='platformSidebarOverlay active'></div>
                <div  className='platformSidebar active'>
                    <div  className="topHead">
                        <h3>Platforms</h3>
                        <div className="closeBar"><em  className="icon-cancel"  onClick={this.platform}></em></div>
                    </div>
                    <div  className="platformListing">
                        <perfect-scrollbars>
                            <div style={{position: 'static'}} className="ps"> 
                                <div className="ps-content">
                                    <ul>
                                    {this.state.platformList.map(data=>
                                    data.attributes.map(platform=>
                                        <li  key={platform.id} >
                                            <div  className="platformImg">
                                                <img  alt="" src={platform.icon}></img>
                                            </div>
                                            <div  className="platformName">{platform.title}</div>
                                            <div className="platformCheck" >
                                                
                                                <input  type="checkbox" id={platform.id}  checked={this.state.platformId.filter(id=>id===platform.id).length}  onChange={()=>this.setState({platformId:[...this.state.platformId,platform.id]})}></input>
                                                <label  htmlFor={platform.id} onClick={(e)=>this.selectPlatform(platform.icon,e,platform.id)}></label>
                                            </div>
                                        </li>
                                        ))}
                                        
                                        
                                    </ul>
                                </div></div>
                            </perfect-scrollbars>
                        </div>
                    </div>
                </platform-list>:null}
            <div className={`commonPopUp ${this.state.customFeature?'active':''}`}>
            <div class="popOverlay"></div>
            <div className='popHolder newFeature'>
              <div class="closePopUp" onClick={this.customFeature}><span class="icon-cancel"></span></div>
              <div class="catLeft"><h3>Custom Feature</h3><p>Share the details of the feature you'd like to request.</p></div>
              <div className="catRight">
                  <form  role="form" >
                      <div className="featureDisclaimer">*Custom feature pricing and time may vary post proper understanding of the project. </div>
                      <div id="stepOne" className="featureTab active">
                          <ul className="formList"><li>
                              <mat-form-field className="mat-form-field ng-tns-c57-6 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder">
                                  <div className="mat-form-field-wrapper ">
                                      <div className="mat-form-field-flex">
                                          <div className="mat-form-field-infix ">
                                              <input type="text" matinput="" placeholder="Name your feature" name="title" maxlength="100" required="" class="mat-input-element mat-form-field-autofill-control  cdk-text-field-autofill-monitored " id="mat-input-6" aria-invalid="false" aria-required="true"/>
                                              <span className="mat-form-field-label-wrapper ">
                                                  <label className="mat-form-field-label ng-tns-c57-6 mat-empty mat-form-field-empty ng-star-inserted" id="mat-form-field-label-13" htmlFor="mat-input-6" aria-owns="mat-input-6" >
                                                      <span className="ng-tns-c57-6 ng-star-inserted" >Name your feature</span>
                                                      <span aria-hidden="true" className="mat-placeholder-required mat-form-field-required-marker ng-tns-c57-6 ng-star-inserted"> *</span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mat-form-field-underline ng-tns-c57-6 ">
                                            <span className="mat-form-field-ripple ng-tns-c57-6"></span>
                                        </div>
                                        <div className="mat-form-field-subscript-wrapper">
                                            <div className="mat-form-field-hint-wrapper  ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{opacity: '1', transform: 'translateY(0%)'}}>
                                                <div className="mat-form-field-hint-spacer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </mat-form-field>
                            </li>
                            <li>
                                <mat-form-field className="mat-form-field ng-tns-c57-7 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ">
                                    <div className="mat-form-field-wrapper ng-tns-c57-7">
                                        <div className="mat-form-field-flex ng-tns-c57-7">
                                            <div className="mat-form-field-infix ng-tns-c57-7">
                                                <textarea matinput="" placeholder="Feature description ( Max 500 characters )" name="description" maxlength="500" class="mat-input-element mat-form-field-autofill-control ng-tns-c57-7 cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid" id="mat-input-7" aria-invalid="false" aria-required="false"></textarea>
                                                <span className="mat-form-field-label-wrapper ng-tns-c57-7">
                                                    <label className="mat-form-field-label ng-tns-c57-7 mat-empty mat-form-field-empty ng-star-inserted" id="mat-form-field-label-15" for="mat-input-7" aria-owns="mat-input-7">
                                                        <span className="ng-tns-c57-7 ng-star-inserted">Feature description ( Max 500 characters )</span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mat-form-field-underline ng-tns-c57-7 ">
                                            <span className="mat-form-field-ripple ng-tns-c57-7"></span>
                                        </div>
                                        <div className="mat-form-field-subscript-wrapper ng-tns-c57-7">
                                            <div className="mat-form-field-hint-wrapper ng-tns-c57-7 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{opacity: '1', transform: 'translateY(0%)'}}>
                                                <div className="mat-form-field-hint-spacer ng-tns-c57-7"></div>
                                            </div>
                                        </div>
                                    </div>
                                </mat-form-field>
                            </li>
                        </ul>
                        <button type="button" className="advancButton" onClick={this.advanced}><span>Advanced Options</span></button>
                        {this.state.advanced?<div>
                            <h4>Select the implementation complexity.</h4>
                            <div className="diffRow">
                                <input id="rating1" value="1" type="radio" name="difficulty"/>
                                <label htmlFor="rating1"></label>
                                <input id="rating2" value="2" type="radio" name="difficulty"/>
                                <label htmlFor="rating2"></label>
                                <input id="rating3" value="3" type="radio" name="difficulty"/>
                                <label htmlFor="rating3"></label>
                                <input id="rating4" value="4" type="radio" name="difficulty"/>
                                <label htmlFor="rating4"></label>
                                <input id="rating5" value="5" type="radio" name="difficulty"/>
                                <label htmlFor="rating5"></label>
                                <input id="rating6" value="6" type="radio" name="difficulty"/>
                                <label htmlFor="rating6"></label>
                                <input id="rating7" value="7" type="radio" name="difficulty"/>
                                <label htmlFor="rating7"></label>
                                <input id="rating8" value="8" type="radio" name="difficulty"/>
                                <label htmlFor="rating8"></label>
                                <input id="rating9" value="9" type="radio" name="difficulty"/>
                                <label htmlFor="rating9"></label>
                                <input id="rating10" value="10" type="radio" name="difficulty"/>
                                <label htmlFor="rating10"></label>
                            </div>
                            <span className="easy">Easy</span>
                            <span class="difficult">Difficult</span>
                            <div className="difficultCount"><h5><span>2</span>/10</h5><h6>Easy</h6></div>
                            <ul className="formList">
                                <li>
                                    <label>Does it have any algorithms?</label>
                                    <div className="customDropdown">
                                        <select id="algorithms" name="algorithms">
                                            <option value="none" selected="">None ( Default)</option>
                                            <option value="simple">Simple</option>
                                            <option value="complex">Complex</option>
                                            <option value="machine_learning">Machine Learning</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <label>Does it need a user interface or is it backend only?</label>
                                    <div className="customDropdown">
                                        <select id="ui" name="ui">
                                            <option value="backend" selected="">Backend only</option>
                                            <option value="both">Both (Backend &amp; User Interface)</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                            <ul className="formList">
                                <li>
                                    <label>Are there any apps that have a similar feature? (Max 3 links).</label>
                                    <div className="relativeRow active">
                                        <input type="text" placeholder="e.g., http://www.example.com" name="appurl"/>
                                    </div>
                                </li>
                            </ul>
                        </div>:''}
                        <div className="featureButtons"><button type="button" class="done-button hvr-float" disabled> Done </button></div>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        )
    }
}
export default Features;