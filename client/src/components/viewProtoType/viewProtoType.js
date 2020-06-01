import React from 'react'
import './viewPrototype.css'

class ProtoTypeButton extends React.Component{
    render(){
        return(<div className="requestDemo view-proto hidden-xs">
            <div className="text">
                <span><em class="right-tringle"></em></span> View Prototype 
            </div></div>)
    }
}
export default ProtoTypeButton;