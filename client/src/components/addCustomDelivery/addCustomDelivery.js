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
                        {this.props.advance?'':<div  className="mobileDate">
                                <strong>Delivered by</strong>
                                <span >28 June 2020 </span>
                            </div>}
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
                            <h3>Platform <span>Change</span></h3>
                            <ul>
                                {this.props.platform.map(value=>
                                   <li><div  className="platformIcon"><img src={value}></img></div> iOS </li>
                                    )}
                                
                                
                            </ul>
                        </div>
                    {this.props.advance?<React.Fragment><div  className="featureSection">
                        <h3 >Features <span  className="">View</span></h3>
                        <p >26 Features Selected</p></div>
                    <div className='speedSection'>
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
                                <div  className="selectAll"><input  type="checkbox" id={`selectallsame${this.props.count+4}`}></input><label  htmlFor={`selectallsame${this.props.count+4}`}>Same speed for all the platforms</label></div>
                                </div>
                                <div  className="deliveryDate"><h3>
                                <strong >Delivered By</strong>
                                <span > 07 August 2020 </span></h3></div>
                                </React.Fragment>:''}
                </div>
            
        )
    }
}
export default AddCustom;