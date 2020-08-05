import React from "react";
import "./appDetail.css";
import { Link, Redirect } from "react-router-dom";
import Carousel from "../carouselimgDetail/carouselImgDetail";
import Slider from "../platformSlider/platformSlider";
import FeatureInfo from "../appFeature/appFeature";
import Footer from "../footer/footer";
import Header from "../appDetailHeader/appDetailHeader";
import { ApiGet } from "../../api";
import axios from 'axios'
import Contact from '../connectModal/connectModal'
let userData={}
class AppDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      images: [],
      platforms: [],
      platformId: [],
      auth:{yes:'true'},
      popup:false,
      email: "",
      password: "",
      name:'',organisation:'',contactNumber:'',nextStep:false,
      redirect:false,customize:false
    };
  }

  componentDidMount() {
    ApiGet(`app/?attributes.title=${this.props.match.params.name}`).then(
      (res) => {
        const data = res.data;
        this.setState({ data });
        this.state.data.map(value=>value.attributes.map(info=>info.platform_ids.map(obj=>{
          this.setState({platformId:[...this.state.platformId,obj]})
        }) ))
        console.log(this.state.platformId.map(value=>value))
      
       } );
    ApiGet("configurations").then((res) => {
      const data = res.data;
      this.setState({ platforms: data });
    });
    ApiGet('auth/current_user')
    .then(res => {
      
      this.setState({auth:res.data})
    })
  }
  handleChange=(e)=>{
    this.setState({[e.target.id]: e.target.value })
}
onSubmit = e => {
    e.preventDefault();
 userData = {
      username: this.state.email,
      password: this.state.password,
      name:this.state.name,
      organisation:this.state.organisation,
      contactNumber:this.state.contactNumber
    };
console.log(userData);
 

    
       
        axios.post("http://localhost:4000/auth/signup", userData)
        
        .then(res => {
            console.log(res.config.data)
          if(res.data){
              console.log('successful signup')
              this.setState({redirect:true})
          }
          else console.log('signup error')
        })
        .catch(err =>
          console.log(err.response.data)
          
        ); 
    
        }

  selectPlatform = (e,id) => {
    if(this.state.platformId.filter(value=>value===id).length){
      
      this.setState({platformId:this.state.platformId.filter(value=>value!=id)})
  }
  else{
  
  this.setState({platformId:[...this.state.platformId,id]})
  }
  };
  popup=()=>{
    window.location.href=`http://localhost:3000/features/${this.props.match.params.name}`
    /*if(this.state.auth.length){
      return(<Redirect to={{
        pathname:'http://localhost:3000/features',
      state:{
          name:`${this.props.match.params.name}`
      }
      }}/>)
    }
    else
    this.setState({popup:true})
    console.log(this.state.popup)*/
  }
  closePopup=()=>{
    this.setState({popup:false,nextStep:false,email:'',name:'',organisation:'',contactNumber:''})
  }
  showNext=()=>{
    this.setState({nextStep:!this.state.nextStep})
}
customize=()=>{
  this.setState({customize:!this.state.customize})
}
  render() {
    console.log(this.state.data);
    let price = this.state.platforms.map((value) => {
      return value.platforms.filter(
        (info) => info.id === this.state.platformId
      );
    });

    return (
      <div className="wrapper">
        <Header />
        <div className="middlePart">
          <div className="appdetailSection">
            {this.state.data.map((value) => {
              return value.attributes.map((info) => {
                let images = [];
                images.push(info.web_cover_image_url);
                images.push(info.mobile_cover_image_url);
                this.state.images = [...images];
                return <Carousel images={this.state.images} />;
              });
            })}

            <div className="appdetailBox">
              {this.state.data.map((value) => {
                return value.attributes.map((info) => {
                  return (
                    <React.Fragment key={info.id}>
                      <h2>
                        {info.title}
                        <strong>{info.feature_count} Unique Features</strong>
                      </h2>
                      <div class="chipsrow">
                        {info.products.map((product) => (
                          <div>
                            <span>{product}</span>
                          </div>
                        ))}
                      </div>
                      <p>{info.description}</p>
                      <div className="nonrental-price">
                        <div className="listing monthly active">
                          <h4>Monthly</h4>
                          <div className="custom-checkbox">
                            <input type="checkbox" id="monthly"></input>
                            <label for="monthly"></label>
                          </div>
                          <strong>{info.price}</strong>
                          <span className="pull-right">
                            <b>24 weeks</b> duration for development
                          </span>
                        </div>
                      </div>
                      <div className="promocodeArea">
                        <img
                          src="https://studio.builder.ai/assets/images/promotion_icon.png"
                          alt=""
                        ></img>
                        <div>
                          <button type="button">Apply Promo Code</button>
                        </div>
                      </div>
                      <div className="builderCare">
                        <input type="checkbox" id="buildercarecheck"></input>
                        <label for="buildercarecheck"></label>
                        <strong>Builder Care: </strong>
                        <span> ₹7,020.65/Month</span>
                      </div>
                      <div className="selectPlatform">
                        <h3>Select Platform</h3>
                        <div className="selectPlatformSlider">
                          <div style={{ pointerEvents: "auto" }}>
                            <div
                              className="drag-scroll-content"
                              style={{
                                display: "block",
                                whiteSpace: "nowrap",
                                width: "100%",
                                height: "calc(100% + 20px)",
                              }}
                            >
                              <Slider>
                                {this.state.platforms.map((value) =>
                                  value.platforms.map((data) =>
                                    data.attributes.map((platform) => (
                                      <React.Fragment key={platform.id}>
                                        <div
                                          className={`selectPlatformbox ${
                                            this.state.platformId.filter(
                                              (obj) => obj === platform.id
                                            ).length
                                              ? "selected"
                                              : ""
                                          }`}
                                          style={{
                                            display: "inline-block",
                                            width: "122px",
                                          }}
                                          onClick={(e) =>
                                            this.selectPlatform(e,platform.id)
                                          }
                                        >
                                          <img src={platform.icon} ></img>
                                          <span>{platform.title}</span>
                                          <em className="icon-tick"></em>
                                        </div>
                                      </React.Fragment>
                                    ))
                                  )
                                )}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="createBuild view-brak-bx">
                        <button type="button" className="view-proto-btn">
                          <span className="desktop" onClick={this.popup}>
                            
                             
                              Customize with an Expert
                            
                          </span>
                          <span className="mobile"> Customize with Expert</span>
                        </button>
                        <button type="button " onClick={this.customize}>Customize Your Idea </button>
                      </div>
                    </React.Fragment>
                  );
                });
              })}
            </div>
          </div>
          {this.state.data.map((value) => {
            return value.attributes.map((info) => <FeatureInfo data={info} />);
          })}
        </div>
        <Footer />
        
        <div className="loginScreenAppDetail">
         <div className={`commonPopUp higher-zindex ${this.state.popup?'active':''}`}>
            <div className="popOverlay"></div>
            <div className="popHolder loginRegister">
             
              <div class="new-CloseButton"><em  class="icon-cancel" onClick={this.closePopup}></em></div>
              <div className="loginRegisterRight">
                <div
                  className="heading-appdetail"
                  style={{ textAlign: "left" }}
                >
                  <p style={{color:'black'}}> one last step. </p>
                  <h2 style={{ textAlign: "left" }}>
                 
                    Build your own version of <br/>
                    <span style={{float:'left',fontWeight:'bolder'}}>{this.props.match.params.name}</span>
                  </h2>
                </div>
                <div className="loginBox active">
                  <div className="loginRegisterForm">
                    

                    <form name="registerForm">
                      <ul
                        className={`signupSteps ${
                          this.state.nextStep ? "" : "activeStep"
                        }`}
                      >
                        <li>
                          <span
                            className="field-labels"
                            style={{ float:'left' }}
                          >
                            Sign up to builder
                          </span>
                          <div className="errorMsgBox"></div>
                          <div className="input-container">
                            <input
                              type="text"
                              placeholder="Email Address"
                              maxLength="100"
                              email=""
                              autoComplete="off"
                              name="email"
                              id="email"
                              onChange={(e) => this.handleChange(e)}
                            ></input>
                          </div>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="submitButton extraSpace signUpNextButtonClass errorAnimation"
                            onClick={this.showNext}
                          >
                            Next{" "}
                          </button>
                          <p className="extraText">No credit card needed</p>
                          <p className="orAction noMargin">
                            Already have an account?{" "}
                            <button type="button">
                              <Link to="/signin" style={{ color: "#0071e4" }}>
                                Sign in
                              </Link>
                            </button>
                          </p>
                        </li>
                      </ul>
                      <ul
                        className={`signupSteps ${
                          this.state.nextStep ? "activeStep" : ""
                        }`} style={{textAlign:'left'}}
                      >
                        <li>
                          <div className="onlyAppdetailPopup" onClick={()=>this.setState({nextStep:false})}> Edit </div>
                          <div className="errorMsgBox"></div>
                          <div>
                            <legend className="ex-label">Email Address</legend>
                            <span className="enteredEmail">
                              {this.state.email}
                            </span>
                          </div>
                        </li>
                        <li>
                          <input
                            name="name"
                            type="text"
                            pattern="[a-zA-Z ]*"
                            maxLength="100"
                            placeholder="Enter Name (ex. John Smith)"
                            id="name"
                            onChange={(e) => this.handleChange(e)}
                          ></input>
                        </li>
                        <li>
                          <international-phone-number
                            placeholder="Mobile Number"
                            name="mobileNumber"
                            maxLength="20"
                          >
                            <div className="input-group">
                              <span className="input-group-addon flagInput">
                                <div className="dropdown">
                                  <button type="button" class="dropbtn btn">
                                    <span className="flag flag-in"></span>
                                    <span className="arrow-down"></span>
                                  </button>
                                </div>
                              </span>
                              <input
                                className="form-control"
                                placeholder="Mobile Number"
                                type="text"
                                maxLength="20"
                                id="contactNumber"
                                onChange={(e) => this.handleChange(e)}
                              ></input>
                            </div>
                          </international-phone-number>
                        </li>
                        <li>
                          <input
                            name="organisation"
                            type="text"
                            maxLength="100"
                            placeholder="Organisation (Optional)"
                            id="organisation"
                            onChange={(e) => this.handleChange(e)}
                          ></input>
                        </li>
                        <li>
                          <div className="relativeRow">
                            <input
                              placeholder="Password"
                              name="password"
                              maxLength="100"
                              minLength="8"
                              type="password"
                              onChange={(e) => this.handleChange(e)}
                              id="password"
                            ></input>
                          </div>
                        </li>
                        <li>
                          <div className="registerCheck">
                            <p>
                              <input
                                type="checkbox"
                                id="businesspurposes"
                              ></input>
                              <label htmlFor="businesspurposes"></label> Email
                              me exclusive Builder promotions and updates. I can
                              unsubscribe at any time as stated in the{" "}
                              <a
                                href="https://www.engineer.ai/privacy-policy"
                                target="_blank"
                              >
                                Privacy Policy.
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="submitButton"
                            onClick={this.onSubmit}
                          >
                            <span className="icon-right"></span> Register{" "}
                          </button>
                          <p className="orAction">
                            By clicking on Register, you are agree with our{" "}
                            <a
                              href="https://www.engineer.ai/terms"
                              target="_blank"
                            >
                              Terms and Conditions.
                            </a>
                          </p>
                        </li>
                        <div className="backtoSigninMob">
                          {" "}
                          Already have an account?{" "}
                          <span>
                            <Link to="/signin" style={{ color: "#0071e4" }}>
                              Sign in
                            </Link>
                          </span>
                        </div>
                      </ul>
                    </form>
                    {this.state.nextStep ? (
                      ""
                    ) : (
                      <div>
                        <div className="socialLogin">
                          <h4>
                            <span>or connect using</span>
                          </h4>
                          <span
                            className="socialIcon fbIcon"
                            onClick={this.loginFB}
                          >
                            <a href="http://localhost:4000/auth/facebook">
                              {" "}
                              <em className="icon-facebook">
                                <i class="fab fa-facebook-f"></i>
                              </em>
                            </a>
                          </span>
                          <span className="socialIcon googleIcon">
                            <a href="http://localhost:4000/auth/google">
                              {" "}
                              <em className="icon-google-plus" style={{color:'#dc4e41'}}>
                                <i class="fab fa-google-plus-g"></i>
                              </em>
                            </a>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`commonPopUp ${this.state.customize?'active':''}`}>
          <div className="popOverlay bgNone"></div>
          <div className="popHolder buildcardname">
            <div className="closePopUp" onClick={this.customize}>
              <span className="icon-cancel"></span>
            </div>
            <div className="cardnameIcon">
              <img src="https://studio.builder.ai/assets/images/thumb-icon.png"/>
            </div>
            <h3>Great job! We are summarising your requirements into a <strong>Buildcard.</strong></h3>
            <p><strong>Meanwhile, please name your project</strong></p>
            <input type="text" maxlength="25" placeholder="eg. Booking.com" />
            <button type="button" disabled="">Save </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AppDetail;
