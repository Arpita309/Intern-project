import React from 'react'
import './prototypeHeader.css'

class ProtoHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            name:'My builder project',
            mobile:true,
            showComments:false,
            sharePop:false
        }
        this.showInput=this.showInput.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this)
        
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
        this.setState({mobile:true})
    }
    setWebView=()=>{
        this.setState({mobile:false})
    }
    handleKeyDown(e){
        if (e.keyCode === 13 ) {
            this.setState({show:false,name:e.target.value})
        }
    }
    render(){
       
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
                        <span  className="txt">Tailor-made prototype</span>
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
                                    <div  className="details">
                                        <p  className="name">Arpita</p>
                                        <p  className="email">arpitatiwari309@gmail.com</p>
                                    </div>
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
                            <app-tabs className='shareNav'>
                                <ul  className="nav nav-tabs">
                                    <li  >
                                        <span  className="tabname">Email</span>
                                    </li>
                                    <li  className="active ">
                                        <span  className="tabname">Share Link</span>
                                    </li>
                                    <li  >
                                        <span  className="tabname">Social Share</span>
                                    </li>
                                    <li>
                                        <span className="tabname">Embed</span>
                                    </li>
                                </ul>
                                <app-tab  tabtitle="Share Link" >
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
                                </app-tab>
                                <app-tab tabtitle='Social Share'>
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
                                                                                <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="svg-inline--fa fa-facebook-f fa-w-10 fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                                                                </svg>
                                                                            </fa-icon>
                                                                        </div>
                                                                        <div  className="sb-text ng-star-inserted"> Facebook </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </share-button>
                                                    </div>
                                                </share-buttons>
                                            </div>
                                        </app-social-share>
                                    </div>

                                </app-tab>
                            </app-tabs>
                       </div>
                   </div>:''}
               </div>
            </React.Fragment>
            
        )
    }
}
export default ProtoHeader;