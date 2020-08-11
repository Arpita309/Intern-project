import React from 'react'
import './prototypeHeader.css'
import Popup from '../prototypePopup/prototypePopup';
import {Dropdown} from '../prototypePopup/prototypePopup'
import AuthContext from '../../context/state'
class ProtoHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            name:'My builder project',
            mobile:true,
            showComments:false,
            sharePop:false,
            showPop:false,
            mail:true,
            dropdown:false
        }
        this.showInput=this.showInput.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
        this.showPop=this.showPop.bind(this);
        this.showDropdown=this.showDropdown.bind(this)
        
    }
    showInput(){
        this.setState({show:!this.state.show,name:''})
        
    }
    showComments=()=>{
        this.setState({showComments:!this.state.showComments})
        
    }
    showShare=()=>{
        this.setState({sharePop:!this.state.sharePop})
        
    }
    setMobileView=()=>{
        this.setState({mobile:true});
        this.props.setView(this.state.mobile)
    }
    setWebView=()=>{
        this.setState({mobile:false});
        this.props.setView(this.state.mobile)
    }
    handleKeyDown(e){
        if (e.keyCode === 13 ) {
            this.setState({show:false,name:e.target.value})
        }
    }
    showPop=()=>{
        this.setState({showPop:!this.state.showPop})
    }
    viewMail=()=>{
        this.setState({mail:!this.state.mail})
    }
    showDropdown=()=>{
        this.setState({dropdown:!this.state.dropdown})
    }
    render(){
       console.log(this.state.dropdown)
        return(
            
            <React.Fragment>
               <div className='prototype-header'>
                <div className='wrapper-header'>
                    <div className="now-logo">
                        <img  src="https://now.builder.ai/assets/images/buildernow-logo.svg"></img>
                        
                    </div>
                    <h3  className='header-txt projectTitleHover'  onClick={this.showInput}>{this.state.name}</h3>
                        <input  className={`edit-prototype-name ${this.state.show?'show':''}`} id="projectTitleInput" maxlength="25" onKeyDown={this.handleKeyDown}></input>
                </div>
                <div className='wrapper highlight-off'>
                    <div  className="mob-web-btn-wrapper">
                        <div  className={`mob-web-btn mob-btn ${this.state.mobile?'active':''}`}>
                            <span  className="icon-mob icon-mobile" onClick={this.setMobileView}></span>
                        </div>
                        <div  className={`mob-web-btn web-btn ${this.state.mobile?'':'active'}`}>
                            <span  className='icon-web icon-desktop-1' onClick={this.setWebView}></span>
                        </div>
                    </div>
                    <div  className="header-action-btn commentNotification">
                        <div  className="clickarea" onClick={this.showComments}>
                            <span  className="action-icon icon-comment-new"></span>
                        </div>
                        <div  className="tutorialBox greyBg topposition1 hide">
                            <h3>Add comments</h3>
                            <p>Click the screens below to add notes for your designer.</p>
                            <div  className="dots">
                                <span  className="active"></span>
                                <span ></span>
                            </div>
                            <div  className="buttons">
                                <button  className="backButton" type="button">Back</button>
                                <button  className="nextButton" type="button">Next</button>
                            </div>
                        </div>
                    </div>
                    <div  className="copy-url-btn icon-share-outline">
                        <span  className="shareClick" onClick={this.showShare}></span>
                        <div  className="tutorialBox">
                            <h3 >Share prototype</h3>
                            <p >Get feedback on your idea now.</p>
                            <div  className="dots">
                                <span ></span>
                                <span></span>
                                <span ></span>
                                <span  className="active"></span>
                                <span> </span>
                            </div>
                            <div  className="buttons">
                                <button  className="backButton" type="button">Back</button>
                                <button  className="nextButton" type="button">Next</button>
                            </div>
                            <div  className="closeButton">
                                <em  className="icon-iconcross"></em>
                            </div>
                        </div>
                    </div>
                    <div className='download-btn icon-download-1'>
                        <div  className="download-list-wrap">
                            <ul  className="download-list">
                                <li  className="download-title">Download as:</li>
                                <li  className="download-option">png</li>
                                <li  className="download-option">pdf</li>
                            </ul>
                        </div>
                        <div className="tutorialBox">
                            <h3>Download prototype</h3>
                            <p>Have it ready on your device, anytime.</p>
                            <div  className="dots">
                                <span></span>
                                <span ></span>
                                <span ></span>
                                <span ></span>
                                <span  className="active"></span>
                            </div>
                            <div  className="buttons">
                                <button  className="backButton" type="button">Back</button>
                                <button className="nextButton" type="button">Finish</button>
                            </div>
                            <div  className="closeButton">
                                <em  className="icon-iconcross"></em>
                            </div>
                        </div>
                    </div>
                    <div  className="custom-btn">
                        <span  className="txt" onClick={this.showPop}>Tailor-made prototype</span>
                    </div>
                    <div className='signin-wrap'>
                        <div className='center-align' style={{marginRight:'20px'}}>
                            <div  className="signin-done">
                                <span  className="profile-pic">
                                    <span  className="txt">A</span>
                                </span>
                                <span  className="caret icon-caret-down"></span>
                                <span  className="caret icon-caret-up"></span>
                            </div>
                            <div  className="profile-options" >
                                <div  className="details-wrap">
                                    <span  className="profile-pic">
                                        <span  className="txt">A</span>
                                    </span>
                                    <AuthContext.Consumer>
                                        {
                                            (props)=>{
                                                return(
                                                    <div  className="details">
                                                        <p  className="name">{props.auth.auth.name}</p>
                                                        <p  className="email">arpitatiwari309@gmail.com</p>
                                                    </div>
                                                )
                                            }
                                        }
                                    </AuthContext.Consumer>
                                    
                                </div>
                                <ul  className="options">
                                    <li  className="option-entity">Go to ideaboard</li>
                                    <li  className="option-entity">Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               <div  className={`commentPanel highlight-off ${this.state.showComments?'active':''}`}>
                   <h3  className="title">Comments </h3>
                   <span  className="cancel icon-iconcross" onClick={this.showComments}></span>
                   <div  className="commentPanelInner">
                       <perfect-scrollbars >
                           <div style={{position: 'static'}} className="ps">
                               <div className="ps-content">
                                   <div  className="comment-list"></div>
                                </div>
                            </div>    
                       </perfect-scrollbars>
                       <div  className="no-comment-wrap ng-star-inserted">
                           <div  className="no-comment">
                               <span  className="icon"></span>
                               <h3 >No Comment Yet</h3>
                               <p >Tap on screen to add or view a comment</p>
                            </div>
                        </div>
                    </div>
                </div>
               <div style={{touchAction: 'none',userSelect: 'none',webkitUserDrag: 'none',webkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                   
                   {this.state.sharePop?<div className='share-overlay'>
                       <div className='share-wrap'>
                            <span  className="close-icon"><em  className="icon-iconcross" onClick={this.showShare}></em></span>
                            <h3  className="share-heading">Share Prototype</h3>
                            <div className='shareNav'>
                            <ul class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <li><a class="nav-item nav-link tabname active" id="nav-email-tab" data-toggle="tab" href="#nav-email" role="tab" aria-controls="nav-email" aria-selected="false">Email</a></li>
                                <li><a class="nav-item nav-link tabname" id="nav-shareLink-tab" data-toggle="tab" href="#nav-shareLink" role="tab" aria-controls="nav-shareLink" aria-selected="false">Share Link</a></li>
                                <li><a class="nav-item nav-link tabname" id="nav-socialShare-tab" data-toggle="tab" href="#nav-SocialShare" role="tab" aria-controls="nav-SocialShare" aria-selected="false">Social Share</a></li>
                                <li> <a class="nav-item nav-link tabname" id="nav-embed-tab" data-toggle="tab" href="#nav-embed" role="tab" aria-controls="nav-embed" aria-selected="false">Embed</a></li>
                            </ul>
                            <div class="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-email" role="tabpanel" aria-labelledby="nav-email">
                                    <app-tab  tabtitle="Embed">
                                        <div  className="pane">
                                            <div className='content-wrap'>
                                                <h3  className="content-heading">Share via Email &amp; SMS</h3>
                                                <p  className="content-desc">Send your prototype link directly to any email and phone.</p>
                                                <div  className="email-msg-tabs">
                                                    <div  className={`email-msg-tab email-tab ${this.state.mail?'active':''}`}>
                                                        <span  className="icon-mail" onClick={this.viewMail}></span>
                                                    </div>
                                                    <div  className={`email-msg-tab msg-tab ${this.state.mail?'':'active'}`}>
                                                        <span  className="icon-phonescreen" onClick={this.viewMail}></span>
                                                    </div>
                                                </div>
                                                <div className='email-wrap'>
                                                    <div className={`multi-email-wrap ${this.state.mail?'':'hidden'}`}>
                                                        <perfect-scrollbars>
                                                            <div className='ps' style={{position:'static'}}>
                                                                <div className="ps-content">
                                                                    <div  className="multi-emails">
                                                                        <tag-input  maxitems="10" placeholder="Enter your Email" secondaryplaceholder="Enter your Email" separatorkeycodes="[9,13]" separatorkeys="[',']" _nghost-ksd-c36="" class="ng-tns-c36-0 ng-untouched ng-pristine ng-valid" tabindex="">
                                                                            <div  className="ng2-tag-input prototype-theme" tabindex="-1">
                                                                                <div  className="ng2-tags-container">
                                                                                    <tag-input-form  className="ng-tns-c36-0">
                                                                                        <form  novalidate="" className="ng-untouched ng-pristine ng-valid">
                                                                                            <input  autocomplete="off" className="ng2-tag-input__text-input ng-untouched ng-pristine ng-valid" formcontrolname="item" minlength="1" type="text" tabindex="" placeholder="Enter your Email" aria-label="Enter your Email"></input>
                                                                                        </form>
                                                                                    </tag-input-form>
                                                                                </div>
                                                                            </div>
                                                                        </tag-input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </perfect-scrollbars>
                                                    </div>
                                                    <international-phone-number  name="mobileNumber" placeholder="Enter phone number"   required="" maxlength="20" >
                                                        <div  className={`input-group ${this.state.mail?'hidden':''}`}>
                                                            <span  className="input-group-addon flagInput">
                                                                <div  className="dropdown">
                                                                    <button  className="dropbtn btn" type="button">
                                                                        <span  className="flag flag-in ng-star-inserted" onClick={this.showDropdown}></span>
                                                                        <span  className="arrow-down" ></span>
                                                                    </button>
                                                                    {this.state.dropdown?<Dropdown/>:null}
                                                                </div>
                                                            </span>
                                                            <input className="form-control ng-untouched ng-pristine ng-star-inserted ng-valid" onlynumber="true" required="" maxlength="20" placeholder="Enter phone number" type="text"></input>
                                                        </div>
                                                    </international-phone-number>
                                                    <button  className="email-btn" disabled="true">
                                                        <span  className="btn-txt-normal ng-star-inserted">Send Mail</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </app-tab>
                                    <div  className="passwordSet">
                                        <h3>Password protect it <span></span></h3>
                                    </div>
                                </div>
                                <div class="tab-pane fade " id="nav-shareLink" role="tabpanel" aria-labelledby="nav-shareLink">
                                    <div  className="pane">
                                            <app-link-share>
                                                <div  className="content-wrap">
                                                    <h3  className="content-heading">Your project sharing URL</h3>
                                                    <p  className="content-desc">Copy and paste the link below into emails, chats or browsers.</p>
                                                    <div className="link">
                                                        <input  className="link-txt" disabled=""></input>
                                                        <button  className="link-btn">
                                                            <span  className="btn-txt-normal">Copy Link</span>
                                                            <span  className="btn-txt-success">Link copied</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </app-link-share>
                                            <div className="passwordSet">
                                                <h3>Password protect it <span></span></h3>
                                            </div>
                                        </div>
                                </div>
                                <div class="tab-pane fade" id="nav-SocialShare" role="tabpanel" aria-labelledby="nav-socialShare">
                                <div className='pane'>
                                        <app-social-share>
                                            <div className='content-wrap'>
                                                <h3  className="content-heading">Share protoype on Social media and IM’s</h3>
                                                <p  className="content-desc">Click on any of the social platform and share the prototype</p>
                                                <share-buttons>
                                                    <div className='sb-group sb-default'>
                                                        <share-button  className="sb-button sb-default">
                                                            <button  className="sb-wrapper sb-facebook sb-show-icon sb-show-text" aria-label="Share on Facebook" style={{buttonColor:'#4267B2', fontSize: '15.4px'}}>
                                                                <div  className="sb-inner">
                                                                    <div  className="sb-content">
                                                                        <div  className="sb-icon ">
                                                                            <fa-icon  className="ng-fa-icon">
                                                                                <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10 fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                                                                </svg>
                                                                            </fa-icon>
                                                                        </div>
                                                                        <div  className="sb-text ng-star-inserted"> Facebook </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </share-button>
                                                        <share-button   className="sb-button sb-default ng-star-inserted">
                                                            <button  className="sb-wrapper sb-twitter sb-show-icon sb-show-text" aria-label="Share on Twitter" style={{"--button-color":"#00acee", fontSize: "15.4px",marginLeft:'10px'}}>
                                                                <div className="sb-inner">
                                                                    <div  className="sb-content">
                                                                        <div className="sb-icon ng-star-inserted">
                                                                            <fa-icon  className="ng-fa-icon">
                                                                                <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16 fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                                                </svg>
                                                                            </fa-icon>
                                                                        </div>
                                                                        <div  className="sb-text ng-star-inserted"> Twitter </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </share-button>
                                                        <share-button  className="sb-button sb-default ng-star-inserted">
                                                            <button  className="sb-wrapper sb-linkedin sb-show-icon sb-show-text" aria-label="Share on LinkedIn" style={{"--button-color":"#006fa6", fontSize: '15.4px',marginLeft:'10px'}}>
                                                                <div  className="sb-inner">
                                                                    <div  className="sb-content">
                                                                        <div  className="sb-icon ng-star-inserted">
                                                                            <fa-icon  className="ng-fa-icon">
                                                                                <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                                                </svg>
                                                                            </fa-icon>
                                                                        </div>
                                                                        <div  className="sb-text ng-star-inserted"> LinkedIn </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </share-button>
                                                        <share-button  className="sb-button sb-default ng-star-inserted">
                                                            <button  className="sb-wrapper sb-whatsapp sb-show-icon sb-show-text" aria-label="Share on WhatsApp" style={{"--button-color":"#25D366", fontSize: "15.4px",marginTop:'10px'}}>
                                                                <div  className="sb-inner">
                                                                    <div  className="sb-content">
                                                                        <div  className="sb-icon ng-star-inserted">
                                                                            <fa-icon  className="ng-fa-icon">
                                                                                <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" class="svg-inline--fa fa-whatsapp fa-w-14 fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                                    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                                                                </svg>
                                                                            </fa-icon>
                                                                        </div>
                                                                        <div  className="sb-text ng-star-inserted"> WhatsApp </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </share-button>
                                                        <share-button  className="sb-button sb-default ng-star-inserted">
                                                            <button  className="sb-wrapper sb-telegram sb-show-icon sb-show-text" aria-label="Share on Telegram" style={{"--button-color":"#0088cc", fontSize: "15.4px",marginLeft:'10px',marginTop:'10px'}}>
                                                                <div  className="sb-inner">
                                                                    <div  className="sb-content">
                                                                        <div  className="sb-icon ng-star-inserted">
                                                                            <fa-icon  className="ng-fa-icon">
                                                                                <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" class="svg-inline--fa fa-telegram-plane fa-w-14 fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                                    <path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                                                                                </svg>
                                                                            </fa-icon>
                                                                        </div>
                                                                        <div  className="sb-text ng-star-inserted"> Telegram </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </share-button>
                                                    </div>
                                                </share-buttons>
                                            </div></app-social-share>
                                            <div  className="passwordSet">
                                                <h3>Password protect it 
                                                    <span ></span>
                                                </h3>
                                            </div>
                                        </div>
                                </div>
                                <div className="tab-pane fade" id="nav-embed" role="tabpanel" aria-labelledby="nav-embed">
                                    <app-tab  tabtitle="Embed">
                                        <div  className="pane">
                                            <app-embed-share>
                                                <div  className="content-wrap">
                                                    <h3  className="content-heading">Embed your project into any website or blog</h3>
                                                    <p  className="content-desc">Showcase your prototype on any website using this below code</p>
                                                    <div  className="embed">
                                                        <input  className="embed-txt" disabled="true"></input>
                                                        <button  className="embed-btn">
                                                            <span  className="btn-txt-normal">Copy Code</span>
                                                            <span  className="btn-txt-success">Code copied</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </app-embed-share>
                                        </div>
                                    </app-tab>
                                </div>
                            </div>
                                
                            </div>
                       </div>
                   </div>:''}
               </div>
            {this.state.showPop?<Popup close={this.showPop}/>:null}
            </React.Fragment>
            
        )
    }
}
export default ProtoHeader;