import React from 'react'
import './ProblemSolve.css'
import axios from 'axios'
import Header from '../problemSolveHeader/problemSolveHeader'
import Footer from '../footer/footer';
import {ApiGet} from '../../api'
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
        ApiGet('question-row')
          .then(res => {
            const data = res.data;
            this.setState({ data });
          })
      }
      handleChange = (e) => {
          this.setState({search:e.target.value})
        
      }
      clear=()=>{
          this.setState({search:''})
      } 
    render(){
        var apps=this.state.data.map((value)=>{
            return (value.section_details.map(info=>{
                return(info)}))})
        var result=apps
  var filtered=result.map(value=>value.filter(data=>{return(data.applications.some(info=>info.title.toLowerCase().indexOf(this.state.search.toLowerCase())!=-1))}))
  const Resultfound=()=>{if(this.state.search)  {return(<div class="resultFound">{filtered.map(info=>info.length)[0]} results found for {this.state.search}</div>)}else return(null)}
        
        
        return(
             <div className='wrapper'>
                 <Header/>
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
                                    <em className='icon-magnifying'></em>
                                   {this.state.search?<div  className="cancelIcon icon-cancel" onClick={this.clear}></div>:''} 
                                    

                                 </div>
                             </div>
                         </div>
                         
                         <div className='problemListingArea'>
                             <Resultfound/>
                             <div className='problemListing'>
                                
                             {filtered.length?filtered.map(info=>info.map(value=>{
                                
                                    return(
                             
                                        <React.Fragment key={value.id}>
                                        <div className='problembox'>
                                           <h3>{value.problem_statement}</h3>
                                        <div className='problemSet'>
                                            <ul>
                                           {value.applications.map(apps=>{
                                                    return(
                                                 <li>
                                                    <input  type="checkbox" id={apps.id}></input>
                                                    <label htmlFor={apps.id}>
                                                    <div className='problemIcon'>
                                                        <img src={apps.icon}></img>
                                                    </div>
                                                    {apps.title}
                                                    </label>
                                                    </li>)})
                                                }
                                                 </ul>
                                    </div>   

                                </div>
                                </React.Fragment>)

                                   }))
                             :this.state.data.map(value => {
                                            
                                            return (
                                   value.section_details.map(info=>{
                                                    return(
                             
                                    <React.Fragment key={info.id}>
                                    <div className='problembox'>
                                       <h3>{info.problem_statement}</h3>
                                    <div className='problemSet'>
                                        <ul>
                                       {info.applications.map(apps=>{
                                                return(
                                             <li>
                                                <input  type="checkbox" id={apps.id}></input>
                                                <label htmlFor={apps.id}>
                                                <div className='problemIcon'>
                                                    <img src={apps.icon}></img>
                                                </div>
                                                {apps.title}
                                                </label>
                                                </li>)})
                                            }
                                            
                                            {/*<li>
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
                                            </li>*/}
                                        </ul>
                                    </div>   

                                </div>
                                </React.Fragment>)}))})}
                                
                             </div>
                         </div>
                     </div>

                 </div>
                 <Footer/>
             </div>
        );
    }
}
export default ProblemSolve;