import React from 'react'
import './featuresCarousel.css'
import { mobileData,carouselDescription } from '../featuresdb/featuresdb';
let id=''
let selected=mobileData.filter((value)=>{
    return value.id.indexOf(id)!==-1
})
class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
            currentImageIndex: 0,
            data:mobileData,
            Description:carouselDescription,
		};
		
		this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        
	}
	
   
	previousSlide () {
		const lastIndex = this.state.data.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
        });
        selected=[]
        this.props.selectedImg(this.state.data[this.state.currentImageIndex].id)
    
	}
	
	nextSlide () {
		const lastIndex = this.state.data.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        selected=[]
		this.setState({
			currentImageIndex: index
        });
        this.props.selectedImg(this.state.data[this.state.currentImageIndex].id)
    }
    componentDidMount(){
        let selectedDescription=this.state.Description.filter((value)=>{
            return value.id.indexOf(this.state.data[this.state.currentImageIndex].id)!==-1})
        this.props.selectedImg(this.state.data[this.state.currentImageIndex].id,selectedDescription)
        
    }
    componentDidUpdate(){
        selected=[]
    }
    
    
	
	render () {
        id=this.props.id;
        console.log(selected)

        
		return (
            <React.Fragment>
			<div className="iphonePrev">
                <div className="phoneScreen">
                    
                    {selected.length!==1?<img className="active animation1" src={this.state.data[this.state.currentImageIndex].img} ></img>:<img src={selected[0].img}></img>}
                </div>
            </div>
            <div className="iphoneNav">
                <button type="button" className="prevButton" onClick={this.previousSlide}><em class="icon-leftarrow" ></em></button>
                <button type="button" class="nextButton" onClick={this.nextSlide}><em class="icon-rightarrow"></em></button>
            </div>
            </React.Fragment>             
                        
				
                
				
				
               
		);
	}
}
export default Carousel;




