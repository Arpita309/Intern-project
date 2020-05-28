import React from 'react'
import './appPage.css'
import AppHeader from '../appHeader/appHeader';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Footer from '../footer/footer';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
    root: {
      width: 250,
      
    },
    rail:{
        color:'#00c853'
    }
  });
class AppPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
           isOpen:false,
           data:[],
           search:'',
           filterData:[
               {"inputId":"cat6","label":"Art & Design (2)"},
               {"inputId":"cat8","label":"Auto & Vehicles (2)"},
               {"inputId":"cat9","label":"Beauty (3)"},
               {"inputId":"cat10","label":"Books & Reference (6)"},
               {"inputId":"cat11","label":"Business (3)"},
               {"inputId":"cat1","label":"Business Process Management (4)"},
               {"inputId":"cat12","label":"Client/Customer Projects (3)"},
               {"inputId":"cat13","label":"Comics (1)"},
               {"inputId":"cat14","label":"Communication (10)"},
               {"inputId":"cat2","label":"Content Management (6)"},
               {"inputId":"cat15","label":"Dating (3)"},
               {"inputId":"cat16","label":"Education (3)"},
               {"inputId":"cat17","label":"Entertainment (12)"},
               {"inputId":"cat18","label":"Events (4)"},
               {"inputId":"cat19","label":"Finance (2)"},
               {"inputId":"cat20","label":"Food & Drinks (4)"},
               {"inputId":"cat22","label":"Health & Fitness (8)"},
               {"inputId":"cat23","label":"House & Home (6)"},
               {"inputId":"cat24","label":"Lifestyle (16)"},
               {"inputId":"cat25","label":"Maps & Navigation (7)"},
               {"inputId":"cat26","label":"Marketing (7)"},
               {"inputId":"cat27","label":"Medical (4)"},
               {"inputId":"cat28","label":"Music & Audio (15)"},
               {"inputId":"cat34","label":"News & Magazines (12)"},
               {"inputId":"cat35","label":"Operations (6)"},
               {"inputId":"cat36","label":"Parenting (1)"},
               {"inputId":"cat39","label":"Photography (5)"},
               {"inputId":"cat41","label":"Productivity  (2)"},
               {"inputId":"cat42","label":"Shopping (25)"},
               {"inputId":"cat43","label":"Social (22)"},
               {"inputId":"cat44","label":"Sports (3)"},
               {"inputId":"cat50","label":"Tools (8)"},
               {"inputId":"cat51","label":"Travel & Local (10)"},
               {"inputId":"cat52","label":"Utilities (1)"},
               {"inputId":"cat53","label":"Video Players & Editors (10)"},
               {"inputId":"cat54","label":"Weather (4)"}

           ],
           itemsToShow: 5,
           expanded: false,
           filterActive:false,
            sorth3:false,
            sortpriceA:false,
            sortpriceD:false,
            sortdurA:false,
            sortdurD:false,
            value:''

        }
        this.showMore = this.showMore.bind(this);
        this.toggleFilter=this.toggleFilter.bind(this)
        this.handleChange=this.handleChange.bind(this);
        this.Clear=this.Clear.bind(this);
        this.handleClickOutside=this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        axios.get(`http://localhost:4000/app-row`)
          .then(res => {
            const data = res.data;
            this.setState({ data });
          })
      }
        
      
      
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    
      
      setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
      handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.setState({isOpen:false})
        }
      }
    
    toggleFilter=()=>{
        this.setState({isOpen:true})
    }
    handleChange(e){
        this.setState({search:e.target.value})
    }
    Clear(){
        this.setState({search:''})
    }
    showMore() {
        this.state.itemsToShow === 5 ? (
          this.setState({ itemsToShow: this.state.filterData.length, expanded: true })
        ) : (
          this.setState({ itemsToShow: 5, expanded: false })
        )
        this.setState({filterActive:!this.state.filterActive})
      }
      
    render(){
        var filtered=this.state.data.filter((value)=>{
            
            return value.h3.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
        })
        const length=filtered.length
        
    const Result=()=>{if(this.state.search)  {return(<div><div class="resultFound">{filtered.length} apps found for a</div><button type="button" class="backButton" onClick={this.Clear}><em class="icon-prev"></em>Back</button></div>)} else return(null)}
    const NotFound=()=>{if(length==0) {return(<div className="searchNotFound"><img src="https://studio.builder.ai/assets/images/searchNotFound.png" alt=""></img><h3>NO RESULTS FOUND</h3><h4>We searched far and wide and couldn’t find<br/> any template matching your search.</h4><button type="button" className="button1"><em className="icon-plus"></em> Custom Template </button></div>)} else return(null)}
    function sortAsc(arr, field) {
        
        return arr.sort(function (a, b) {
           
            if (a[field] > b[field]) {
                return 1;
            }
            if (b[field]> a[field]) {
                return -1;
            }
            return 0;
            
        })
       
     }
     function sortDesc(arr, field) {
        
        return arr.sort(function (a, b) {
            if (a[field] > b[field]) {
                return -1;
            }
            if (b[field]> a[field]) {
                return 1;
            }
            return 0;
        })
     }
     
     const ascending=(field)=>{
       
        this.setState({data:sortAsc(this.state.data,field)})
        
        filtered=this.state.data
         }
    const descending=(field)=>{
        this.setState({data:sortDesc(this.state.data,field)})
        
        filtered=this.state.data
        }     
    const classes = useStyles();     
    const markC=[{value:0,label:"0.00"},{value:63480,label:"63480.00"}]
    const markD=[{value:0,label:"0 Week"},{value:74,label:"74 Week"}]
function valuetext(value) {
    return `${value}`;
  }
       
     
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
                                            <input type="text" className="ng-untouched ng-pristine ng-valid" onChange={this.handleChange}></input>
                                            <span class="clear">
                                                <em class="icon-crossnew" onClick={this.Clear}><i class="fas fa-times-circle" style={{marginRight:'5px'}}></i></em>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <label>For (optional)</label>
                                        <div className="searchInput">
                                            <input type="text" placeholder="Ex. doctors, teachers, mothers etc" className="ng-untouched ng-pristine ng-valid"></input>
                                            <span className="clear">
                                                <em className="icon-crossnew"><i class="fas fa-times-circle" style={{marginRight:'5px'}}></i></em>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="hidden-xs">
                                        <label></label>
                                        <button type="button" className="searchButton">
                                            <em className="icon-magnifying"></em>
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
                                    <div  className= {`filterItemBox ${this.state.isOpen ? 'active': '' }`} ref={this.setWrapperRef}>
                                        <div className='filterItemHolder'>
                                            <div className="filterSection">
                                                <div className='filterRow'>
                                                    <h4>Categories</h4>
                                                    <ul className={`categoryList ${this.state.filterActive?'active':''}`}>
                                                    {this.state.filterData.slice(0,this.state.itemsToShow).map((value) => 
                                                             <li key={value.inputId}>
                                                                 <input type="checkbox" id={value.inputId} class="ng-untouched ng-pristine ng-valid"></input>
                                                                <label for={value.inputId}>{value.label}</label>
                                                             </li>
                                                    )}
                                                    
                                                    </ul>
                                                    <button type="button" className="moreButton" onClick={this.showMore}>
                                                        {this.state.expanded ? ( <span>View less</span>) : (<span>+31 more</span>)} 
                                                    </button>
                                                    
                                                        
                                                    </div>
                                                
                                                <div className='filterRow'>
                                                <h4>Template Cost</h4>
                                                    <div className='rangeSlider'>
                                                    <div className={classes.root}>
                                                    
                                                        <Typography id="track-range-slider" gutterBottom>
                                                             track range
                                                        </Typography>
                                                        <Slider
                                                            color={"secondary"}
                                                            max={63480}
                                                            aria-labelledby="track-range-slider"
                                                            getAriaValueText={valuetext}
                                                            defaultValue={[0, 63480]}
                                                            marks={markC}
                                                        />
                                                        </div>
                                                    </div>
                                                    <div className='filterRow'>
                                                <h4>Duration</h4>
                                                    <div className='rangeSlider'>
                                                    <div className={classes.root}>
                                                    
                                                        <Typography id="track-range-duration-slider" gutterBottom>
                                                             track range
                                                        </Typography>
                                                        <Slider
                                                            color={"secondary"}
                                                            max={74}
                                                            aria-labelledby="track-range-duration-slider"
                                                            getAriaValueText={valuetext}
                                                            defaultValue={[0, 74]}
                                                            marks={markD}
                                                        />
                                                        </div>
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
                                            <li onClick={(e)=>ascending('h3',)}  className={`${this.state.sort?'active':''}`}>Name</li>
                                            <li onClick={(e)=>ascending('price')}>Price: Low to High</li>
                                            <li onClick={(e)=>descending('price')}>Price: High to Low</li>
                                            <li onClick={(e)=>ascending('price')}>Duration: Low to High</li>
                                            <li onClick={(e)=>descending('price')}>Duration: High to Low</li>
                                        </ul>
                                    </div>
                                 </div>
                                 <div class="searchButton visible-xs">
                                     <div class="searchIcon">
                                         <em class="icon-magnifying"><i class="fas fa-search"></i></em>
                                     </div>
                                 </div>
                                 <div class="customTemplate">
                                     <em class="icon-plus" ><i class="fas fa-plus"></i></em>
                                     
                                    <span>Custom Template</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className='templateListing withLock'>
                                    <Result/>
                                    <NotFound/>
                                    <div className='templateRow'>
                                      {filtered.map(value => {
                                            
                                            return (
                                                <React.Fragment key={value._id} >
                                                 <div className='templateBox' >
                                                    <h3>{value.h3}</h3>
                                                    <p>{value.p}</p>
                                                    <div className='tickBox'></div>
                                                    <img width="96" height="96" alt="" src={value.img}></img>
                                                    <div className="appListFooter">
                                                        <div className="appPrice">
                                                            <span>Price</span>
                                                            <strong>₹ {value.price}K</strong>
                                                        </div>
                                                        <a target="_blank" class="btn apps-detailbtn" href="http://localhost:3000/apps/9GAG"> View Details </a>
                                                    </div>
                                                </div>
                                                </React.Fragment>)})}
                                    </div>
                                    
                                </div>
                    </div>
                    <div>

                    </div>
                </div>
                <Footer/>
            </div>
            
        )
    }
} 
export default withStyles(useStyles)(AppPage);












