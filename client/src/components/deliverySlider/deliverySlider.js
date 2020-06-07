import React from 'react'
import './deliverySlider.css'
class SliderComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prevDisable: true,
			nextDisable: this.refs && this.refs.offsetWidth >= this.refs.scrollWidth ? true : false
		};
	}

 componentDidMount() {
  this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
 }
	checkButtons = (offsetWidthValue, scrollWidthValue) => {
		this.setState({
			prevDisable: this.refs.scrollLeft <= 0 ? true : false,
			nextDisable: this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue ? true : false
		});
	};

	render() {
		const offsetWidthValue = this.refs.offsetWidth,
			scrollWidthValue = this.refs.scrollWidth;
		return (
			<div
				className='slider-container'
				ref={el => {
					this.refs = el;
				}}
			>
				<div className='slider-wrapper'>{this.props.children}</div>
				{/*<div
					className={`prevButton slideButton ${this.state.prevDisable ? 'disable' : ''}`}
					disabled={this.state.prevDisable}
					onClick={() => {
						this.refs.scrollLeft -= offsetWidthValue / 2;
						this.checkButtons(offsetWidthValue, scrollWidthValue);
					}}
				>
					{'<'}
				</div>*/}
                <button  type="button" className="prevButton slideButton"><em  className="icon-prev" onClick={() => {
						this.refs.scrollLeft -= offsetWidthValue / 2;
						this.checkButtons(offsetWidthValue, scrollWidthValue);
					}}></em></button>
				{/*<div
					className={` ${this.state.nextDisable ? 'disable' : ''}`}
					disabled={this.state.nextDisable}
					onClick={() => {
						this.refs.scrollLeft += offsetWidthValue / 2;
						this.checkButtons(offsetWidthValue, scrollWidthValue);
					}}
				>
					{'>'}
				</div>*/}
                <button  type="button" className="nextButton slideButton"><em  className="icon-next" onClick={() => {
						this.refs.scrollLeft += offsetWidthValue / 2;
						this.checkButtons(offsetWidthValue, scrollWidthValue);}}></em></button>
			</div>
		);
	}
}
export default SliderComponent;