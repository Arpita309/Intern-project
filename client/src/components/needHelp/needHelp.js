import React from 'react'
import './needHelp.css'

class NeedHelp extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    
    render(){
        return(
            <div className="requestDemo requestDemo2">
                <div className="text text-uppercase need-help">
                    <span className="showDesktopOnly"> Get help with my project </span>
                    <span className="showMobileOnly"> Need Help</span>
                    <div className="needhelpdroupdown">
                        <ol>
                            <li>
                                <div className="user-icon-box"><em class="icon-newsales"></em></div>
                                <div className="user-txt"> Want a demo? <span class="bold-detail"> Talk to Sales <span> (Free) </span></span></div>
                            </li>
                            <li>
                                <div className="user-icon-box"><em className="icon-newexpert"></em></div>
                                <div className="user-txt"> Want help with specing? <span class="bold-detail"> Talk to Expert <span> (Refundable)</span></span></div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default NeedHelp;