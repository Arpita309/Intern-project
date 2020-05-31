import React from 'react'
import './FeaturePage.css'
import Left from '../appFeaturesLeft/appFeaturesLeft'
import Right from '../appFeaturesRight/appFeaturesRight'
import FeaturesHeader from '../featuresHeader/featuresHeader'
class Features extends React.Component{
    render(){
        return(
        <div className='wrapper'>
            <FeaturesHeader/>
            <div className='middlePart'>
            <div className='featureStudio'>
                <Left/>
                <Right/>
            </div></div>
            <div class="bottomSelectFeature">
                <div className='appBottomBar'>
                    <div className="priceBox">
                        <h3 >
                            <span>Installment</span> ₹34,931.00 / week <em ></em>
                        </h3>
                    </div>
                
                    <div  className="durationBox">
                        <h3>
                            <span>Duration</span> 24 weeks
                        </h3>
                    </div>
                    <div className="maxpriceBox">
                        <h3>
                            <span >Max Price</span>
                            <strong>₹8,38,352.00</strong>
                        </h3>
                        <div  className="phasebreakBox">
                            <div  className="phaseIcon">
                                <img alt="" src="https://studio.builder.ai/assets/images/info_blue.png"></img>
                            </div>
                            <div  className="phasebreakOverlay"></div>
                        </div>
                    </div>
                    <div  className="applyPromoBox">
                        <span className="promo-hd">Promotion </span>
                        <div  className="promo-container">
                            <img  src="https://studio.builder.ai/assets/images/promotion_icon.png" alt=""></img>
                            <button  type="button">Apply Promotion</button>
                        </div>
                    </div>
                    <div  className="previewBottom">
                        <div >
                            <button type="button" className="nextButton"> Plan Delivery </button>
                        </div>
                        <share-url-button  >
                            <button  type="button" className="shareUrl">
                                <em  class="icon-share-outline"></em>
                            </button>
                        </share-url-button>
                    </div>
                 </div>
            </div>

        </div>
        )
    }
}
export default Features;