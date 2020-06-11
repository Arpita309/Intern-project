import React from 'react'
import Slider from '../slider/slider'
import './question-type.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../questionSectionLoader/loaderbox'

class QuestionType extends React.Component{
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            checked: false,
            data:[],
            isLoading:true,
            times:[3]
        };
    }
    toggleClass() {
        const currentState = this.state.checked;
        this.setState({ checked: !currentState });
    };
    componentDidMount() {
        axios.get(`http://localhost:4000/question-row`)
          .then(res => {
            const data = res.data;
            this.setState({ data ,isLoading:false});
          })
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
                                    <em  className="icon-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></em>
                                    <Link to ='/problemsolve' style={{color:'white',underline:'none'}}>View All</Link> 
                                    </div>
                                </div>
                            </div>
                            {this.state.isLoading?<Loader times={this.state.times}/>:
                            <div className='questionRow'> 
                                <div className='drag-scroll-content'style={{display: 'block', whiteSpace: 'nowrap', width: '100%', height: `calc(100% + 17px)`}}>
                                    <Slider>
                                        {this.state.data.map(value => {
                                            
                                            return (
                                                value.section_details.map(info=>{
                                                    return(
                                                      
                                                        <div key={info.id} className='child'>
                                                    
                                                        <div className= {`questionbox ${this.state.checked ? 'completed': '' }`} style={{display:'inline-block'}}  onClick={this.toggleClass}>
                                                            <h3>{info.problem_statement}</h3>
                                                            
                                                                    <div className='answearSet'>
                                                                    <ul>
                                                                    {info.applications.map(apps=>{
                                                                return(
                                                                        <li>
                                                                            <input  type="checkbox" id={apps.id} checked={this.state.checked} onClick={this.toggleClass}></input>
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
                                    </Slider>
                                </div> 
                                    </div>}  
                        </div>
                     </div>
            );
        }
    }
   
export default QuestionType;