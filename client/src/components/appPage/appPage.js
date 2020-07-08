import React from 'react'
import './appPage.css'
import AppHeader from '../appHeader/appHeader';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Footer from '../footer/footer';
import Slider from '@material-ui/core/Slider';
import { withStyles, rgbToHex } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InitialLoader from '../initialLoader/initialLoader';
import{ApiGet} from '../../api'
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
           app:[],
           search:'',
           itemsToShow: 5,
           expanded: false,
           filterActive:false,
            sorth3:false,
            sortpriceA:false,
            sortpriceD:false,
            sortdurA:false,
            sortdurD:false,
            value:'',
            categories:[],
            categoryId:'',
            platformId:'',
            checkId:'',
            checkPlatformId:'',
            sortId:'',
            checkedApps:[],
            loading:true

        }
        this.showMore = this.showMore.bind(this);
        this.toggleFilter=this.toggleFilter.bind(this)
        this.handleChange=this.handleChange.bind(this);
        this.Clear=this.Clear.bind(this);
        this.handleClickOutside=this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleCh=this.handleChange.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        ApiGet('apps')
          .then(res => {
            const data = res.data;
            this.setState({ data,loading:false });
          })
          ApiGet('categories')
          .then(res => {
            const data = res.data;
            this.setState({categories:data });
          })
          
      }
      
        
      
      handleCheck=(id)=>{
          this.state.checkedApps.push(id)
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
    handleCategory=(e,id)=>{
      this.setState({categoryId:id,checkId:id,checkPlatformId:''})
     
    }
    handlePlatform=(e,id)=>{
        this.setState({platformId:e.target.id,checkPlatformId:e.target.id,checkId:''})
       
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
          this.setState({ itemsToShow:36, expanded: true })
          
        ) : (
          this.setState({ itemsToShow: 5, expanded: false })
        )
        this.setState({filterActive:!this.state.filterActive})
      
      }
     
      
    render(){
        var filtered=this.state.data.filter((value)=>{
            
            return value.title.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
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
     
     const ascending=(field,e)=>{
       
        this.setState({data:sortAsc(this.state.data,field),sortId:e.target.id})
        
        filtered=this.state.data
         }
    const descending=(field,e)=>{
        this.setState({data:sortDesc(this.state.data,field),sortId:e.target.id})
        
        filtered=this.state.data
        } 
    const filter=this.state.data.filter(value=>
         value.category_ids.filter(info=>info==this.state.categoryId).length
    ) 
    if(this.state.categoryId){
        filtered=filter
    }
    const platforms=this.state.data.filter(value=>
        value.platform_ids.filter(info=>info==this.state.platformId).length
   ) 
   if(this.state.platformId){
    filtered=platforms
}
    const classes = useStyles();     
    const markC=[{value:0,label:"0.00"},{value:63480,label:"63480.00"}]
    const markD=[{value:0,label:"0 Week"},{value:74,label:"74 Week"}]
function valuetext(value) {
    return `${value}`;
    
  }
  console.log(this.state.checkedApps.map(info=>info))
  
     
            
  return (this.state.loading?<InitialLoader/>:<div>
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
                                            <input type="text" onChange={this.handleChange}></input>
                                            <span class="clear">
                                                <em class="icon-crossnew" onClick={this.Clear}><i class="fas fa-times-circle" style={{marginRight:'5px'}}></i></em>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <label>For (optional)</label>
                                        <div className="searchInput">
                                            <input type="text" placeholder="Ex. doctors, teachers, mothers etc" ></input>
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
                                                    {this.state.categories.map(value=>{
                                                        return(value.categories.slice(0,this.state.itemsToShow).map((info) => 
                                                             <li key={info._id}>
                                                                 <input type="checkbox" id={info.id}  checked={this.state.checkId==info.id} onChange={e=>this.handleCategory(e,info.id)} ></input>
                                                                <label htmlFor={info.id}  >{info.title}</label>
                                                             </li>))}
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
                                                            onChange={e=>this.onChangeSlider(e)}
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
                                                        {this.state.categories.map(value=>{
                                                            return(value.platforms.map(info=>
                                                                <li>
                                                                    <input type="checkbox" id={info.id} onClick={e=>this.handlePlatform(e)} checked={this.state.checkPlatformId==info.id} ></input>
                                                                    <label htmlFor={info.id}>{info.title}</label>
                                                                </li>
                                                                ))
                                                        })}
                                                        
                                                       
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
                                            <li id='1' onClick={(e)=>ascending('title',e)}  className={`${this.state.sortId=='1'?'active':''}`}>Name</li>
                                            <li id='2' onClick={(e)=>ascending('template_price',e)} className={`${this.state.sortId=='2'?'active':''}`}>Price: Low to High</li>
                                            <li id='3' onClick={(e)=>descending('template_price',e)} className={`${this.state.sortId=='3'?'active':''}`}>Price: High to Low</li>
                                            <li id='4' onClick={(e)=>ascending('template_weeks',e)} className={`${this.state.sortId=='4'?'active':''}`}>Duration: Low to High</li>
                                            <li id='5' onClick={(e)=>descending('template_weeks',e)} className={`${this.state.sortId=='5'?'active':''}`}>Duration: High to Low</li>
                                        </ul>
                                    </div>
                                 </div>
                                 <div class="searchButton visible-xs">
                                     <div class="searchIcon">
                                         <em class="icon-magnifying"></em>
                                     </div>
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
                                                 <div className={`templateBox ${this.state.checkedApps.filter(info=>info===value.id).length?'active':''}`} >
                                                     {console.log(this.state.checkedApps.filter(info=>info===value.id))}
                                                    <h3>{value.title}</h3>
                                                    <p>{value.description}</p>
                                                    <div className='tickBox' onClick={(e)=>this.handleCheck(value.id)}></div>
                                                    <img width="96" height="96" alt="" src={value.app_builder_icon_url}></img>
                                                    <div className="appListFooter">
                                                        <div className="appPrice">
                                                            <span>Price</span>
                                                            <strong>₹ {value.price}K</strong>
                                                        </div>
                                                        <a target="_blank" class="btn apps-detailbtn" href={`http://localhost:3000/apps/${value.title}`}> View Details </a>
                                                    </div>
                                                </div>
                                                </React.Fragment>)})}
                                    </div>
                                    
                                </div>
                    </div>
                    <div>

                    </div>
                </div>
                {this.state.checkedApps.length?<div className={`tempBottomBar ${this.state.checkedApps.length?'active':''}`}>
                    <div  className="tempLeft"><h3 >{this.state.checkedApps.length}<span > Template selected</span></h3></div>
                    <div className="tempRight"><button  type="button" class="next">Continue </button><share-url-button><button  type="button" class="shareUrl"><em  class="icon-share-outline"></em></button></share-url-button></div>
                    </div>:<Footer/>}
                
            </div>
            
        )
    }
} 
export default withStyles(useStyles)(AppPage);












