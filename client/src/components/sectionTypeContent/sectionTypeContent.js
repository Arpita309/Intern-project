import React from 'react';
import './sectionTypeContent.css'
import SliderParent from '../productType/productType'
import axios from 'axios'
import {ApiGet} from '../../api'
class Type extends React.Component{
    constructor(props){
		super(props)
		this.state={
			types:[]
		}
	}
	componentDidMount() {
        
        ApiGet('product-type')
          .then(res => {
            const data = res.data;
            this.setState({types:data });
          })
          
          
      }
    render(){
        return(
          <div className='parent'>
              {this.state.types.map(value=>{
                        
                         return( <React.Fragment>
                              
                        <h2 className='heading1'>{value.section.title}</h2>
                        <p  className='p1'>{value.section.description}</p>
                        <SliderParent  details={value.section_details} />
                        </React.Fragment>)
              })}
              
              
          </div>
        );
    }
}
export default Type;