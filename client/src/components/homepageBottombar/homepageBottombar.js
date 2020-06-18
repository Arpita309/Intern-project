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
        const productType=this.props.section=='productType'?true:false
        const App=this.props.section=='App'?true:false
        const Ques=this.props.section=='question'?true:false
        const item=productType
        console.log(productType,App)
        return(
            <div  className={`newHomeFooterbar ${this.state.hideBottom?'hideBottomPipe':''}`}>
				<div  className="bottomSelectFeature-toggle" onClick={this.hideBottom}></div>
				<div  className="leftSide">
					<h3>Let’s Go!</h3>
					<p>You selected <span>{productType&&!App&&!Ques?'1 product type':[(productType&&App&&!Ques?'1 product type and 1 similar app':[(productType&&!App&&Ques?'1 product type and 1 similar app':[(!productType&&App&&!Ques?'1 similar app':[(!productType&&!App&&Ques?'4 similar apps':'')])])])]}</span></p>
				</div>
				<div  className="rightSide">
					<div  className="viewAll"><Link to={productType?'/apps':`/features/${this.props.checkId}`}  style={{color:'white'}}>Get Started</Link> </div>
				</div>
			</div>
        )
    }
}
export default BottomBar;