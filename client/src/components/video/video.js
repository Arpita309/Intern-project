import React from 'react'
import './video.css'
class Video extends React.Component{
    constructor(props){
        super(props);
        this.state={
            video:false
        }
        this.playVideo=this.playVideo.bind(this);
        this.closeVideo=this.closeVideo.bind(this);
    }
    playVideo=()=>{
        this.setState({video:true})
    }
    closeVideo=()=>{
        this.setState({video:false})
    }
    render(){
        return(
            <div className='diaplaySection' style={{order:'6'}}>
               <video-view>
                    <div className='videoSection'>
                        <div className='sectionContent'>
                            <h3>See with your own eyes.<img src='https://studio.builder.ai/assets/images/smile4.png' width='38' height='38'></img></h3>
                            <p>Watch this video to see how it all works.</p>
                        </div>
                        <div className='video-bx'>
                            <div className='showImg-bx'>
                                 <img  src="https://studio.builder.ai/assets/images/video-bg.png" width="1360" height="743" alt=""></img>
                                 <span className='custom-play'>
                                 <img onClick={this.playVideo} src="https://studio.builder.ai/assets/images/plat-button.svg" width="128" height="128" alt=""></img>
                                 </span>
                            </div>
                        </div>
                    </div>
                    <div  className={`commonPopUp ${this.state.video?'active':''}`}>
                        <div  className="popOverlay"></div>
                            <div  className="popHolder videoPopup">
                                <div  className="closePopUp">
                                    <span onClick={this.closeVideo} className="icon-cancel"></span>
                                </div>
                                <div  className="selectHeading"></div>
                                <div  className="middle-block">
                                    <iframe  width="560" height="315" frameborder="0" allowfullscreen="" allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/ZURrLesd0do"></iframe>
                                </div>
                            </div>
                    </div>  
               </video-view>
            </div>
        )
    }
}
export default Video;