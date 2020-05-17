import React from 'react';
import './sectionTypeContent.css'
import SliderParent from '../productType/productType'
class Type extends React.Component{
    render(){
        return(
          <div className='parent'>
              <h2 className='heading1'>We help your Idea to become a reality.What would you build?</h2>
              <p  className='p1'>Select the type of software you want to create.</p>
              <SliderParent/>
          </div>
        );
    }
}
export default Type;