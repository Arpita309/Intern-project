import React from 'react'
import './buildcardHeader.css'
import ProtoTypeButton from '../viewProtoType/viewProtoType'

const Header =()=>{
    return(
       <nav id='header'>
           <div className='container-fluid'>
               <div className='row'>
                    <div className="logo">
                        <a><img width="107" height="26" alt="" className="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                        <a><img width="26" height="35" alt="" class="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                    </div>
                    <div style={{marginLeft:'800px'}}>
                    <ProtoTypeButton />
                    </div>
                    
               </div>
           </div>
       </nav>
    )
}
export default Header;