import React from "react";
import "./appFeaturesLeft.css";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { featureList } from "../featuresdb/featuresdb";
import axios from "axios";
import { ApiGet } from "../../api";
const useStyles = (theme) => ({
  root: {
    width: 250,
  },
  rail: {
    color: "#00c853",
  },
});

class AppFeaturesLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOpen: false,
      data: [],
      selected: 5,
      selectAll: false,
      width: 0,
      checked: "",
      features: [],
      filter: [],
      featureId: [],
      app: [],
    };
    window.addEventListener("resize", this.update);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.update();
    ApiGet("bundle").then((res) => {
      const data = res.data;
      this.setState({ features: data });
    });
    ApiGet("filter").then((res) => {
      const data = res.data;
      this.setState({ filter: data });
    });
    ApiGet(`app/?attributes.title=${this.props.name}`).then((res) => {
      const data = res.data;
      this.setState({ app: data });
    });
  }

  update = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ filterOpen: false });
    }
  }

  toggleFilter = () => {
    this.setState({ filterOpen: true });
  };
  setSelected(id) {
    this.setState({ selected: id });
  }
  selectAll() {
    this.setState({ selectAll: true });
  }
  deselectAll() {
    this.setState({ selectAll: false, featureId: [] });
  }
  selectFeature = (id, e) => {
    e.preventDefault();
    if (this.state.featureId.map(id=>id) === id) {
      this.setState({ featureId: "" });
    } else {
      this.setState({
        featureId:[...this.state.featureId,id],
        data: this.state.features.map((value) =>
          value.features.filter((feature) => feature.id === id)
        ),
      });
      this.props.selectedFeature(
        this.state.data.filter((value) => value.length == 1)
      );
    }
  };
  selectedView=(id,e)=>{
    
      this.props.selectedView(
      this.state.features.map(value=>value.features.filter(feature=>feature.id===id)).filter(value=>value.length==1)
      )
     
  }
  render() {
   
    
    let selectedBundle=this.state.features.filter(value=>value.id==this.state.selected);
    let activeFeatures=this.state.app.map(value=>value.attributes.map(info=>info.features.filter(data=>data.id==selectedBundle.map(select=>select.id))))
    
    const classes = useStyles();

    function valuetext(value) {
      return `${value}`;
    }
    return (
      <div className={`studioLeft ${this.props.hide ? "hidePanel" : ""}`}>
        <div className="studioSearch">
          <div class="searchBack">
            <em class="icon-prev"></em>
          </div>
          <form>
            <input
              type="text"
              placeholder="Type here to search for a feature"
              autocomplete="off"
              name="search"
              className="ng-pristine ng-valid ng-touched"
            ></input>
            <button type="button" class="searchButton">
              <em class="icon-magnifying"></em>
            </button>
          </form>
          <div class="addFeature">
            <button type="button">
              <em>+</em> NEW CUSTOM FEATURE
            </button>
          </div>
        </div>
        <div className="studioToolbar">
          <div class="searchTab">
            <em class="icon-magnifying"></em>
          </div>
          <div className="filterTab">
            <div
              className={`mobilefilter ${
                this.state.filterOpen ? "active" : ""
              }`}
            >
              <div>
                <div
                  className="mobilefilterIcon"
                  onClick={this.toggleFilter}
                ></div>
                <div className="mobilefilterNotify">0</div>
              </div>
              <div class="mobileclosefilter"></div>
              <div className="mobilefilterItems" ref={this.setWrapperRef}>
                <div className="mobilefilterRow">
                  <h4>Bundle Cost</h4>
                  <div className="rangeSlider">
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
                <div className="mobilefilterRow">
                  <h4>Duration (weeks)</h4>
                  <div className="rangeSlider">
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
                <div className="mobilefilterRow" style={{ paddingRight: "0" }}>
                  <h4>By Functionality</h4>
                  <div className="customScroll">
                    <perfect-scrollbars>
                      <div style={{ position: "static" }}>
                        <div class="ps-content">
                          {this.state.filter.map((value) =>
                            value.functionality.map((data) => (
                              <div class="customCheckbox">
                                <input type="checkbox" id={data.id}></input>
                                <label htmlFor={data.id}>{data.title}</label>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </perfect-scrollbars>
                  </div>
                </div>
                <div className="mobilefilterRow" style={{ paddingRight: "0" }}>
                  <h4>By App</h4>
                  <div className="customScroll">
                    <perfect-scrollbars>
                      <div class="ps-content">
                        {this.state.filter.map((value) =>
                          value.templates.map((data) => (
                            <div class="customCheckbox">
                              <input type="checkbox" id={data.id}></input>
                              <label htmlFor={data.id}>{data.title}</label>
                            </div>
                          ))
                        )}
                      </div>
                    </perfect-scrollbars>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cartTab">
            <div class="cartIcon" onClick={this.props.hideLeft}>
              <em class="icon-shopping-cart"></em>
              <span>26</span>
            </div>
          </div>
          <div class="addFeature">
            <button type="button">
              <em>+</em> Add Custom Feature
            </button>
          </div>
        </div>
        <div className="bundleFeature">
          <div className={`filter ${this.state.filterOpen ? "active" : ""}`}>
            <div>
              <div className="filterIcon" onClick={this.toggleFilter}></div>
              <div className="filterNotify">0</div>
            </div>
            <div class="closeFilter"></div>
            <div className="filterItems" ref={this.setWrapperRef}>
              <div className="filterRow">
                <h4>Bundle Cost</h4>
                <div className="rangeSlider">
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
              <div className="filterRow">
                <h4>Duration (weeks)</h4>
                <div className="rangeSlider">
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
              <div className="filterRow filter-edit-pd">
                <h4>By Functionality</h4>
                <div className="customScroll">
                  <perfect-scrollbars>
                    <div style={{ position: "static" }}>
                      <div class="ps-content">
                        {this.state.filter.map((value) =>
                          value.functionality.map((data) => (
                            <div class="customCheckbox">
                              <input type="checkbox" id={data.id}></input>
                              <label htmlFor={data.id}>{data.title}</label>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </perfect-scrollbars>
                </div>
              </div>
              <div className="filterRow filter-edit-pd">
                <h4>By App</h4>
                <div className="customScroll">
                  <perfect-scrollbars>
                    <div class="ps-content">
                      {this.state.filter.map((value) =>
                        value.templates.map((data) => (
                          <div class="customCheckbox">
                            <input type="checkbox" id={data.id}></input>
                            <label htmlFor={data.id}>{data.title}</label>
                          </div>
                        ))
                      )}
                    </div>
                  </perfect-scrollbars>
                </div>
              </div>
            </div>
          </div>
          <div className="buldleBox">
            <div className="bundleHead">
              <h3>Feature Sets (11/21)</h3>
            </div>
            <div className={`${this.state.width > 1200 ? "" : "bundleList"}`}>
              <perfect-scrollbars>
                <div style={{ position: "static" }}>
                  <div className="ps-content">
                    <ul>
                      {this.state.features.map((value) => {
                        return (
                          <li
                            className={`${
                              this.state.selected === value.id
                                ? "active current"
                                : ""
                            }`}
                          >
                            <div
                              className={`${
                                this.state.width > 1200 ? "bundleList" : "width"
                              }`}
                            >
                              <div
                                className="mainTab"
                                onClick={(e) => this.setSelected(value.id)}
                              >
                                <div className="bundleDetail">
                                  <div className="bundleImg">
                                    <img src={value.background_url}></img>
                                    <div className="bundleName">
                                      <h3 style={{ color: "white" }}>
                                        {value.title}
                                      </h3>
                                      <p>{value.total_features} features</p>
                                      <div className="bundleCount">
                                        {value.selected_feature_count}/
                                        {value.total_features}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </perfect-scrollbars>
            </div>
          </div>
          <div className="rightsidePanel">
            {this.state.features.map((value) =>
              value.id == this.state.selected ? (
                <React.Fragment>
                  <div className="featureHead">
                    <h3>
                      Features({this.state.featureId.length}/
                      {value.total_features})
                    </h3>
                    <div className="checkBox">
                      <input type="checkbox" id={value.id}></input>
                      <label
                        htmlFor={value.id}
                        onClick={(e) => this.selectAll(e)}
                      >
                        {this.state.selectAll ? "" : "Select All"}
                      </label>
                      <label
                        htmlFor={value.id}
                        onClick={(e) => this.deselectAll(e)}
                      >
                        {this.state.selectAll ? "Deselect All" : ""}
                      </label>
                    </div>
                  </div>
                  <div className="featureText">
                    <h3>{value.title}</h3>
                    <div class="checkBox">
                      <input type="checkbox" id={value.id}></input>
                      <label for={`m+${value.checkId}`}>Select All</label>
                    </div>
                    <p>{value.bundle_template_names}</p>
                  </div>
                  <div className="featureList">
                    <perfect-scrollbars>
                      <div style={{ position: "static" }}>
                        <div className="ps-content">
                          <ul>
                            {value.features.map((li) => {
                              return (
                                <li className={`${li.id===activeFeatures.map(value=>value)||this.state.featureId.filter(value=>value==li.id).length!=0?'active':''}`}>
                                    {console.log()}
                                  <div
                                    className="featureTab"
                                    onClick={(e) =>
                                      this.selectFeature(li.id, e)
                                    }
                                  >
                                    <div className="featureDetail">
                                      <div className="featureImg">
                                        <object data={li.icon}></object>
                                      </div>
                                      <div className="featureName">
                                        <h3>{li.title}</h3>
                                        <p>{Math.round(`${li.feature_weeks}`*10)/10}</p>
                                        <h4>{li.feature_price}</h4>
                                      </div>
                                    </div>
                                    <div className="featureDetailRight">
                                      <div className="main-checkbox">
                                        <div className="checkBox">
                                          <input
                                            type="checkbox"
                                            id={li.id}
                                            checked={
                                              this.state.selectAll ||
                                              this.state.featureId.filter(id=> id === li.id).length!=0
                                                ? true
                                                : false
                                            }
                                          ></input>
                                          <label for={li.id}></label>
                                        </div>
                                      </div>
                                      <div className="featureView webView" >
                                        <em className="icon-view" onClick={(e)=>this.selectedView(li.id,e)}></em>
                                      </div>
                                      <div className="featureView mobileView" >
                                        <em className="icon-view" onClick={(e)=>this.selectedView(li.id,e)}></em>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </perfect-scrollbars>
                  </div>
                </React.Fragment>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(AppFeaturesLeft);
