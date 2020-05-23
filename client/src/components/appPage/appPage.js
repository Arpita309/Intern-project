import React from 'react'
import './appPage.css'
import AppHeader from '../appHeader/appHeader';
import axios from 'axios'

class Apppage extends React.Component{
    constructor(props){
        super(props);
        this.state={
           isOpen:'false',
           data:[]

        }
        this.toggleFilter=this.toggleFilter.bind(this)
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/app-row`)
          .then(res => {
            const data = res.data;
            this.setState({ data });
          })
      }
    toggleFilter=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        
        return (
            <div>
                <AppHeader/>
                <div className='middlePart'>
                    <div className='templateSection'>
                        <div className='templateTop'>
                            <div className='templateSearch'>
                                <h3 className="visible-xs">Select similar apps to your idea.</h3>
                                <ul>
                                    <li>
                                        <label>I want to build  like</label>
                                        <div className="searchInput">
                                            <input type="text" className="ng-untouched ng-pristine ng-valid"></input>
                                            <span class="clear">
                                                 <em class="icon-crossnew"></em>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <label>For (optional)</label>
                                        <div className="searchInput">
                                            <input type="text" placeholder="Ex. doctors, teachers, mothers etc" className="ng-untouched ng-pristine ng-valid"></input>
                                            <span className="clear">
                                                <em className="icon-crossnew"></em>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="hidden-xs">
                                        <label></label>
                                        <button type="button" className="searchButton">
                                            <em className="icon-magnifying"><i class="fas fa-search"></i></em>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='templateToolbar'>
                                <div className='templateFilter' onClick={this.toggleFilter}>
                                    <div className= {`filterIcon ${this.state.isOpen ? 'active': '' }`}>
                                        <em className="icon-funnel"><i class="fas fa-filter"></i></em>
                                    </div>
                                    <div  className= {`filterClose ${this.state.isOpen ? 'active': '' }`}></div>
                                    <div  className= {`filterItemBox ${this.state.isOpen ? 'active': '' }`}>
                                        <div className='filterItemHolder'>
                                            <div className="filterSection">
                                                <div className='filterRow'>
                                                    <h4>Categories</h4>
                                                    <ul className='categoryList'>
                                                    <li>
                                                        <input type="checkbox" id="cat6" class="ng-untouched ng-pristine ng-valid"></input>
                                                        <label for="cat6">Art &amp; Design (2)</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="cat8" class="ng-untouched ng-pristine ng-valid"></input>
                                                        <label for="cat8">Auto &amp; Vehicles (2)</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="cat9" class="ng-untouched ng-pristine ng-valid"></input>
                                                        <label for="cat9">Beauty (3)</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="cat10" class="ng-untouched ng-pristine ng-valid"></input>
                                                        <label for="cat10">Books &amp; Reference (6)</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="cat11" class="ng-valid ng-dirty ng-touched"></input>
                                                        <label for="cat11">Business (3)</label>
                                                    </li>
                                                    </ul>
                                                    <button type="button" className="moreButton">+31 more </button>
                                                    
                                                        
                                                    </div>
                                                
                                                <div className='filterRow'>
                                                <h4>Template Cost</h4>
                                                    <div className='rangeSlider'>
                                                        <div class="ng5-slider animate" _nghost-serverapp-c126="">
                                                            <span _ngcontent-serverapp-c126="" ng5sliderelement="" class="ng5-slider-span ng5-slider-bar-wrapper ng5-slider-left-out-selection" style={{opacity: '1', visibility: 'hidden'}}>
                                                                <span _ngcontent-serverapp-c126="" class="ng5-slider-span ng5-slider-bar"></span>
                                                            </span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderelement="" class="ng5-slider-span ng5-slider-bar-wrapper ng5-slider-right-out-selection" style={{opacity: '1', visibility: 'hidden'}}>
                                                                <span _ngcontent-serverapp-c126="" class="ng5-slider-span ng5-slider-bar"></span>
                                                            </span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderelement="" class="ng5-slider-span ng5-slider-bar-wrapper ng5-slider-full-bar" style={{opacity: '1', visibility: 'visible'}}>
                                                                <span _ngcontent-serverapp-c126="" class="ng5-slider-span ng5-slider-bar"></span>
                                                            </span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderelement="" class="ng5-slider-span ng5-slider-bar-wrapper ng5-slider-selection-bar" style={{opacity: '1', visibility: 'visible', left: '7px;', width: '183px'}}>
                                                                <span _ngcontent-serverapp-c126="" class="ng5-slider-span ng5-slider-bar ng5-slider-selection"></span>
                                                            </span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderhandle="" class="ng5-slider-span ng5-slider-pointer ng5-slider-pointer-min" role="slider" tabindex="0" aria-orientation="" aria-label="" aria-labelledby="" aria-valuenow="0" aria-valuetext="0" aria-valuemin="0" aria-valuemax="1447251" style={{opacity: '1', visibility: 'visible', left: '0px'}}></span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderhandle="" class="ng5-slider-span ng5-slider-pointer ng5-slider-pointer-max" role="slider" tabindex="0" aria-orientation="horizontal" aria-label="" aria-labelledby="" aria-valuenow="1447251" aria-valuetext="1447251" aria-valuemin="0" aria-valuemax="1447251" style={{display: 'inherit', opacity: '1', visibility: 'visible', left: '183px'}}></span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderlabel="" class="ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-floor" style={{opacity: '1', visibility: 'visible', left: '0px'}}>0</span><span _ngcontent-serverapp-c126="" ng5sliderlabel="" class="ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-ceil" style={{opacity: '1', visibility: 'visible', left: '197px'}}>1447251</span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderlabel="" class="ng5-slider-span ng5-slider-bubble ng5-slider-model-value" style={{opacity: '1', visibility: 'visible', left: '7px'}}>0</span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderlabel="" class="ng5-slider-span ng5-slider-bubble ng5-slider-model-high" style={{opacity: '1', visibility: 'visible', left: '190px'}}>1447251</span><span _ngcontent-serverapp-c126="" ng5sliderlabel="" class="ng5-slider-span ng5-slider-bubble ng5-slider-combined" style={{opacity: '0', visibility: 'visible', left: '0px'}}>0 - 1447251</span>
                                                            <span _ngcontent-serverapp-c126="" ng5sliderelement="" class="ng5-slider-ticks" hidden="" style={{opacity: '1', visibility: 'visible'}}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filterRow">
                                                    <h4>Supported platforms</h4>
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" id="radio1" className="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio1">Android</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="radio2" class="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio2">iOS</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="radio3" class="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio3">Web</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="radio4" class="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio4">Windows Phone</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="radio5" class="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio5">macOS</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="radio6" class="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio6">Windows</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="radio7" class="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio7">watchOS</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="radio9" class="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio9">Mobile Site</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="radio8" class="ng-untouched ng-pristine ng-valid"></input>
                                                            <label for="radio8">Oculus</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='templateSorting'>
                                    <div className="sortingIcon">
                                        <em class="icon-filtercheck"><i class="fas fa-sort"></i></em>
                                    </div>
                                    <div className="sortItems">
                                        <h4>SORT BY</h4>
                                        <ul>
                                            <li >Name</li>
                                            <li>Price: Low to High</li>
                                            <li>Price: High to Low</li>
                                            <li>Duration: Low to High</li>
                                            <li>Duration: High to Low</li>
                                        </ul>
                                    </div>
                                 </div>
                                 <div class="searchButton visible-xs">
                                     <div class="searchIcon">
                                         <em class="icon-magnifying"><i class="fas fa-search"></i></em>
                                     </div>
                                 </div>
                                 <div class="customTemplate">
                                     <em class="icon-plus" ></em>
                                     
                                    <span>Custom Template</span>
                                </div>
                                <div className='templateListing withLock'>
                                    <div className='templateRow'>
                                      {this.state.data.map(value => {
                                            
                                            return (
                                                <div key={value._id} >
                                                <div className='templateBox'>
                                                    <h3>{value.h3}</h3>
                                                    <p>{value.p}</p>
                                                    <div className='tickBox'></div>
                                                    <img width="96" height="96" alt="" src={value.img}></img>
                                                    <div className="appListFooter">
                                                        <div className="appPrice">
                                                            <span>Price</span>
                                                            <strong>₹ {value.price}K</strong>
                                                        </div>
                                                        <a target="_blank" class="btn apps-detailbtn" href="#/apps/9gag-funny-gifs-pics-memes-videos-for-igtv?exp=global&amp;currency_id=1"> View Details </a>
                                                    </div>
                                                </div>
                                                </div>)})}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
} 
export default Apppage;