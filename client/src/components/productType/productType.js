import React from 'react'
import './productType.css'
import Slider from '../slider/slider'
import axios from 'axios'
class SliderParent extends React.Component {
	constructor(props){
		super(props)
		
	}
	
	render() {
		
  
		
		return (
			<div className='parent'>
				<Slider>
					{this.props.details.map(value => {
						return (
							<div key={value} className='child'>
								<div className='productType' style={{backgroundColor:`${value.background_color}`}}>
									<h3>{value.title}</h3>
									<p>{value.description} </p>
									<span> <input type='checkbox' className='check'></input><img className='img1' width="70" height="70" alt="" src={value.icon_url}></img></span>
									
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}
export default SliderParent;


