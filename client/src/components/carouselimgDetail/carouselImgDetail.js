import React from 'react'
import './carouselImgDetail.css'
let imgUrls=[]

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0,
			imgUrls:[]
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	componentDidMount(){
		this.setState({imgUrls:this.props.images})
	}
	previousSlide () {
		const lastIndex = this.state.imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = this.state.imgUrls.length - 1;
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
                
                <div  className="sliderHeight"  style={{pointerEvents: "auto"}}>
                    <div  className="drag-scroll-content" drag-scroll="true" style={{display: "block", whiteSpace: "nowrap", width: "100%", height: "calc(100% + 20px)"}}>
                        <div   className="appdetailSlide" style={{display: "inline-block"}}>
                            <img  alt="" src={this.state.imgUrls[this.state.currentImageIndex]}></img>
                        </div>
                        
                    </div>
                </div>
                <button  type="button" className="dragbutton leftArrow" direction='left' onClick={this.previousSlide}>
                    <em className="icon-prev"></em>
                </button>
                <button  type="button" className="dragbutton rightArrow" direction='right' onClick={this.nextSlide}>
                    <em  className="icon-next"></em>
                </button>
				
                
				
				
                </div>
			</div>
		);
	}
}
export default Carousel;




