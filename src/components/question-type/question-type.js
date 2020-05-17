import React from 'react'
import Slider from '../slider/slider'
import './question-type.css'


class QuestionType extends React.Component{
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            checked: false,
        };
    }
    toggleClass() {
        const currentState = this.state.checked;
        this.setState({ checked: !currentState });
    };

    
        render() {
      let data = [
          {src:'https://duj87royd3ze0.cloudfront.net/uploads/application/icon/58f7132214c49f5e024bb20e/amz_icon2.svg',
           h3:'Amazon',
           p:'Online retailer and marketplace with a huge variety of products. Features include barcode scanning, user reviews, save and compare and order tracking. ',
           h41:'132',
           span1:'users building',
           h42:'67',
           span2:'features'},
           
           
                
                
            ];
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
                                     View All
                                    </div>
                                </div>
                            </div>
                            <div className='questionRow'> 
                                <div className='drag-scroll-content'style={{display: 'block', whiteSpace: 'nowrap', width: '100%', height: `calc(100% + 17px)`}}>
                                    <Slider>
                                        {data.map(value => {
                                            return (
                                                <div key={value} className='child'>
                                                    <div className= {`questionbox ${this.state.checked ? 'completed': '' }`} style={{display:'inline-block'}}  onClick={this.toggleClass}>
                                                        <h3>Are you looking to solve issues for your city’s transit and travel?</h3>
                                                        <div className='answearSet'>
                                                            <ul>
                                                                <li>
                                                                    <input  type="checkbox" id="answear_5" checked={this.state.checked} onClick={this.toggleClass}></input>
                                                                    <label for="answear_5">
                                                                        <div  className="answearIcon">
                                                                            <img  width="45" height="45" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/icon/57e0aff95cba2a27d6af2796/Icon_Uber1.svg"></img>
                                                                        </div> Uber
                                                                    </label>
                                                                </li>
                                                                <li >
                                                                    <input  type="checkbox" id="answear_63" checked={this.state.checked} onClick={this.toggleClass}></input>
                                                                    <label  for="answear_63">
                                                                        <div className="answearIcon">
                                                                            <img width="45" height="45" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/icon/59254a8914c49f25a777024e/Ola1.png"></img>
                                                                        </div> Ola 
                                                                    </label>
                                                                        
                                                                </li>
                                                                <li >
                                                                    <input  type="checkbox" id="answear_966" checked={this.state.checked} onClick={this.toggleClass}></input>
                                                                    <label  for="answear_966" >
                                                                        <div className="answearIcon">
                                                                            <img  width="45" height="45" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/icon/5c50135e1f0c643d17336eaa/Icon_Wazegps1.png"></img>
                                                                        </div> Waze 
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input  type="checkbox" id="answear_955" checked={this.state.checked} onClick={this.toggleClass}></input>
                                                                    <label  for="answear_955">
                                                                        <div  class="answearIcon">
                                                                            <img  width="45" height="45" alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/application/icon/5c5013261f0c643d17336e86/Icon_Lyft1.png"></img>
                                                                        </div> Lyft
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