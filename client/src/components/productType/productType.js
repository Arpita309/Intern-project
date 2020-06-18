import React from 'react'
import './productType.css'
import Slider from '../slider/slider'
import axios from 'axios'
import BottomBar from '../homepageBottombar/homepageBottombar'
class SliderParent extends React.Component {
	constructor(props){
		super(props)
		this.state={
			checkId:'',
			hideBottom:false
		}
		
	}
	handleChange=(e,id)=>{
		this.setState({checkId:id})
		
	}
	
	
	render() {
	
  
		
		return (
		<React.Fragment>
			<div className='parent'>
				<Slider>
					{this.props.details.map(value => {
						
						return (
							<div key={value._id} className='child'>
								<div className={`productType ${this.state.checkId==value._id?'active':''}`} style={{backgroundColor:`${value.background_color}`}} id={value._id} onClick={e=>this.handleChange(e,value._id)}>
									<h3>{value.title}</h3>
									<p>{value.description} </p>
									<span><img className='img1' width="70" height="70" alt="" src={value.icon_url}></img></span>
									
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
			{this.state.checkId?<BottomBar section='productType' activeProduct={this.state.checkId}/>:''}
			</React.Fragment>
		);
	}
}
export default SliderParent;


