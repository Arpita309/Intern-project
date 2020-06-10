import React from 'react'
import './loaderbox.css'

class Loader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const list =[]
         for(var i=0;i<this.props.times ;i++){
            list.push(<div className="loaderBox">
            <img  src="https://studio.builder.ai/assets/images/bloader.gif" alt=""></img>
            </div>)
                
   }
    return(
        
        <div  className="bLoader">
             {list}
            </div>
    )}
}
export default Loader;