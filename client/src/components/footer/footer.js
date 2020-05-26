import React from 'react'
import './footer.css'
const Footer =()=>{
    return (<div id='footerArea'>
    <div className='container'>
        <div className='row'>
        <div className="col-xs-12 col-sm-4"><p><strong></strong> - Made with Love</p></div>
        <div className="col-xs-12 col-sm-3"><h6>copyright © Engineer.ai 2020</h6></div>
        <div className="col-xs-12 col-sm-5 pull-right">
            <div className="footerLinks">
                <ul>
                    <li>
                        <a target="_blank" href="https://www.engineer.ai/how-it-works">How It Works</a>
                    </li>
                    <li>
                        <a>Talk To Us</a>
                   </li>
                   <li><a target="_blank" href="https://www.engineer.ai/privacy-policy">Privacy</a></li>
                   <li><a target="_blank" href="https://www.engineer.ai/terms">Terms</a></li>
               </ul>
               </div>
           </div>
        </div>
    </div>

</div>)
}
export default Footer;