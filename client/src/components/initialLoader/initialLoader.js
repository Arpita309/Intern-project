import React from 'react'
import './initialLoader.css'
const InitialLoader=()=>{
    return(
        <React.Fragment>
            <div className="pageLoaderBox"><div className="pageLoader"></div><div className="loadingOverlay"></div></div>
            <div className="initialLoader">
                <div className="homeLoader"></div>
                <div className="loadingOverlay"></div>
            </div>

        </React.Fragment>
        
    )
}
export default InitialLoader;