import React from 'react'
import'./addCustomDelivery.css'
import Slider from '@material-ui/core/Slider';
const useStyles = theme => ({
    root: {
      width: 250,
      
    },
    rail:{
        color:'#00c853'
    }
  });
class AddCustom extends React.Component{
    constructor(props){
        super(props)
        this.state={slider:''}
    }
    render(){
        const classes = useStyles();     
    
        const marks = [
        {
          value: 0,
          label: 'relaxed',
        }
      ]; 
      function valuetext(value) {
          return `${value}`;
          
        }
        const handleSliderChange = (event, newValue) => {
          this.setState({slider:newValue});
      
        };
        console.log(this.props.advance)
        return(
            
                <div className="phasesBox New-theme active" style={{display: 'inline-block'}}>
                    <div  className="phasesHead">
                        <h3>
                            <div  className="phaseIcon"><img  src="https://studio.builder.ai/assets/images/star.png" alt=""></img></div>
                            <strong>New phase {this.props.count}</strong>
                        </h3>
                       
                        <div  className="mobileDate">
                            <strong >Delivered by</strong>
                            <span> 17 August 2020 </span>
                            <span ></span>
                        </div>
                        <div  className="checkBox">
                            <input  type="checkbox" id="phaseSelected5"></input>
                            <label  htmlFor="phaseSelected5"></label>
                        </div>
                    </div>
                    <div  className="featureSection">
                        <h3 >Features </h3>
                        <button  type="button" className="buttonStyle">Select Features</button>
                    </div>
                    <div  className="platformSection">
                        <ul></ul>
                        <button  type="button" className="buttonStyle">Select Platforms</button>
                    </div>
                    {this.props.advance?<div className='speedSection'>
                           <h3 >Working Speed</h3>
                           <div className='speedSlider'>
                           <div className='rangeSlider'>
                                                    <div className={classes.root}>
                                                    
                                                        
                                                        <Slider
                                                            color={"secondary"}
                                                            
                                                            
                                                            onChange={handleSliderChange}
                                                            defaultValue={0-500}
                                                            getAriaValueText={valuetext}
                                                            aria-labelledby="discrete-slider-custom"
                                                            
                                                           step={20}
                                                            marks={marks}
                                                        />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>:''}
                </div>
            
        )
    }
}
export default AddCustom;