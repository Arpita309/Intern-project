import React from 'react'
import './carousel.css'
const imgUrls = [
	"https://duj87royd3ze0.cloudfront.net/uploads/application/mobile_cover_image/5c5013941f0c643d17336ed1/vlc_mobile.png", 
	"https://duj87royd3ze0.cloudfront.net/uploads/application/web_cover_image/5c5013941f0c643d17336ed1/vlc_desktop.png"
	
	
];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className='appdetailImg'>
                <div className='appdetailSlider'>
                
                <drag-scroll _ngcontent-serverapp-c130="" class="sliderHeight" _nghost-serverapp-c112="" style={{pointerEvents: "auto"}}>
                    <div _ngcontent-serverapp-c112="" class="drag-scroll-content" drag-scroll="true" style={{display: "block", whiteSpace: "nowrap", width: "100%", height: "calc(100% + 20px)"}}>
                        <div _ngcontent-serverapp-c130="" drag-scroll-item="" class="appdetailSlide" style={{display: "inline-block"}}>
                            <img _ngcontent-serverapp-c130="" alt="" src={imgUrls[this.state.currentImageIndex]}></img>
                        </div>
                        
                    </div>
                </drag-scroll>
                <button  type="button" class="dragbutton leftArrow" direction='left' onClick={this.previousSlide}>
                    <em _ngcontent-serverapp-c130="" class="icon-prev"></em>
                </button>
                <button _ngcontent-serverapp-c130="" type="button" class="dragbutton rightArrow" direction='right' onClick={this.nextSlide}>
                    <em _ngcontent-serverapp-c130="" class="icon-next"></em>
                </button>
				
                
				
				
                </div>
			</div>
		);
	}
}
export default Carousel;




