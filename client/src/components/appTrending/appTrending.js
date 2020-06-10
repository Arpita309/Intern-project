import React from 'react'
import Slider from '../slider/slider'
import './appTrending.css'
import axios from 'axios'
import Loader from '../questionSectionLoader/loaderbox'

class AppTrending extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info:[],
            isLoading:true,
            times:4
        }
    }
    componentDidMount() {
        
        axios.get(`http://localhost:4000/trending`)
          .then(res => {
            const data = res.data;
            this.setState({info:data ,isLoading:false});
          })
          
          
      }
        render() {
            return (
                this.state.isLoading?<Loader times={this.state.times}/>:
                    <div className='displaySection' style={{order:'3'}}>
                        <div className='trendingSection'>
                            {this.state.info.map(value=>{
                               
                                return(
                                    
                                    <div className='sectionContent' key={value.id}>
                                        
                                    <h3>{value.section.title} <img src='https://studio.builder.ai/assets/images/smile2.png'></img></h3>
                                    <p>{value.section.description}</p>
                                   
                                    </div>
                                    
                                    )
                                  
                                
                            })}
                            
                                            <div className='trendingItemrow' > 
                                            <div className='drag-scroll-content'style={{display: 'block', whiteSpace: 'nowrap', width: '100%', height: `calc(100% + 20px)`}}>
                                                <Slider>
                                                {this.state.info.map(value=>{
                                                    return(
                                                        value.section_details.map(detail=>{
                                                           
                                                            return(
                                                        
                                                            <div key={value} className='child'>
                                                                <div className='trendingItembox' style={{display:'inline-block'}}>
                                                                    <div className='trendingItemImage'>
                                                                        <img src={detail.icon} className='trendingItemImage'></img>
            
                                                                    </div>
                                                                    <div className='trendingItemtext'>
                                                                        <h3>{detail.title}</h3>
                                                                        <p>{detail.description} </p>
                                                                    </div>
                                                                    <button  type="button" class="buildAppButton">Build this App</button>
                                                                    <div className='trendingItemFooter'>
                                                                        <h4>{detail.builder_number}<span className='span'>users building</span></h4>
                                                                        <h4>{detail.feature_count}<span className='span'>features</span></h4>
                                                                    </div>
                                                                    
                                                                    
                                                                </div>
                                                            </div>
                                                        )}));
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