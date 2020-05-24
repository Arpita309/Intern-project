import React from 'react'
import './ProblemSolve.css'
import axios from 'axios'

class ProblemSolve extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this)
        this.state = {
            
            data:[],
            
            search:''
        };
    }
    
    componentDidMount() {
        axios.get(`http://localhost:4000/question-row`)
          .then(res => {
            const data = res.data;
            this.setState({ data });
          })
      }
      handleChange = (e) => {
          this.setState({serach:e.target.value})
      }
       
    render(){
       
           
        
        
        
        return(
             <div className='wrapper'>
                 <div className='middlePart'>
                     <div className='problemSection'>
                         <div className='sectionContent'>
                             <div className='leftSide'>
                                 <h3>What problem are you trying to solve?
                                    <img  src="https://studio.builder.ai/assets/images/smile3.png" width="32" height="38" alt=""></img> 
                                 </h3>
                                 <p>Answere simple questions to get started.</p>
                             </div>
                             <div className='rightSide'>
                                 <div className='problemSearch'>
                                    <input  type="text" placeholder="Search..." onChange={this.handleChange}></input>
                                    <em className='icon-magnifying'><i class="fas fa-search"></i></em>
                                    

                                 </div>
                             </div>
                         </div>
                         <div className='problemListingArea'>
                             <div className='problemListing'>
                             {this.state.data.map(value => {
                                 return(
                                    <React.Fragment key={value._id} >
                                    <div className='problembox'>
                                       <h3>{value.h3}</h3>
                                    <div className='problemSet'>
                                        <ul>
                                            <li>
                                               <input  type="checkbox" id={value.li1[0].inputId}></input>
                                               <label htmlFor={value.li1[0].inputId}>
                                               <div className='problemIcon'>
                                                   <img src={value.li1[0].img}></img>
                                               </div>
                                               {value .li1[0].liItem}
                                               </label>
                                            </li>
                                            <li>
                                               <input  type="checkbox" id={value.li2[0].inputId}></input>
                                               <label htmlFor={value.li2[0].inputId}>
                                               <div className='problemIcon'>
                                                   <img src={value.li2[0].img}></img>
                                               </div>
                                               {value .li2[0].liItem}
                                               </label>
                                            </li>
                                            <li>
                                               <input  type="checkbox" id={value.li3[0].inputId}></input>
                                               <label htmlFor={value.li3[0].inputId}>
                                               <div className='problemIcon'>
                                                   <img src={value.li3[0].img}></img>
                                               </div>
                                               {value .li3[0].liItem}
                                               </label>
                                            </li>
                                            <li>
                                               <input  type="checkbox" id={value.li4[0].inputId}></input>
                                               <label htmlFor={value.li4[0].inputId}>
                                               <div className='problemIcon'>
                                                   <img src={value.li4[0].img}></img>
                                               </div>
                                               {value .li4[0].liItem}
                                               </label>
                                            </li>
                                        </ul>
                                    </div>   

                                </div>
                                </React.Fragment> )})}
                                
                             </div>
                         </div>
                     </div>

                 </div>
                 <div id='footerArea'>
                     <div className='container'>
                         <div className='row'>
                         <div className="col-xs-12 col-sm-4"><p><strong></strong> - Made with Love</p></div>
                         <div className="col-xs-12 col-sm-3"><h6>copyright © Engineer.ai 2020</h6></div>
                         <div className="col-xs-12 col-sm-5 pull-right">
                             <div className="footerLinks">
                                 <ul>
                                     <li>
                                         <a target="_blank" href="https://www.engineer.ai/how-it-works">How It Works</a>
                                     </li>
                                     <li>
                                         <a>Talk To Us</a>
                                    </li>
                                    <li><a target="_blank" href="https://www.engineer.ai/privacy-policy">Privacy</a></li>
                                    <li><a target="_blank" href="https://www.engineer.ai/terms">Terms</a></li>
                                </ul>
                                </div>
                            </div>
                         </div>
                     </div>

                 </div>
             </div>
        );
    }
}
export default ProblemSolve;