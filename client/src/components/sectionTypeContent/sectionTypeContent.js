import React from 'react';
import './sectionTypeContent.css'
import Slider from '../slider/slider'
import {ApiGet} from '../../api'
import BottomBar from '../homepageBottombar/homepageBottombar'
import InitialLoader from '../initialLoader/initialLoader'
class Type extends React.Component{
    constructor(props){
		super(props)
		this.state={
      types:[],
      checkId:'',
      hideBottom:false,loading:true,type:''
		}
	}
	componentDidMount() {
        
        ApiGet('product-type')
          .then(res => {
            const data = res.data;
            this.setState({types:data,loading:false });
          })
          
          
      }
      handleChange=(e,id,type)=>{
        if(this.state.checkId===id){
          this.setState({checkId:'',type:''})
          this.props.setType(" ")
        }
        else
        {this.setState({checkId:id,type:type})
      
        this.props.setType(type)}
        
      }
    render(){
      
        return(
         this.state.loading?<InitialLoader/>:<div className='displaySection'>
            <div className='productTypeSection'>
              <div className='sectionContent'>
                {this.state.types.map(value=>{
                          
                          return( <React.Fragment>
                              
                        <h2 className='heading1'>{value.section.title}</h2>
                        <p  className='p1'>{value.section.description}</p>
                        
                        </React.Fragment>)
              })}
              </div>
              <div className='productTypeRow' >
              <div className='drag-scroll-content'style={{display: 'block', whiteSpace: 'nowrap', width: '100%'}}>
                <Slider>
                    <div style={{display:'flex'}}>
                      {this.state.types.map(details=>{
                        console.log(details)
                        return(
                        details.section_details.map(value => {
                          
                          return (
                            <div key={value._id}  className='child' style={{display:'flex'}}>
                              <div className={`productType ${this.state.checkId===value._id?'active':''}`} style={{backgroundColor:`${value.background_color}`,display:'inline-block'}} id={value._id} onClick={(e)=>this.handleChange(e,value._id,value.title)}>
                                <h3>{value.title}</h3>
                                <p>{value.description} </p>
                                <span ><img className='img1' width="70" height="70" alt="" src={value.icon_url}></img></span>
                                
                              </div>
                            </div>
                          );
                        }))})}
                      </div>
                </Slider>
                
                  
                </div>
              </div>
            </div>
            {this.state.checkId?<BottomBar section='productType' activeProduct={this.state.type}/>:''}
             </div> 
              
              
         
        );
    }
}
export default Type;