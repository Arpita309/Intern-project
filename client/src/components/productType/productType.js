import React from 'react'
import './productType.css'
import Slider from '../slider/slider'

class SliderParent extends React.Component {
	render() {
  let data = [
	  {heading3:'Mobile Apps',
	   bgcolor:'#00a0f6',
       p:'Ease your app-building experience by choosing from our list of common mobile features.',
	   src:'https://duj87royd3ze0.cloudfront.net/uploads/mobile_web_app/icon/5901dd3a14c49f455d14bc0b/mobile.png'},
	   {heading3:'Web',
	   bgcolor:'rgb(97, 208, 53)',
       p:'Choose from a list of pre-existing website models to create your own magic.',
	   src:'https://duj87royd3ze0.cloudfront.net/uploads/mobile_web_app/icon/5901dd3a14c49f455d14bc0c/web.png'},
	   {heading3:'Marketplace',
	   bgcolor:' rgb(139, 76, 247)',
       p:'Help buyers and sellers transact in real time.',
	   src:'https://duj87royd3ze0.cloudfront.net/uploads/mobile_web_app/icon/59376c3514c49f5759f8cd9a/marketplace.png'},
	   {heading3:'Ecommerce',
	   bgcolor:'rgb(245, 172, 66)',
       p:'Launch your own e-commerce platform from our wealth of pre-built features.',
	   src:'https://duj87royd3ze0.cloudfront.net/uploads/mobile_web_app/icon/59d63e68f6fa5349bbab560e/ecommerce.png'},
	   {heading3:'Wearables',
	   bgcolor:'rgb(77, 185, 198)',
       p:'Select from a list of watch-specific features to tap into the self-connected world.',
	   src:'https://duj87royd3ze0.cloudfront.net/uploads/mobile_web_app/icon/5901dd3a14c49f455d14bc0d/wearables.png'},
	   {heading3:'Something else',
	   bgcolor:'#00a0f6',
       p:'Looking to build something we didn’t lay out here? Just tell us and we’ll take care of the rest.',
       src:'https://duj87royd3ze0.cloudfront.net/uploads/custom_app/icon/5915864714c49f3bda426a10/somethingelse.png'},
			
			
		];
		return (
			<div className='parent'>
				<Slider>
					{data.map(value => {
						return (
							<div key={value} className='child'>
								<div className='productType' style={{backgroundColor:`${value.bgcolor}`}}>
									<h3>{value.heading3}</h3>
									<p>{value.p} </p>
									<span> <input type='checkbox' className='check'></input><img className='img1' width="70" height="70" alt="" src={value.src}></img></span>
									
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


