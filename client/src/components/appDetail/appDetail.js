import React from 'react'
import './appDetail.css'
import axios from 'axios'

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
        axios.get(`http://localhost:4000/app-row?h3=${this.name}`)
          .then(res => {
            const data = res.data;
            this.setState({ data });
            console.log(this.state.data)
          })
      }
    render(){
        
        console.log(this.name)
        return(
            <div className='wrapper'>
                
            </div>
        )
    }
}
export default AppDetail;

