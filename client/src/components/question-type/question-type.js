import React from 'react'
import Slider from '../slider/slider'
import './question-type.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../questionSectionLoader/loaderbox'
import BottomBar from '../homepageBottombar/homepageBottombar'
import {ApiGet} from '../../api'
class QuestionType extends React.Component{
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            checked: false,
            data:[],
            isLoading:true,
            times:[3],
            checkId:''
        };
    }
    toggleClass() {
        const currentState = this.state.checked;
        this.setState({ checked: !currentState });
    };
    componentDidMount() {
        ApiGet('question-row')
          .then(res => {
            const data = res.data;
            this.setState({ data ,isLoading:false});
          })
      }
      handleChange=(e,id)=>{
		this.setState({checkId:id})
		
	}
        render() {
            return (
               
                
                    <div className='displaySection' style={{order:'4'}}>
                        <div className='questionSection'>
                            <div className='sectionContent'>
                                {this.state.data.map(value=>{
                                    return(
                                        <div className='leftSide' key={value.id}>
                                        <h3>{value.section.title}<img src='https://studio.builder.ai/assets/images/smile3.png'></img></h3>
                                        <p >{value.section.description}</p>
                                    </div>
                                    )
                                })}
                                
                                <div className='rightSide'>
                                    <div className='viewAll'>
                                    <em  className="icon-next"></em>
                                    <Link to ='/problemsolve' style={{color:'white',textDecoration:'none'}}>View All</Link> 
                                    </div>
                                </div>
                            </div>
                            {this.state.isLoading?<Loader times={this.state.times}/>:
                             <div className='questionRow' style={{display:'flex'}}>
                                <div className='drag-scroll-content'style={{display: 'block', whiteSpace: 'nowrap', width: '100%', height: `calc(100% + 17px)`}}>
                                    <Slider>
                                    <div  style={{display:'flex'}}>
                                        {this.state.data.map(value => {
                                            
                                            return (
                                                value.section_details.map(info=>{
                                                    return(
                                                      
                                                        <div key={info.id} className='child' style={{display:'flex'}}>
                                                    
                                                        <div className= {`questionbox ${this.state.checked ? 'completed': '' }`} style={{display:'inline-block'}}  onChange={(e)=>this.handleChange(info.id)}>
                                                            <h3>{info.problem_statement}</h3>
                                                            
                                                                    <div className='answearSet'>
                                                                    <ul>
                                                                    {info.applications.map(apps=>{
                                                                return(
                                                                        <li>
                                                                            <input  type="checkbox" id={apps.id} checked={this.state.checkId==info.id||this.state.checkId==apps.id} onChange={(e)=>this.handleChange(apps.id)}></input>
                                                                            <label htmlFor={apps.id}>
                                                                                <div  className="answearIcon">
                                                                                    <img  width="45" height="45" alt="" src={apps.icon}></img>
                                                                                </div>{apps.title}
                                                                            </label>
                                                                        </li>
                                                                    )})}
                                                                    </ul>
                                                                </div>
                                                         </div>
                                                    </div>
                                                    )
                                                })
                                                
                                            );
                                        })}
                                        </div>
                                    </Slider>
                                 </div>
                                    </div>}  
                        </div>
                        {this.state.checkId?<BottomBar section='question' activeQues={this.state.checkId}/>:''}
                     </div>
            );
        }
    }
   
export default QuestionType;