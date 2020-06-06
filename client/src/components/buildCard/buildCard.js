import React from 'react'
import './buildCard.css'
import Popup from '../buildCardPopUp/buildcardPopup'
import {Link} from'react-router-dom'
import Header from '../buildcardHeader/buildcardHeader'
import Footer from '../footer/footer'
class BuildCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dropdown:false,
            invite:false,share:false,transfer:false,prototype:false,
            builderCloud:false,builderCareinfo:false,showSidebar:false,builderSummary:false,
            buildcardPayment:false
        }
    }
    showDropdown=()=>{
        this.setState({dropdown:!this.state.dropdown})
    }
    showpopup=(e)=>{
        if(e.target.id==1){
            this.setState({invite:!this.state.invite})
        }
        else if(e.target.id==2){
            this.setState({share:!this.state.share})
        }
        else if(e.target.id==4){
            this.setState({prototype:true})
        }
        else{
            this.setState({transfer:!this.state.transfer})
        }
    }
    showInfobox=(e)=>{
        if(e.target.id==1){
            this.setState({builderCareinfo:true})
            
        }
        else if(e.target.id==2){
            this.setState({builderCloud:true})
            
        }
        else if(e.target.id==3){
            this.setState({builderSummary:true})
        }
        else if(e.target.id==4){
            this.setState({buildcardPayment:true})
        }
        else{
            this.setState({builderCareinfo:false,builderCloud:false,builderSummary:false,buildcardPayment:false})
            
            
        }
       
    }
    sidebar=()=>{
        this.setState({showSidebar:!this.state.showSidebar})
    }
    closePopup=()=>{
        this.setState({invite:false,share:false,transfer:false,prototype:false})
    }
    render(){
        return(
            <div className='wrapper'>
                <Header showSidebar={this.state.showSidebar} sidebar={this.sidebar}/>
                <div className='middlePart'>
                    <div className='main-buildcard-bx' >
                        <div className='container' style={{width:'1470px'}}>
                            <div className='row' >
                                <div className=' col-xs-12 col-md-7 col-sm-12'>
                                    <div className='buildCardmain'>
                                        <div className='buildCardTop'>
                                            <div  className="buildCardLeft">
                                                <h1>
                                                    <span  className="userspace"> Hi, Arpita, </span> Here is your 
                                                    <strong  className="cardHover">
                                                        <span>
                                                            <img  alt="" src="https://studio.builder.ai/assets/images/buildcard-icon.png" className="card-default"></img>
                                                            <img  alt="" src="https://studio.builder.ai/assets/images/buildcard-icon2.png" className="card-hover"></img>
                                                        </span> Buildcard. 
                                                    </strong>
                                                    <div  className="icon-block">
                                                        <span  className="info">
                                                            <img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png" id='3' onClick={(e)=>this.showInfobox(e)}></img>
                                                        </span>
                                                       {this.state.builderSummary?<div  className="buildcard_summery">
                                                            <div  className="close-btn">
                                                                <em  className="icon-cancel" onClick={this.showInfobox}></em>
                                                            </div>
                                                            <p> A buildcard is a summary of your requirements with cost and time estimates.</p>
                                                        </div>:''}
                                                    </div>
                                                </h1>
                                            </div>
                                            <div  className="buildCardright">
                                                <span  className="icon-block">
                                                    <em  className="icon-iconoptions" onClick={this.showDropdown}></em>
                                                </span>
                                            </div>
                                            {this.state.dropdown?<div  className="userDropdownMenu">
                                                <ul >
                                                    <li  className="dropDownList">
                                                        <em  className="icon-icondownload" ></em>
                                                        <span > Download </span>
                                                    </li>
                                                    <li  className="dropDownList">
                                                        <em  className="icon-iconinvite"></em>
                                                        <span id='1' onClick={(e)=>this.showpopup(e)}> Invite </span>
                                                    </li>
                                                    <li  className="dropDownList">
                                                        <em  className="icon-icontransfer"></em>
                                                        <span id='3' onClick={(e)=>this.showpopup(e)}> Transfer </span>
                                                    </li>
                                                    <li  className="dropDownList">
                                                        <em  class="icon-iconshare"></em>
                                                        <span id='2' onClick={(e)=>this.showpopup(e)}> Share </span>
                                                    </li>
                                                    <li  className="dropDownList">
                                                        <em  className="icon-prototype"></em>
                                                        <span id='4' onClick={(e)=>this.showpopup(e)}> View Prototype </span>
                                                    </li>
                                                </ul>
                                            </div>:''}
                                            <div  className="last-update"> Last edited: 4 June 2020 </div>
                                        </div>
                                        <div className='tabing-block' >
                                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist" style={{width:'100%'}}>
                                                <a class="nav-item nav-link tabList active" id="nav-info-tab" data-toggle="tab" href="#nav-info" role="tab" aria-controls="nav-info" aria-selected="false">Project Info</a>
                                                <a class="nav-item nav-link tabList" id="nav-similar-tab" data-toggle="tab" href="#nav-similar" role="tab" aria-controls="nav-similar" aria-selected="false">Similar Apps(1)</a>
                                                <a class="nav-item nav-link tabList" id="nav-features-tab" data-toggle="tab" href="#nav-features" role="tab" aria-controls="nav-features" aria-selected="false">Features(26)</a>
                                                 <a class="nav-item nav-link tabList" id="nav-phases-tab" data-toggle="tab" href="#nav-phases" role="tab" aria-controls="nav-phases" aria-selected="false">Phases(3)</a>
                                            </div>  
                                        </div>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-info" role="tabpanel" aria-labelledby="nav-info">
                                                <div className="fixHeight">
                                                    <div className="buildcard-detail ng-star-inserted">
                                                        <h3  className="detail-heading"> Project Basic Details </h3>
                                                        <div  className="detail-list-block">
                                                            <div  className="list">
                                                                <div  className="project-detail">
                                                                    <div className="pro-icon">
                                                                        <em  className="icon-iconprojectname"></em>
                                                                    </div>
                                                                    <div  className="pro-text-block">
                                                                        <h3  className="pro-head"> Project Name </h3>
                                                                        <div  className="pro-name-block">
                                                                        <div  className="pro-name-strip edit ng-star-inserted">
                                                                            <p  className="strip-head"> My Builder Project </p>
                                                                            <div  className="project-action2 ng-star-inserted">
                                                                                <em  className="icon-iconedit"></em>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div  className="list">
                                                            <div  className="project-detail">
                                                                <div className="pro-icon">
                                                                    <em  className="icon-iconproducttype"></em>
                                                                </div>
                                                                <div  className="pro-text-block">
                                                                    <h3  className="pro-head"> Project Type </h3>
                                                                    <div  className="pro-name-block">
                                                                        <div  className="pro-name-strip change">
                                                                            <p  className="strip-head ng-star-inserted">Something</p>
                                                                            <div  className="project-action ng-star-inserted">
                                                                                <span className="btnStyle1"> Change </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div  className="list">
                                                            <div  className="project-detail">
                                                                <div className="pro-icon">
                                                                    <em  className="icon-iconlocation"></em>
                                                                </div>
                                                                <div  className="pro-text-block">
                                                                    <h3  className="pro-head"> Team Location </h3>
                                                                    <div  className="pro-name-block">
                                                                        <div  className="pro-name-strip change">
                                                                            <p  className="strip-head"> Anywhere </p>
                                                                            <div className="project-action ng-star-inserted">
                                                                                <span  className="btnStyle1"> change </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        
                                        
                                            <div className="tab-pane fade " id="nav-similar" role="tabpanel" aria-labelledby="nav-similar">
                                                <div  className="fixHeight ng-star-inserted">
                                                    <div  className="buildcard-detail">
                                                        <h3  className="detail-heading"> Similar Apps (1) 
                                                            <span  className="btnStyle1 feature-btn ng-star-inserted"> Change</span>
                                                        </h3>
                                                        <div  className="detail-list-block list-block2">
                                                            <div  className="app-box ng-star-inserted">
                                                                <div  className="app-left">
                                                                    <span  className="simiapp-ico-img">
                                                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/app_builder_icon/5c5013941f0c643d17336ed1/9gag.png"></img>
                                                                    </span>
                                                                    <span > 9GAG</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr  className="app-sep"/>
                                                    <div  className="buildcard-detail">
                                                        <h3  className="detail-heading"> Competitors (0) 
                                                            <span className="btnStyle1 feature-btn ng-star-inserted"> Change </span>
                                                        </h3>
                                                        <div  className="detail-list-block list-block2 ng-star-inserted"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade " id="nav-features" role="tabpanel" aria-labelledby="nav-features">
                                                <div  className="fixHeight">
                                                    <div  className="buildcard-detail">
                                                        <h3  className="detail-heading"> Features (26) 
                                                            <span  className="btnStyle1 feature-btn ng-star-inserted"> Change </span>
                                                        </h3>
                                                        <div  className="detail-list-block feature-box">
                                                            <div>
                                                                <ul  className="list-block">
                                                                    <li> Comments </li>
                                                                    <li> Download Options </li>
                                                                    <li> Email Login </li>
                                                                    <li> Facebook Login </li>
                                                                    <li> Forgot Password </li>
                                                                    <li> Free Trial </li>
                                                                    <li> Google Login </li><li > Language Options </li><li > Location </li><li > Navigation Menu </li><li> Notification Settings </li><li> Notifications </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Payments </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Phone Verification </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Playlist </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Preview Video </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Restore Purchase </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Reviews </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Search </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Settings </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Share </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Sorting </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Splash Screen </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Subscriptions </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Trending </li><li _ngcontent-serverapp-c136="" class="ng-star-inserted"> Videos </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade " id="nav-phases" role="tabpanel" aria-labelledby="nav-phases">
                                                <div  className="fixHeight">
                                                    <div  className="buildcard-detail ">
                                                        <h3  className="detail-heading"> Phases (3) 
                                                            <span  className="btnStyle1 feature-btn "> Change </span>
                                                        </h3>
                                                        <div  className="detail-list-block">
                                                            <div className="phases-box">
                                                                <div  className="design-theme list-box ">
                                                                    <div className="pro-head">
                                                                        <h3> Design </h3>
                                                                    </div>
                                                                    <div  className="pro-mid">
                                                                        <p  className="head "> Platform </p>
                                                                        <div className="plateform-list-block ">
                                                                            <div  className="Platform-list showPlateform-">
                                                                                <ul>
                                                                                    <li>
                                                                                        <span  className="icons">
                                                                                            <img  alt="Android" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9b0014c49f7f46746441/Android_blue.png"></img>
                                                                                        </span>
                                                                                        <span  className="mobile-hide"> Android </span>
                                                                                    </li>
                                                                                    <li  >
                                                                                        <span  className="icons">
                                                                                            <img  alt="iOS" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd56b888f3ac79a46ef210/ios_blue.png"></img>
                                                                                        </span>
                                                                                        <span  className="mobile-hide"> iOS </span>
                                                                                    </li>
                                                                                    <li >
                                                                                        <span  className="icons">
                                                                                            <img  alt="Web" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd570d88f3ac79a46ef213/Web_xh.png"></img>
                                                                                        </span>
                                                                                        <span  className="mobile-hide"> Web </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div  className="pro-ftr">
                                                                        <p  class="head"> Project Speed </p>
                                                                        <div  className="progress-box">
                                                                            <div> Relaxed</div>
                                                                            <div  className="progress">
                                                                                <div  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-green relaxed"></div>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div  className="list-box mvp-theme ">
                                                                        <div  className="pro-head">
                                                                            <h3> MVP </h3>
                                                                        </div>
                                                                        <div  className="pro-mid">
                                                                            <p  className="head"> Platform </p>
                                                                            <div  className="plateform-list-block ">
                                                                                <div  className="Platform-list showPlateform-">
                                                                                    <ul >
                                                                                        <li >
                                                                                            <span  className="icons">
                                                                                                <img  alt="Android" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9b0014c49f7f46746441/Android_blue.png"></img>
                                                                                            </span>
                                                                                            <span  className="mobile-hide"> Android </span>
                                                                                        </li>
                                                                                        <li  >
                                                                                            <span  className="icons">
                                                                                                <img  alt="iOS" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd56b888f3ac79a46ef210/ios_blue.png"></img>
                                                                                            </span>
                                                                                            <span  className="mobile-hide"> iOS </span>
                                                                                        </li>
                                                                                        <li >
                                                                                            <span  className="icons">
                                                                                                <img  alt="Web" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd570d88f3ac79a46ef213/Web_xh.png"></img>
                                                                                            </span>
                                                                                            <span  className="mobile-hide"> Web </span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div  className="pro-ftr">
                                                                        <p  class="head"> Project Speed </p>
                                                                        <div  className="progress-box">
                                                                            <div> Relaxed</div>
                                                                            <div  className="progress">
                                                                                <div  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-green relaxed"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    </div> 
                                                                    <div  className="full-theme list-box ">
                                                                    <div className="pro-head">
                                                                        <h3> Full Build </h3>
                                                                    </div>
                                                                    <div  className="pro-mid">
                                                                        <p  className="head "> Platform </p>
                                                                        <div className="plateform-list-block ">
                                                                            <div  className="Platform-list showPlateform-">
                                                                                <ul>
                                                                                    <li>
                                                                                        <span  className="icons">
                                                                                            <img  alt="Android" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9b0014c49f7f46746441/Android_blue.png"></img>
                                                                                        </span>
                                                                                        <span  className="mobile-hide"> Android </span>
                                                                                    </li>
                                                                                    <li  >
                                                                                        <span  className="icons">
                                                                                            <img  alt="iOS" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd56b888f3ac79a46ef210/ios_blue.png"></img>
                                                                                        </span>
                                                                                        <span  className="mobile-hide"> iOS </span>
                                                                                    </li>
                                                                                    <li >
                                                                                        <span  className="icons">
                                                                                            <img  alt="Web" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd570d88f3ac79a46ef213/Web_xh.png"></img>
                                                                                        </span>
                                                                                        <span  className="mobile-hide"> Web </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div  className="pro-ftr">
                                                                        <p  class="head"> Project Speed </p>
                                                                        <div  className="progress-box">
                                                                            <div> Relaxed</div>
                                                                            <div  className="progress">
                                                                                <div  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-green relaxed"></div>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div  className="list-box">
                                                                    <div className="pro-head">
                                                                        <h3 > Builder Care </h3>
                                                                    </div>
                                                                    <div  className="pro-mid btm-bdr-none">
                                                                        <div  className="mid-txt-block">
                                                                            <p> Get on demand cloud support - setup, monitoring,scalability and migrations. Upgrade your app to support newer iOS/Android updates. </p>
                                                                            <p> Technical support for SDK, third party integrations and upgrades. Support for unexpected bugs, crashes and security issues. </p>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    <div  className="list-box ">
                                                                        <div  className="pro-head">
                                                                            <h3> Builder Cloud </h3>
                                                                        </div>
                                                                    <div className="pro-mid btm-bdr-none">
                                                                        <div  className="mid-txt-block">
                                                                            <p>
                                                                                <strong>Commitment-free savings:</strong> our customers saved over $4.5m, last year.
                                                                            </p>
                                                                            <p><strong>World-class analytics:</strong> Optimise your software and infrastructure.</p>
                                                                            <p><strong >Best-in-class multicloud:</strong> AWS, Digital Ocean, Azure and more. Just one bill (for a lot less).</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='  col-xs-12 col-md-4 col-sm-12 pull-right'>
                                    <div className={`only-buildcard ${this.state.buildcardPayment?'buildcard-payment-bx':''}`}>
                                        <app-payment-summary>
                                            <div className={`paymentSummary modifypaymnt-summry ${this.state.buildcardPayment?'buildcard-payment':''}`}>
                                                <h3>Payment Summary 
                                                    <div  className="expandicon ng-star-inserted">
                                                        <strong></strong>
                                                    </div>
                                                    <div  className="icon-cancel custom-only-xs" onClick={this.showInfobox}></div>
                                                </h3>
                                                <div  className="costDuration">
                                                    <div  className="detailRow">
                                                        <label>Total Cost </label>
                                                        <p >
                                                            <strong > ₹ 836,185.00</strong>
                                                        </p>
                                                    </div>
                                                    <div  className="detailRow">
                                                        <label>Monthly cost</label>
                                                        <p > ₹ 34,841.04 </p>
                                                    </div>
                                                    <div  className="detailRow">
                                                        <label>Development duration</label>
                                                        <p> 6 Months (24 weeks ) </p>
                                                    </div>
                                                    <div  className="applyPromo">
                                                        <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                                                        <button type="button" onClick={this.sidebar}>Apply Promotion </button>
                                                    </div>
                                                    <div  className="additionalService">
                                                        <h4>Additional Service</h4>
                                                        <div  className="builderCare">
                                                            <div  className="builderSelect">
                                                                <label  className="builderCareCheck">Builder Care 
                                                                    <input  type="checkbox" name="checkbox" className="check"></input>
                                                                    <span  className="checkmark"></span>
                                                                </label>
                                                            <div  className="info">
                                                                <img  src="https://studio.builder.ai/assets/images/info_blue.png" alt="" id='1' onClick={(e) => this.showInfobox(e)}></img>
                                                                {this.state.builderCareinfo? <React.Fragment><div  className="infoBox ">
                                                                    <ul>
                                                                        <li >24/7 support and maintenance for your project year round.</li>
                                                                        <li >On demand cloud support - setup, monitoring, scalability, and migrations.</li>
                                                                        <li>Upgrade your app to support the newer iOS/ Android updates.</li>
                                                                        <li >Technical support for SDK, third party integrations, and upgrades.</li>
                                                                        <li>Support for unexpected bugs, crashes, and security issues.</li>
                                                                    </ul>
                                                                    <em  className="icon-cancel closeInfo" onClick={this.showInfobox}></em></div></React.Fragment>:''}
                                                            </div>
                                                        </div>
                                                        <p>₹6,968.21 /Mo</p>
                                                    </div>
                                                    <div className="builderCare ">
                                                        <div  className="builderSelect">
                                                            <label  className="builderCareCheck">Builder Cloud 
                                                                <input  type="checkbox" name="checkbox" class="check "></input>
                                                                <span  className="checkmark"></span>
                                                            </label>
                                                            <div  className="info">
                                                                <img  src="https://studio.builder.ai/assets/images/info_blue.png" alt="" id='2' onClick={(e) => this.showInfobox(e)}></img>
                                                                {this.state.builderCloud?<div  className="infoBox ">
                                                                <ul >
                                                                    <li ><strong>Commitment-free savings:</strong> our customers saved over $4.5m, last year.</li>
                                                                    <li ><strong >World-class analytics:</strong> Optimise your software and infrastructure.</li>
                                                                    <li ><strong >Best-in-class multicloud:</strong> AWS, Digital Ocean, Azure and more. Just one bill (for a lot less).</li>
                                                                    </ul>
                                                                    <em  className="icon-cancel closeInfo" onClick={this.showInfobox}></em></div>:''}
                                                            </div>
                                                        </div>
                                                        <p >₹2,259.84 /Mo</p>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </app-payment-summary>
                                        <div>
                                            <div  className="payment-summery">
                                                <div  className="mobile-view-bx">
                                                    <div  className="total-ammount-block">
                                                        <div  className="mobileClickSpace" id='4' onClick={(e)=>{this.showInfobox(e)}}></div>
                                                        <h3><strong> ₹ 836,185.00</strong><span><img  alt="" src="https://studio.builder.ai/assets/images/info_blue.png" ></img></span></h3>
                                                        <p><label>Duration</label> 24.0 weeks</p>
                                                    </div>
                                                    <div  className="continue-btn">
                                                        <button  type="button" className="start-pro-btn"><Link to='/payment-plan' style={{color:'white'}}>Start Project </Link></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {this.state.invite?<Popup h3='Invite others to view ' close={this.closePopup}/>:''}
                    {this.state.share?<Popup h3='Share with others ' close={this.closePopup}/>:''}
                    {this.state.transfer?<Popup h3='Transfer ownership for ' close={this.closePopup}/>:''}
                    <div  className={`commonPopUp ${this.state.prototype?'active':''}`}>
                        <div  className="popOverlay"></div>
                        <div  className="popHolder builderNow">
                            <div  className="closePopUp" onClick={this.closePopup}></div>
                            <h3>What is Builder Now?</h3>
                            <p >A Prototyping tool build to
                                <br/> experience the app you're building</p>
                            <div  className="footerButton">
                                <button  type="button" class="cancelButton" onClick={this.closePopup}>I'll check later</button>
                                <button  type="button" class="doneButton"><Link to='/prototype' style={{color:'white'}}>Let's Begin</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default BuildCard;

