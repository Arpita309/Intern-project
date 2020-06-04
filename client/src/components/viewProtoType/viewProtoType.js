import React from 'react'
import './viewPrototype.css'

class ProtoTypeButton extends React.Component{
    render(){
        return(<div className="requestDemo view-proto hidden-xs">
            <div className="text">
                <span><em class="right-tringle"></em></span><a href="http://localhost:3000/welcome" style={{color:'#f02397'}}>View Prototype 
                    </a> 
            </div></div>)
    }
}
export default ProtoTypeButton;