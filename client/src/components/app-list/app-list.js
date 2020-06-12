import React from 'react'
import './app-list.css'
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Loader from '../questionSectionLoader/loaderbox'
class AppList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            isLoading:true,
            times:6,
            checkId:''
        }
    }
    componentDidMount() {
        
        axios.get(`http://localhost:4000/applications`)
          .then(res => {
            const data = res.data;
            this.setState({data,isLoading:false });
          })
          
          
      }
      handleChange=(e,id)=>{
          this.setState({checkId:id})
          
      }
    render(){
        
    return(
        
        <div className='app-list'>
            <div className='sectionContent'>
                
                <div className='leftside'>
                    <h3>Try selecting similar apps to your idea. <img _ngcontent-serverapp-c118="" src="https://studio.builder.ai/assets/images/smile1.png" width="37" height="38" alt=""></img></h3>
                    <p >This will allow us to understand your idea better.</p>

                </div>
                <div className='rightSide'>
                    <div className='searchApps'>
                    <input  type="text" placeholder="Search more apps..." ></input>
                    <em><i class="fa fa-search" aria-hidden="true"></i></em>
                    </div>
                    <div className='viewAllApps'>
                        <em><i class="fa fa-chevron-right" aria-hidden="true"></i></em>
                        <Link to='/apps' style={{color:'white'}}>View All</Link>
                    </div>
                </div>
            </div>
            {this.state.isLoading?<Loader times={this.state.times}/>:
            <div className='appListRow'>
            {this.state.data.map(value=>{
                
                   return(value.section_details.map(info=>{
                       
                                return(
                                    <div  key={info.id} className={`appListBox ${this.state.checkId==info.id?'active':''}`}>
                                    <h3>{info.title}</h3>
                                    <p>{info.description}</p>
                                    <div  className="tickBox" id={info.id} onClick={e=>this.handleChange(e,info.id)}></div>
                                    <img  width="96" height="96" alt="" src={info.icon}></img>
                                    
                                    <div className='appListFooter'>
                                
                                        <div>
                                            <div className='appPrice'>
                                                <span >Price</span>
                                                <strong >₹548 K</strong>
                                            </div>
                                            <a  target="_blank" class="btn apps-detailbtn" href={`http://localhost:3000/apps/${info.title}`}> View Details </a>
                                        </div>
                                    </div>
                                </div>
                                )
                   })
                    
                   )
                })}
                </div>}
                {/*<div className='appListBox'>
                   <h3>Snapchat</h3>
                   <p>Offer multimedia sharing and messaging between users. These interactions are only available for a short time, making it ideal for fast and instant communication.</p>
                   <span> <input type='checkbox' className='tickBox'></input><img  width="96" height="96" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/app_builder_icon/57e0aff95cba2a27d6af2798/snapchat_1.svg"></img></span>
                   
                   <div className='appListFooter'>
                   
                       <div>
                            <div className='appPrice'>
                                <span >Price</span>
                                <strong >₹696 K</strong>
                            </div>
                            <a  target="_blank" class="btn apps-detailbtn" href="http://localhost:3000/apps/Snapchat"> View Details </a>
                       </div>
                   </div>
                </div>
                <div className='appListBox'>
                   <h3>Quora</h3>
                   <p >A Q&amp;A site where members can ask questions and get answers on different topics.</p>
                   <span> <input type='checkbox' className='tickBox'></input><img  width="96" height="96" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/app_builder_icon/5855c8045cba2a5441cce8c8/Quora1.svg"></img></span>
                   
                   <div className='appListFooter'>
                  
                       <div>
                            <div className='appPrice'>
                                <span >Price</span>
                                <strong >₹394 K</strong>
                            </div>
                            <a  target="_blank" class="btn apps-detailbtn" href="http://localhost:3000/apps/Quora"> View Details </a>
                       </div>
                   </div>
                </div>
                <div className='appListBox'>
                   <h3>WeChat</h3>
                   <p>Messaging, social media and payments communication service. Users can chat, make calls, play games and make mobile payments.</p>
                   <span> <input type='checkbox' className='tickBox'></input><img  width="96" height="96" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/app_builder_icon/5855ca765cba2a5441cce8da/wechat_1.svg"></img></span>
                   
                   <div className='appListFooter'>
                  
                       <div>
                            <div className='appPrice'>
                                <span >Price</span>
                                <strong >₹491 K</strong>
                            </div>
                            <a  target="_blank" class="btn apps-detailbtn" href="http://localhost:3000/apps/WeChat"> View Details </a>
                       </div>
                   </div>
                </div>
                <div className='appListBox'>
                   <h3>Facebook</h3>
                   <p>Social media and networking platform. Includes photo and video sharing, group creation, events pages, fundraising campaigns, entertainment, video, a marketplace and more.</p>
                   <span> <input type='checkbox' className='tickBox'></input><img  width="96" height="96" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/app_builder_icon/57e0aff95cba2a27d6af2797/facebook-icon_1.svg"></img></span>
                   
                   <div className='appListFooter'>
                   
                       <div>
                            <div className='appPrice'>
                                <span >Price</span>
                                <strong >₹907 K</strong>
                            </div>
                            <a  target="_blank" class="btn apps-detailbtn" href="http://localhost:3000/apps/Facebook"> View Details </a>
                       </div>
                   </div>
                </div>
                <div className='appListBox'>
                   <h3>Tinder</h3>
                   <p>A platform where singles can meet each other, engage in conversation and set up dates.</p>
                   <span> <input type='checkbox' className='tickBox'></input><img  width="96" height="96" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/app_builder_icon/57e0aff95cba2a27d6af2792/tinder-2_1.svg"></img></span>
                   
                   <div className='appListFooter'>
                   
                       <div>
                            <div className='appPrice'>
                                <span >Price</span>
                                <strong >₹374 K</strong>
                            </div>
                            <a  target="_blank" class="btn apps-detailbtn" href="http://localhost:3000/apps/Tinder"> View Details </a>
                       </div>
                   </div>
                </div>
            </div>*/}

        </div>
    )}
}

export default AppList;