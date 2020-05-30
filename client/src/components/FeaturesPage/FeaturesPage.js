import React from 'react'
import './FeaturePage.css'
import Left from '../appFeaturesLeft/appFeaturesLeft'
import Right from '../appFeaturesRight/appFeaturesRight'
class Features extends React.Component{
    render(){
        return(
        <div className='wrapper'>
            <div className='middlePart'>
            <div className='featureStudio'>
                <Left/>
                <Right/>
            </div>
            </div>

        </div>
        )
    }
}
export default Features;