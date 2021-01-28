import React from 'react'
import './homepageBottombar.css'
import {Link, Redirect} from 'react-router-dom'
import { ApiPost } from '../../api'
class BottomBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hideBottom:false
        }
    }
    hideBottom=()=>{
		this.setState({hideBottom:!this.state.hideBottom})
    }
   
    render(){
        const  postTemplates=()=>{
            let payload={templateId:this.props.activeApps}
            ApiPost('templates',payload)
            .then((res)=>{
                console.log(res.data)
           return(<Redirect to='/features'/>)})
        }
        return(
            <div  className={`newHomeFooterbar ${this.state.hideBottom?'hideBottomPipe':''}`}>
				<div  className="bottomSelectFeature-toggle" onClick={this.hideBottom}></div>
				<div  className="leftSide">
					<h3>Let’s Go!</h3>
					<p>You selected <span>{this.props.activeApps.length} similar apps</span></p>
				</div>
				<div  className="rightSide">
                    <div  className="viewAll" onClick={postTemplates}><Link to='/features'>Get Started</Link>  </div>
				</div>
			</div>
        )
    }
}
export default BottomBar;