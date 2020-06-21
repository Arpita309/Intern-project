 import React from 'react'

 export let auth={}

 class Authentication extends React.Component{
     constructor(props){
         super(props)
         this.state={
             auth:{}
         }
     }
    
     render(){
        this.state.auth=this.props.data
        auth=this.state.auth
        console.log(auth)
         return(<div>

         </div>)
     }
 }
 export default Authentication
 console.log(auth)
 