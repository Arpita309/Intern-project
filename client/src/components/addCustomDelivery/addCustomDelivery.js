import React from 'react'
import'./addCustomDelivery.css'

class AddCustom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.count)
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
                </div>
            
        )
    }
}
export default AddCustom;