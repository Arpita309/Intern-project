import React from 'react'
import './appFeaturesLeft.css'
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {featureList} from '../featuresdb/featuresdb'

const useStyles = theme => ({
    root: {
      width: 250,
      
    },
    rail:{
        color:'#00c853'
    }
  });

class AppFeaturesLeft extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterOpen:false,
            data:featureList,
            
        }
    
        this.handleClickOutside=this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        
        }
        
      
      
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    
      
      setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
      handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.setState({filterOpen:false})
        }
      }
    
    toggleFilter=()=>{
        this.setState({filterOpen:true})
    }
    
    
    render(){
        const classes = useStyles();     
        
    function valuetext(value) {
        return `${value}`;
       }
        return(
        
            <div className='studioLeft'>
                <div className='studioSearch'>
                    <div class="searchBack"><em class="icon-prev"></em></div>
                    <form  className="ng-pristine ng-valid ng-touched">
                        <input type="text" placeholder="Type here to search for a feature" autocomplete="off" name="search" className="ng-pristine ng-valid ng-touched"></input>
                        <button type="button" class="searchButton"><em class="icon-magnifying"></em></button>
                    </form>
                    <div class="addFeature"><button type="button"><em>+</em> NEW CUSTOM FEATURE</button></div>
                </div>
                <div className='studioToolbar'>
                    <div class="searchTab"><em class="icon-magnifying"></em></div>
                    <div className='filterTab'>
                        <div className={`mobilefilter ${this.state.filterOpen?'active':''}`}>
                            <div><div className="mobilefilterIcon" onClick={this.toggleFilter}></div><div className="mobilefilterNotify">0</div></div>
                            <div class="mobileclosefilter"></div>
                            <div className="mobilefilterItems" ref={this.setWrapperRef}>
                                <div className='mobilefilterRow'>
                                    <h4>Bundle Cost</h4>
                                    <div className='rangeSlider'>
                                    <div className={classes.root}>
                                                    
                                        <Typography id="track-range-slider" gutterBottom>
                                                track range
                                        </Typography>
                                        <Slider
                                            color={"secondary"}
                                            min={109971}
                                            max={1787437}
                                            aria-labelledby="track-range-slider"
                                            getAriaValueText={valuetext}
                                            defaultValue={[109971, 1787437]}
                                            
                                        />
                                        <div class="minValue">₹1,09,971.00 </div>
                                        <div class="maxValue">₹17,87,437.00 </div>
                                        
                                    </div>

                                    </div>
                                </div>
                                <div className='mobilefilterRow'>
                                <h4>Duration (weeks)</h4>
                                    <div className='rangeSlider'>
                                    <div className={classes.root}>
                                                    
                                        <Typography id="track-range-slider" gutterBottom>
                                                track range
                                        </Typography>
                                        <Slider
                                            color={"secondary"}
                                            min={3}
                                            max={56}
                                            aria-labelledby="track-range-slider"
                                            getAriaValueText={valuetext}
                                            defaultValue={[3, 56]}
                                            
                                        />
                                        <div class="minValue">3 weeks</div>
                                        <div class="maxValue">56 weeks</div>
                                        
                                    </div>

                                    </div>
                                </div>
                                <div className='mobilefilterRow' style={{paddingRight:'0'}}>
                                    <h4>By Functionality</h4>
                                    <div className='customScroll'>
                                        <perfect-scrollbars>
                                            <div style={{position:'static'}}>
                                                <div class="ps-content">
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_0"></input>
                                                        <label for="mobiletag_0">Advertisements</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_1"></input>
                                                        <label for="mobiletag_1">Affiliate</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_2"></input>
                                                        <label for="mobiletag_2">Artificial Intelligence</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_3"></input>
                                                        <label for="mobiletag_3">Billing and Payment</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_4"></input>
                                                        <label for="mobiletag_4">Booking Management</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_5"></input>
                                                        <label for="mobiletag_5">Chat</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_6"></input>
                                                        <label for="mobiletag_6">Customer Service and CRM</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_7"></input>
                                                        <label for="mobiletag_7">Dashboard and Analytics</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_8"></input>
                                                        <label for="mobiletag_8">Discounts and Offers</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_9"></input>
                                                        <label for="mobiletag_9">Location tracking</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_10"></input>
                                                        <label for="mobiletag_10">Login and Registration</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_11"></input>
                                                        <label for="mobiletag_11">Marketing tools</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_12"></input>
                                                        <label for="mobiletag_12">Monetization</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_13"></input>
                                                        <label for="mobiletag_13">Personalization</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_14"></input>
                                                        <label for="mobiletag_14">Reviews and Surveys</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_15"></input>
                                                        <label for="mobiletag_15">Search &amp; Filters</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_16"></input>
                                                        <label for="mobiletag_16">Subscription</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_17"></input>
                                                        <label for="mobiletag_17">User Activity</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_18"></input>
                                                        <label for="mobiletag_18">User Profile</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_19"></input>
                                                        <label for="mobiletag_19">User Verification/Authentication</label>
                                                    </div>
                                                </div>
                                            </div>

                                        </perfect-scrollbars>
                                    </div>
                                </div>
                                <div className='mobilefilterRow' style={{paddingRight:'0'}}>
                                    <h4>By App</h4>
                                    <div className='customScroll'>
                                        <perfect-scrollbars>
                                            <div class="ps-content">
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_0"></input>
                                                    <label for="mobiletemplate_0">9GAG</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_1"></input>
                                                    <label for="mobiletemplate_1">Accuweather</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_2"></input>
                                                    <label for="mobiletemplate_2">Airbnb</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_3"></input>
                                                    <label for="mobiletemplate_3">AllTrails</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_4"></input>
                                                    <label for="mobiletemplate_4">Amazon</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_5"></input>
                                                    <label for="mobiletemplate_5">Amazon Alexa</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_6"></input>
                                                    <label for="mobiletemplate_6">Amazon Kindle</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_7"></input>
                                                    <label for="mobiletemplate_7">Amazon Music</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_8"></input>
                                                    <label for="mobiletemplate_8">Android Auto</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_9"></input>
                                                    <label for="mobiletemplate_9">AngelList</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_10"></input>
                                                    <label for="mobiletemplate_10">Asana</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_11"></input>
                                                    <label for="mobiletemplate_11">ASOS</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_12"></input>
                                                    <label for="mobiletemplate_12">Auto Trader</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_13"></input>
                                                    <label for="mobiletemplate_13">Badoo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_14"></input>
                                                    <label for="mobiletemplate_14">Barcode Scanner</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_15"></input>
                                                    <label for="mobiletemplate_15">BBC Click Live</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_16"></input>
                                                    <label for="mobiletemplate_16">BBC Media Player</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_17"></input>
                                                    <label for="mobiletemplate_17">Best Buy</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_18"></input>
                                                    <label for="mobiletemplate_18">Bigo Live</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_19"></input>
                                                    <label for="mobiletemplate_19">Bitmoji</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_20"></input>
                                                    <label for="mobiletemplate_20">Booking.com</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_21"></input>
                                                    <label for="mobiletemplate_21">Bumble</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_22"></input>
                                                    <label for="mobiletemplate_22">Calm</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_23"></input>
                                                    <label for="mobiletemplate_23">Calorie Counter</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_24"></input>
                                                    <label for="mobiletemplate_24">CastBox</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_25"></input>
                                                    <label for="mobiletemplate_25">Client/Customer-facing websites</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_26"></input>
                                                    <label for="mobiletemplate_26">Club Factory</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_27"></input>
                                                    <label for="mobiletemplate_27">CM Launcher 3D</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_28"></input>
                                                    <label for="mobiletemplate_28">CMS</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_29"></input>
                                                    <label for="mobiletemplate_29">CNN</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_30"></input>
                                                    <label for="mobiletemplate_30">Content App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_31"></input>
                                                    <label for="mobiletemplate_31">Content Creation</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_32"></input>
                                                    <label for="mobiletemplate_32">Content Databases</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_33"></input>
                                                    <label for="mobiletemplate_33">Content Players</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_34"></input>
                                                    <label for="mobiletemplate_34">Cookpad</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_35"></input>
                                                    <label for="mobiletemplate_35">Dark Sky</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_36"></input>
                                                    <label for="mobiletemplate_36">Dashboards</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_37"></input>
                                                    <label for="mobiletemplate_37">Databases</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_38"></input>
                                                    <label for="mobiletemplate_38">Digital Asset Management</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_39"></input>
                                                    <label for="mobiletemplate_39">Doximity</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_40"></input>
                                                    <label for="mobiletemplate_40">Dropbox</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_41"></input>
                                                    <label for="mobiletemplate_41">Duolingo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_42"></input>
                                                    <label for="mobiletemplate_42">E-commerce App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_43"></input>
                                                    <label for="mobiletemplate_43">E-commerce App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_44"></input>
                                                    <label for="mobiletemplate_44">E-commerce App </label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_45"></input>
                                                    <label for="mobiletemplate_45">Ebay</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_46"></input>
                                                    <label for="mobiletemplate_46">Email Marketing</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_47"></input>
                                                    <label for="mobiletemplate_47">ES File Explorer File Manager</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_48"></input>
                                                    <label for="mobiletemplate_48">ESPN</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_49"></input>
                                                    <label for="mobiletemplate_49">Event/Queue App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_50"></input>
                                                    <label for="mobiletemplate_50">Eventbrite</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_51"></input>
                                                    <label for="mobiletemplate_51">EventMobi</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_52"></input>
                                                    <label for="mobiletemplate_52">EventPolls</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_53"></input>
                                                    <label for="mobiletemplate_53">Events App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_54"></input>
                                                    <label for="mobiletemplate_54">Events App India</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_55"></input>
                                                    <label for="mobiletemplate_55">Events App UK</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_56"></input>
                                                    <label for="mobiletemplate_56">Facebook</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_57"></input>
                                                    <label for="mobiletemplate_57">Family Locator</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_58"></input>
                                                    <label for="mobiletemplate_58">Fandango Movies</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_59"></input>
                                                    <label for="mobiletemplate_59">Feedly</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_60"></input>
                                                    <label for="mobiletemplate_60">FilmoraGo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_61"></input>
                                                    <label for="mobiletemplate_61">Fitbit</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_62"></input>
                                                    <label for="mobiletemplate_62">FitnessFirst</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_63"></input>
                                                    <label for="mobiletemplate_63">Flashlight</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_64"></input>
                                                    <label for="mobiletemplate_64">Flipboard</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_65"></input>
                                                    <label for="mobiletemplate_65">Flipkart</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_66"></input>
                                                    <label for="mobiletemplate_66">Foursquare</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_67"></input>
                                                    <label for="mobiletemplate_67">Fox News</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_68"></input>
                                                    <label for="mobiletemplate_68">FOX Sports GO</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_69"></input>
                                                    <label for="mobiletemplate_69">Gap</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_70"></input>
                                                    <label for="mobiletemplate_70">GO Music Player</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_71"></input>
                                                    <label for="mobiletemplate_71">Google Classroom</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_72"></input>
                                                    <label for="mobiletemplate_72">Google Drive</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_73"></input>
                                                    <label for="mobiletemplate_73">Google Maps</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_74"></input>
                                                    <label for="mobiletemplate_74">Grindr</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_75"></input>
                                                    <label for="mobiletemplate_75">Groupon</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_76"></input>
                                                    <label for="mobiletemplate_76">Handy</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_77"></input>
                                                    <label for="mobiletemplate_77">Happy Fresh</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_78"></input>
                                                    <label for="mobiletemplate_78">HBO NOW</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_79"></input>
                                                    <label for="mobiletemplate_79">Hotels.com</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_80"></input>
                                                    <label for="mobiletemplate_80">Houzz</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_81"></input>
                                                    <label for="mobiletemplate_81">HRMS/HRIS</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_82"></input>
                                                    <label for="mobiletemplate_82">Huffington Post</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_83"></input>
                                                    <label for="mobiletemplate_83">iHeartRadio</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_84"></input>
                                                    <label for="mobiletemplate_84">Instacart</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_85"></input>
                                                    <label for="mobiletemplate_85">Instagram</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_86"></input>
                                                    <label for="mobiletemplate_86">JIRA</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_87"></input>
                                                    <label for="mobiletemplate_87">Joom</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_88"></input>
                                                    <label for="mobiletemplate_88">KAYAK</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_89"></input>
                                                    <label for="mobiletemplate_89">Keepsafe Photo Vault</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_90"></input>
                                                    <label for="mobiletemplate_90">Kik</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_91"></input>
                                                    <label for="mobiletemplate_91">KineMaster</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_92"></input>
                                                    <label for="mobiletemplate_92">Lazada</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_93"></input>
                                                    <label for="mobiletemplate_93">Lending Tree</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_94"></input>
                                                    <label for="mobiletemplate_94">Letgo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_95"></input>
                                                    <label for="mobiletemplate_95">LinkedIn</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_96"></input>
                                                    <label for="mobiletemplate_96">LiveMe</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_97"></input>
                                                    <label for="mobiletemplate_97">LOVELY</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_98"></input>
                                                    <label for="mobiletemplate_98">Lumosity Brain Training</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_99"></input>
                                                    <label for="mobiletemplate_99">Lyft</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_100"></input>
                                                    <label for="mobiletemplate_100">Marco Polo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_101"></input>
                                                    <label for="mobiletemplate_101">Marketing Sites &amp; Apps</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_102"></input>
                                                    <label for="mobiletemplate_102">Marvel Comics</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_103"></input>
                                                    <label for="mobiletemplate_103">MeetMe</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_104"></input>
                                                    <label for="mobiletemplate_104">Messenger</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_105"></input>
                                                    <label for="mobiletemplate_105">MileIQ</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_106"></input>
                                                    <label for="mobiletemplate_106">Mixpanel</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_107"></input>
                                                    <label for="mobiletemplate_107">Music Maker JAM</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_108"></input>
                                                    <label for="mobiletemplate_108">MX Player</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_109"></input>
                                                    <label for="mobiletemplate_109">My Dentist</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_110"></input>
                                                    <label for="mobiletemplate_110">NBA</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_111"></input>
                                                    <label for="mobiletemplate_111">Nearbuy</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_112"></input>
                                                    <label for="mobiletemplate_112">Netflix</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_113"></input>
                                                    <label for="mobiletemplate_113">Netmeds</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_114"></input>
                                                    <label for="mobiletemplate_114">News Break: Local &amp; Breaking</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_115"></input>
                                                    <label for="mobiletemplate_115">NOW TV</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_116"></input>
                                                    <label for="mobiletemplate_116">NYTimes</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_117"></input>
                                                    <label for="mobiletemplate_117">OfferUp</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_118"></input>
                                                    <label for="mobiletemplate_118">OkCupid Dating</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_119"></input>
                                                    <label for="mobiletemplate_119">Ola</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_120"></input>
                                                    <label for="mobiletemplate_120">Olx</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_121"></input>
                                                    <label for="mobiletemplate_121">Order Management App</label>
                                                </div>
                                                
                                        
                                
                                    
                                </div>
                                        </perfect-scrollbars>    
                                    </div>
                                
                                 </div>
                                 </div>
                                 </div>
                    </div>
                    <div class="cartTab"><div class="cartIcon"><em class="icon-shopping-cart"></em><span>26</span></div></div>
                    <div class="addFeature"><button type="button"><em>+</em> Add Custom Feature</button></div>
                </div>
                <div className='bundleFeature'>
                    <div className={`filter ${this.state.filterOpen?'active':''}`}>
                    <div><div className="filterIcon" onClick={this.toggleFilter}></div><div className="filterNotify">0</div></div>
                            <div class="closeFilter"></div>
                            <div className="filterItems" ref={this.setWrapperRef}>
                                <div className='filterRow'>
                                    <h4>Bundle Cost</h4>
                                    <div className='rangeSlider'>
                                    <div className={classes.root}>
                                                    
                                        <Typography id="track-range-slider" gutterBottom>
                                                track range
                                        </Typography>
                                        <Slider
                                            color={"secondary"}
                                            min={109971}
                                            max={1787437}
                                            aria-labelledby="track-range-slider"
                                            getAriaValueText={valuetext}
                                            defaultValue={[109971, 1787437]}
                                            
                                        />
                                        <div class="minValue">₹1,09,971.00 </div>
                                        <div class="maxValue">₹17,87,437.00 </div>
                                        
                                    </div>

                                    </div>
                                </div>
                                <div className='filterRow'>
                                <h4>Duration (weeks)</h4>
                                    <div className='rangeSlider'>
                                    <div className={classes.root}>
                                                    
                                        <Typography id="track-range-slider" gutterBottom>
                                                track range
                                        </Typography>
                                        <Slider
                                            color={"secondary"}
                                            min={3}
                                            max={56}
                                            aria-labelledby="track-range-slider"
                                            getAriaValueText={valuetext}
                                            defaultValue={[3, 56]}
                                            
                                        />
                                        <div class="minValue">3 weeks</div>
                                        <div class="maxValue">56 weeks</div>
                                        
                                    </div>
                                    </div>
                                    
                                
                                 </div>
                                 <div className='filterRow filter-edit-pd' >
                                    <h4>By Functionality</h4>
                                    <div className='customScroll'>
                                        <perfect-scrollbars>
                                            <div style={{position:'static'}}>
                                                <div class="ps-content">
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="tag_0"></input>
                                                        <label for="tag_0">Advertisements</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_1"></input>
                                                        <label for="mobiletag_1">Affiliate</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_2"></input>
                                                        <label for="mobiletag_2">Artificial Intelligence</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_3"></input>
                                                        <label for="mobiletag_3">Billing and Payment</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_4"></input>
                                                        <label for="mobiletag_4">Booking Management</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_5"></input>
                                                        <label for="mobiletag_5">Chat</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_6"></input>
                                                        <label for="mobiletag_6">Customer Service and CRM</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_7"></input>
                                                        <label for="mobiletag_7">Dashboard and Analytics</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_8"></input>
                                                        <label for="mobiletag_8">Discounts and Offers</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_9"></input>
                                                        <label for="mobiletag_9">Location tracking</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_10"></input>
                                                        <label for="mobiletag_10">Login and Registration</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_11"></input>
                                                        <label for="mobiletag_11">Marketing tools</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_12"></input>
                                                        <label for="mobiletag_12">Monetization</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_13"></input>
                                                        <label for="mobiletag_13">Personalization</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_14"></input>
                                                        <label for="mobiletag_14">Reviews and Surveys</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_15"></input>
                                                        <label for="mobiletag_15">Search &amp; Filters</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_16"></input>
                                                        <label for="mobiletag_16">Subscription</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_17"></input>
                                                        <label for="mobiletag_17">User Activity</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_18"></input>
                                                        <label for="mobiletag_18">User Profile</label>
                                                    </div>
                                                    <div class="customCheckbox">
                                                        <input type="checkbox" id="mobiletag_19"></input>
                                                        <label for="mobiletag_19">User Verification/Authentication</label>
                                                    </div>
                                                </div>
                                            </div>

                                        </perfect-scrollbars>
                                    </div>
                                </div>    
                                <div className='filterRow filter-edit-pd' >
                                    <h4>By App</h4>
                                    <div className='customScroll'>
                                        <perfect-scrollbars>
                                            <div class="ps-content">
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_0"></input>
                                                    <label for="mobiletemplate_0">9GAG</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_1"></input>
                                                    <label for="mobiletemplate_1">Accuweather</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_2"></input>
                                                    <label for="mobiletemplate_2">Airbnb</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_3"></input>
                                                    <label for="mobiletemplate_3">AllTrails</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_4"></input>
                                                    <label for="mobiletemplate_4">Amazon</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_5"></input>
                                                    <label for="mobiletemplate_5">Amazon Alexa</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_6"></input>
                                                    <label for="mobiletemplate_6">Amazon Kindle</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_7"></input>
                                                    <label for="mobiletemplate_7">Amazon Music</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_8"></input>
                                                    <label for="mobiletemplate_8">Android Auto</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_9"></input>
                                                    <label for="mobiletemplate_9">AngelList</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_10"></input>
                                                    <label for="mobiletemplate_10">Asana</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_11"></input>
                                                    <label for="mobiletemplate_11">ASOS</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_12"></input>
                                                    <label for="mobiletemplate_12">Auto Trader</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_13"></input>
                                                    <label for="mobiletemplate_13">Badoo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_14"></input>
                                                    <label for="mobiletemplate_14">Barcode Scanner</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_15"></input>
                                                    <label for="mobiletemplate_15">BBC Click Live</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_16"></input>
                                                    <label for="mobiletemplate_16">BBC Media Player</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_17"></input>
                                                    <label for="mobiletemplate_17">Best Buy</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_18"></input>
                                                    <label for="mobiletemplate_18">Bigo Live</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_19"></input>
                                                    <label for="mobiletemplate_19">Bitmoji</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_20"></input>
                                                    <label for="mobiletemplate_20">Booking.com</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_21"></input>
                                                    <label for="mobiletemplate_21">Bumble</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_22"></input>
                                                    <label for="mobiletemplate_22">Calm</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_23"></input>
                                                    <label for="mobiletemplate_23">Calorie Counter</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_24"></input>
                                                    <label for="mobiletemplate_24">CastBox</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_25"></input>
                                                    <label for="mobiletemplate_25">Client/Customer-facing websites</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_26"></input>
                                                    <label for="mobiletemplate_26">Club Factory</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_27"></input>
                                                    <label for="mobiletemplate_27">CM Launcher 3D</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_28"></input>
                                                    <label for="mobiletemplate_28">CMS</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_29"></input>
                                                    <label for="mobiletemplate_29">CNN</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_30"></input>
                                                    <label for="mobiletemplate_30">Content App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_31"></input>
                                                    <label for="mobiletemplate_31">Content Creation</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_32"></input>
                                                    <label for="mobiletemplate_32">Content Databases</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_33"></input>
                                                    <label for="mobiletemplate_33">Content Players</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_34"></input>
                                                    <label for="mobiletemplate_34">Cookpad</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_35"></input>
                                                    <label for="mobiletemplate_35">Dark Sky</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_36"></input>
                                                    <label for="mobiletemplate_36">Dashboards</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_37"></input>
                                                    <label for="mobiletemplate_37">Databases</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_38"></input>
                                                    <label for="mobiletemplate_38">Digital Asset Management</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_39"></input>
                                                    <label for="mobiletemplate_39">Doximity</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_40"></input>
                                                    <label for="mobiletemplate_40">Dropbox</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_41"></input>
                                                    <label for="mobiletemplate_41">Duolingo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_42"></input>
                                                    <label for="mobiletemplate_42">E-commerce App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_43"></input>
                                                    <label for="mobiletemplate_43">E-commerce App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_44"></input>
                                                    <label for="mobiletemplate_44">E-commerce App </label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_45"></input>
                                                    <label for="mobiletemplate_45">Ebay</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_46"></input>
                                                    <label for="mobiletemplate_46">Email Marketing</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_47"></input>
                                                    <label for="mobiletemplate_47">ES File Explorer File Manager</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_48"></input>
                                                    <label for="mobiletemplate_48">ESPN</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_49"></input>
                                                    <label for="mobiletemplate_49">Event/Queue App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_50"></input>
                                                    <label for="mobiletemplate_50">Eventbrite</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_51"></input>
                                                    <label for="mobiletemplate_51">EventMobi</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_52"></input>
                                                    <label for="mobiletemplate_52">EventPolls</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_53"></input>
                                                    <label for="mobiletemplate_53">Events App</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_54"></input>
                                                    <label for="mobiletemplate_54">Events App India</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_55"></input>
                                                    <label for="mobiletemplate_55">Events App UK</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_56"></input>
                                                    <label for="mobiletemplate_56">Facebook</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_57"></input>
                                                    <label for="mobiletemplate_57">Family Locator</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_58"></input>
                                                    <label for="mobiletemplate_58">Fandango Movies</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_59"></input>
                                                    <label for="mobiletemplate_59">Feedly</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_60"></input>
                                                    <label for="mobiletemplate_60">FilmoraGo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_61"></input>
                                                    <label for="mobiletemplate_61">Fitbit</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_62"></input>
                                                    <label for="mobiletemplate_62">FitnessFirst</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_63"></input>
                                                    <label for="mobiletemplate_63">Flashlight</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_64"></input>
                                                    <label for="mobiletemplate_64">Flipboard</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_65"></input>
                                                    <label for="mobiletemplate_65">Flipkart</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_66"></input>
                                                    <label for="mobiletemplate_66">Foursquare</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_67"></input>
                                                    <label for="mobiletemplate_67">Fox News</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_68"></input>
                                                    <label for="mobiletemplate_68">FOX Sports GO</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_69"></input>
                                                    <label for="mobiletemplate_69">Gap</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_70"></input>
                                                    <label for="mobiletemplate_70">GO Music Player</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_71"></input>
                                                    <label for="mobiletemplate_71">Google Classroom</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_72"></input>
                                                    <label for="mobiletemplate_72">Google Drive</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_73"></input>
                                                    <label for="mobiletemplate_73">Google Maps</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_74"></input>
                                                    <label for="mobiletemplate_74">Grindr</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_75"></input>
                                                    <label for="mobiletemplate_75">Groupon</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_76"></input>
                                                    <label for="mobiletemplate_76">Handy</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_77"></input>
                                                    <label for="mobiletemplate_77">Happy Fresh</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_78"></input>
                                                    <label for="mobiletemplate_78">HBO NOW</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_79"></input>
                                                    <label for="mobiletemplate_79">Hotels.com</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_80"></input>
                                                    <label for="mobiletemplate_80">Houzz</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_81"></input>
                                                    <label for="mobiletemplate_81">HRMS/HRIS</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_82"></input>
                                                    <label for="mobiletemplate_82">Huffington Post</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_83"></input>
                                                    <label for="mobiletemplate_83">iHeartRadio</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_84"></input>
                                                    <label for="mobiletemplate_84">Instacart</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_85"></input>
                                                    <label for="mobiletemplate_85">Instagram</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_86"></input>
                                                    <label for="mobiletemplate_86">JIRA</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_87"></input>
                                                    <label for="mobiletemplate_87">Joom</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_88"></input>
                                                    <label for="mobiletemplate_88">KAYAK</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_89"></input>
                                                    <label for="mobiletemplate_89">Keepsafe Photo Vault</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_90"></input>
                                                    <label for="mobiletemplate_90">Kik</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_91"></input>
                                                    <label for="mobiletemplate_91">KineMaster</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_92"></input>
                                                    <label for="mobiletemplate_92">Lazada</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_93"></input>
                                                    <label for="mobiletemplate_93">Lending Tree</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_94"></input>
                                                    <label for="mobiletemplate_94">Letgo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_95"></input>
                                                    <label for="mobiletemplate_95">LinkedIn</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_96"></input>
                                                    <label for="mobiletemplate_96">LiveMe</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_97"></input>
                                                    <label for="mobiletemplate_97">LOVELY</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_98"></input>
                                                    <label for="mobiletemplate_98">Lumosity Brain Training</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_99"></input>
                                                    <label for="mobiletemplate_99">Lyft</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_100"></input>
                                                    <label for="mobiletemplate_100">Marco Polo</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_101"></input>
                                                    <label for="mobiletemplate_101">Marketing Sites &amp; Apps</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_102"></input>
                                                    <label for="mobiletemplate_102">Marvel Comics</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_103"></input>
                                                    <label for="mobiletemplate_103">MeetMe</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_104"></input>
                                                    <label for="mobiletemplate_104">Messenger</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_105"></input>
                                                    <label for="mobiletemplate_105">MileIQ</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_106"></input>
                                                    <label for="mobiletemplate_106">Mixpanel</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_107"></input>
                                                    <label for="mobiletemplate_107">Music Maker JAM</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_108"></input>
                                                    <label for="mobiletemplate_108">MX Player</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_109"></input>
                                                    <label for="mobiletemplate_109">My Dentist</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_110"></input>
                                                    <label for="mobiletemplate_110">NBA</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_111"></input>
                                                    <label for="mobiletemplate_111">Nearbuy</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_112"></input>
                                                    <label for="mobiletemplate_112">Netflix</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_113"></input>
                                                    <label for="mobiletemplate_113">Netmeds</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_114"></input>
                                                    <label for="mobiletemplate_114">News Break: Local &amp; Breaking</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_115"></input>
                                                    <label for="mobiletemplate_115">NOW TV</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_116"></input>
                                                    <label for="mobiletemplate_116">NYTimes</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_117"></input>
                                                    <label for="mobiletemplate_117">OfferUp</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_118"></input>
                                                    <label for="mobiletemplate_118">OkCupid Dating</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_119"></input>
                                                    <label for="mobiletemplate_119">Ola</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_120"></input>
                                                    <label for="mobiletemplate_120">Olx</label>
                                                </div>
                                                <div class="customCheckbox">
                                                    <input type="checkbox" id="mobiletemplate_121"></input>
                                                    <label for="mobiletemplate_121">Order Management App</label>
                                                </div>
                                                
                                        
                                
                                    
                                </div>
                                        </perfect-scrollbars>    
                                    </div>
                            </div>
                    </div>
                    

                    </div>
                    <div className='buldleBox'>
                        <div className='bundleHead'>
                            <h3>Feature Sets (11/21)</h3>
                        </div>
                        <div className='bundleList'>
                            <perfect-scrollbars>
                                <div style={{position:'static'}}>
                                    <div className='ps-content'>
                                        <ul>
                                            {this.state.data.map((value)=>{
                                                return(
                                                    <li className='active current'>
                                                     <div className='mainTab'>
                                                         <div className='bundleDetail'>
                                                             <div className='bundleImg'>
                                                                 <img src={value.img}></img>
                                                                 <div className='bundleName'>
                                                                <h3>{value.h3Name}</h3>
                                                                <p><span>{value.span}</span>{value.p}</p>
                                                                <div className='bundleCount'>
                                                                    {value.bundleCount}
                                                                </div>
                                                             </div>
                                                             </div>
                                                            
                                                         </div>
                                                     </div>
                                                     <div className='rightsidePanel'>
                                                         <div className='featureHead'>
                                                            <h3>{value.featureHeadH3}</h3>
                                                            <div className="checkBox">
                                                                <input type="checkbox" id="checkfeature_0"></input>
                                                                <label for="checkfeature_0">Select All</label>
                                                            </div>
                                                            <div className='featureText'>
                                                                <h3>{value.featureText}</h3>
                                                                <div class="checkBox"><input type="checkbox" id="mcheckfeature_0"></input><label for="mcheckfeature_0">Select All</label></div>
                                                                <p>{value.featureTextP}</p>
                                                            </div>
                                                            <div className='featureList'>
                                                                <perfect-scrollbars>
                                                                    <div style={{position:'static'}}>
                                                                        <div className='ps-content'>
                                                                            <ul>
                                                                            {value.featureList.map((li)=>{
                                                                               
                                                                                return(
                                                                                    <li className='active'>
                                                                                        <div className='featureTab'>
                                                                                            <div className='featureDetail'>
                                                                                                <div className='featureImg'>
                                                                                                    <object data={li.img}></object>
                                                                                                </div>
                                                                                                <div className="featureName"><h3>{li.featureNameH3}</h3><p>{li.featureNameP}</p><h4>{li.featureNameH4}</h4></div>
                                                                                            </div>
                                                                                            <div className='featureDetailRight'>
                                                                                                 <div className="main-checkbox">
                                                                                                     <div className="checkBox">
                                                                                                         <input type="checkbox" id="fcheck_0"></input>
                                                                                                         <label for="fcheck_0"></label>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="featureView webView"><em className="icon-view"></em></div>
                                                                                                <div className="featureView mobileView"><em className="icon-view"></em></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                )
                                                                    
                                                                              })}

                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </perfect-scrollbars>
                                                                
                                                            </div>
                                                         </div>
                                                     </div>
                                                    </li>
                                                )
                                                
                                            })}
                                            
                                        </ul>
                                    </div>
                                </div>
                            </perfect-scrollbars>
                        </div>
                    </div>
                </div>
            </div>

        
        )
    }
}
export default withStyles(useStyles)(AppFeaturesLeft);