import React from 'react'
import Slider from '../slider/slider'
import './question-type.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


class QuestionType extends React.Component{
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            checked: false,
            data:[]
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
            this.setState({ data });
          })
      }


    
        render() {
            
      
           
                
                
           
            return (
                
                    <div className='displaySection' style={{order:'4'}}>
                        <div className='questionSection'>
                            <div className='sectionContent'>
                                <div className='leftSide'>
                                    <h3>What problem are you trying to solve?  <img src='https://studio.builder.ai/assets/images/smile3.png'></img></h3>
                                    <p >Answer simple questions to get started.</p>
                                </div>
                                <div className='rightSide'>
                                    <div className='viewAll'>
                                    <em  className="icon-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></em>
                                    <Link to ='/problemsolve' style={{color:'white',underline:'none'}}>View All</Link> 
                                    </div>
                                </div>
                            </div>
                            <div className='questionRow'> 
                                <div className='drag-scroll-content'style={{display: 'block', whiteSpace: 'nowrap', width: '100%', height: `calc(100% + 17px)`}}>
                                    <Slider>
                                        {this.state.data.map(value => {
                                            
                                            return (
                                                <div key={value._id} className='child'>
                                                    
                                                    <div className= {`questionbox ${this.state.checked ? 'completed': '' }`} style={{display:'inline-block'}}  onClick={this.toggleClass}>
                                                        <h3>{value.h3}</h3>
                                                        <div className='answearSet'>
                                                            <ul>
                                                                <li>
                                                                    <input  type="checkbox" id={value.li1[0].inputId} checked={this.state.checked} onClick={this.toggleClass}></input>
                                                                    <label htmlFor={value.li1[0].inputId}>
                                                                        <div  className="answearIcon">
                                                                            <img  width="45" height="45" alt="" src={value.li1[0].img}></img>
                                                                        </div>{value.li1[0].liItem}
                                                                    </label>
                                                                </li>
                                                                <li >
                                                                    <input  type="checkbox" id={value.li2[0].inputId} checked={this.state.checked} onClick={this.toggleClass}></input>
                                                                    <label  htmlFor={value.li2[0].inputId}>
                                                                        <div className="answearIcon">
                                                                            <img width="45" height="45" alt="" src={value.li2[0].img}></img>
                                                                        </div> {value.li2[0].liItem}
                                                                    </label>
                                                                        
                                                                </li>
                                                                <li >
                                                                    <input  type="checkbox" id={value.li3[0].inputId} checked={this.state.checked} onClick={this.toggleClass}></input>
                                                                    <label  htmlFor={value.li3[0].inputId}>
                                                                        <div className="answearIcon">
                                                                            <img width="45" height="45" alt="" src={value.li3[0].img}></img>
                                                                        </div> {value.li3[0].liItem}
                                                                    </label>
                                                                        
                                                                </li>
                                                                <li >
                                                                    <input  type="checkbox" id={value.li4[0].inputId} checked={this.state.checked} onClick={this.toggleClass}></input>
                                                                    <label  htmlFor={value.li4[0].inputId}>
                                                                        <div className="answearIcon">
                                                                            <img width="45" height="45" alt="" src={value.li4[0].img}></img>
                                                                        </div> {value.li4[0].liItem}
                                                                    </label>
                                                                        
                                                                </li>
                                                            </ul>
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
   
export default QuestionType;