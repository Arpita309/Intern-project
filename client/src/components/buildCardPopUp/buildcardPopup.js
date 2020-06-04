import React from 'react'
import './buildcardPopup.css'

const Popup=({h3,close})=>{
    return(
        <div className="commonPopUp active">
            <div className="popOverlay"></div>
            <div className="popHolder sharingPopup">
                <div className="closePopUp">
                    <span className="icon-cancel" onClick={close}></span>
                </div>
                <div className="sharingHead "> {h3}
                    <strong>My Builder Project</strong>
                </div>
                <div className="sharingmid">
                    <div className="emailCollect "></div>
                    <form novalidate="" role="form" className="ng-untouched ng-pristine ng-invalid">
                        <ul>
                            <li>
                                <input type="email" email="" placeholder="Enter email here and press enter" required="" name="email"  pattern="/^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"></input>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="footerButton">
                    <button className="cancleButton" onClick={close}>Cancel</button>
                    <button className="doneButton"> Done </button>
                </div>
            </div>
        </div>
    )
}
export default Popup;