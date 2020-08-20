import React from 'react'
import './homepageBottombar.css'
import {Link} from 'react-router-dom'
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
        return(
            <div  className={`newHomeFooterbar ${this.state.hideBottom?'hideBottomPipe':''}`}>
				<div  className="bottomSelectFeature-toggle" onClick={this.hideBottom}></div>
				<div  className="leftSide">
					<h3>Let’s Go!</h3>
					<p>You selected <span>{this.props.activeApps.length} similar apps</span></p>
				</div>
				<div  className="rightSide">
                    <div  className="viewAll"><Link to={{pathname:'/features',
                state:this.props.activeApps}}  style={{color:'white'}}>Get Started</Link> </div>
				</div>
			</div>
        )
    }
}
export default BottomBar;