import React from 'react'
import Slider from '../slider/slider'
import './appTrending.css'


class AppTrending extends React.Component{
    
        render() {
      let data = [
          {src:'https://duj87royd3ze0.cloudfront.net/uploads/application/icon/58f7132214c49f5e024bb20e/amz_icon2.svg',
           h3:'Amazon',
           p:'Online retailer and marketplace with a huge variety of products. Features include barcode scanning, user reviews, save and compare and order tracking. ',
           h41:'132',
           span1:'users building',
           h42:'67',
           span2:'features'},
           {src:'https://duj87royd3ze0.cloudfront.net/uploads/application/icon/57e0aff95cba2a27d6af2797/facebook-icon_1.svg',
           h3:'Facebook',
           p:'Social media and networking platform. Includes photo and video sharing, group creation, events pages, fundraising campaigns, entertainment, video, a marketplace and more.',
           h41:'456',
           span1:'users building',
           h42:'54',
           span2:'features'},
           {src:'https://duj87royd3ze0.cloudfront.net/uploads/application/icon/59fd1cfa88f3ac1f6e2d0c66/Flipkart.png',
           h3:'Flipkart',
           p:'Large-scale ecommerce platform offering a range of products with multiple filters, categories and options to buy and sell.',
           h41:'312',
           span1:'users building',
           h42:'30',
           span2:'features'},
           {src:'https://duj87royd3ze0.cloudfront.net/uploads/application/icon/57e0aff95cba2a27d6af2792/tinder-2_1.svg',
           h3:'Tinder',
           p:'A platform where singles can meet each other, engage in conversation and set up dates.',
           h41:'202',
           span1:'users building',
           h42:'22',
           span2:'features'},
           {src:'https://duj87royd3ze0.cloudfront.net/uploads/application/icon/5927e09514c49f0245b3762d/Accuweather1.png',
           h3:'Accuweather',
           p:'A leading weather forecast application. It keeps its users up-to-date with a host of weather readings for any part of the world.',
           h41:'96',
           span1:'users building',
           h42:'7',
           span2:'features'},
           {src:'https://duj87royd3ze0.cloudfront.net/uploads/application/icon/5855c87b5cba2a5441cce8ce/Airbnb.png',
           h3:'Airbnb',
           p:'Connects property owners and hosts who want to rent their homes with travellers and tourists looking for a place to stay.',
           h41:'176',
           span1:'users building',
           h42:'24',
           span2:'features'}
           
                
                
            ];
            return (
                
                    <div className='displaySection' style={{order:'3'}}>
                        <div className='trendingSection'>
                            <div className='sectionContent'>
                                <h3>What customers are thinking about building. <img src='https://studio.builder.ai/assets/images/smile2.png'></img></h3>
                                <p>Top trending apps in your region.</p>
                            </div>
                            <div className='trendingItemrow'> 
                                <div className='drag-scroll-content'style={{display: 'block', whiteSpace: 'nowrap', width: '100%', height: `calc(100% + 20px)`}}>
                                    <Slider>
                                        {data.map(value => {
                                            return (
                                                <div key={value} className='child'>
                                                    <div className='trendingItembox' style={{display:'inline-block'}}>
                                                        <div className='trendingItemImage'>
                                                            <img src={value.src} className='trendingItemImage'></img>

                                                        </div>
                                                        <div className='trendingItemtext'>
                                                            <h3>{value.h3}</h3>
                                                            <p>{value.p} </p>
                                                        </div>
                                                        <button  type="button" class="buildAppButton">Build this App</button>
                                                        <div className='trendingItemFooter'>
                                                            <h4>{value.h41}<span className='span'>{value.span1}</span></h4>
                                                            <h4>{value.h42}<span className='span'>{value.span2}</span></h4>
                                                        </div>
                                                        
                                                        
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                </div> 
                            </div>  
                        </div>
                     </div>
            );
        }
    }
   
export default AppTrending;