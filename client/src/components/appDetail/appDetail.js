import React from 'react'
import './appDetail.css'
import axios from 'axios'
import Carousel from '../carousel/carousel'
class AppDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            name:''
        }
    }
     name=this.props.match.params.name;
    
    componentDidMount() {
        axios.get(`http://localhost:4000/app-row/?h3=Amazon`)
          .then(res => {
            const data = res.data;
            this.setState({ data });
           
          })
      }
    render(){
        console.log(this.name)
        
        return(
            <div className='wrapper'>
                <div className='middlePart'>
                    <div className='appdetailSection'>
                        
                          <Carousel/>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
export default AppDetail;

