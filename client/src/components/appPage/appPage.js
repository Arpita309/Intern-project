import React from "react";
import "./appPage.css";
import AppHeader from "../appHeader/appHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Slider from "@material-ui/core/Slider";
import { withStyles, rgbToHex } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InitialLoader from "../initialLoader/initialLoader";
import { ApiGet } from "../../api";
const useStyles = (theme) => ({
  root: {
    width: 250,
  },
  rail: {
    color: "#00c853",
  },
});
class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: [],
      app: [],
      search: "",
      itemsToShow: 5,
      expanded: false,
      filterActive: false,
      sorth3: false,
      sortpriceA: false,
      sortpriceD: false,
      sortdurA: false,
      sortdurD: false,
      template_weeks: [0, 74],
      categories: [],
      categoryId: "",
      platformId: "",
      checkId: "",
      checkPlatformId: "",
      sortId: "",
      checkedApps: [],
      loading: true,
      template_price: [0, 63480],
      slider: [],
      sort: [],custom:false
    };
    this.showMore = this.showMore.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Clear = this.Clear.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    ApiGet("apps").then((res) => {
      const data = res.data;
      this.setState({ data, loading: false, sort: data });
    });
    ApiGet("categories").then((res) => {
      const data = res.data;
      this.setState({ categories: data });
    });
  }

  handleCheck = (id) => {
    this.state.checkedApps.push(id);
  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }
  handleCategory = (e, id) => {
    console.log(id)
    if (this.state.categoryId === id) this.setState({ categoryId: "" });
    else this.setState({ categoryId: id, checkPlatformId: "" });
  };
  handlePlatform = (e, id) => {
    console.log(id)
    if (this.state.platformId ===id) this.setState({ platformId: "" });
    else this.setState({ platformId:id, checkId: "" });
  };

  toggleFilter = () => {
    this.setState({ isOpen: true });
  };
  handleChange(e) {
    this.setState({ search: e.target.value });
  }
  Clear() {
    this.setState({ search: "" });
  }
  showMore() {
    this.state.itemsToShow === 5
      ? this.setState({ itemsToShow: 36, expanded: true })
      : this.setState({ itemsToShow: 5, expanded: false });
    this.setState({ filterActive: !this.state.filterActive });
  }
 customTemplate=()=>{
     this.setState({custom:!this.state.custom})
 }
  render() {
    var filtered = this.state.data.filter((value) => {
      return (
        value.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    const sliderPrice = (field) => {
      console.log(field);

      this.state.slider = this.state.data.filter(
        (value) =>
          value[field] >= this.state[field][0] &&
          value[field] <= this.state[field][1]
      );
    };
    if (this.state.slider.length) {
      filtered = this.state.slider;
    }
    const length = filtered.length;
    const Result = () => {
      if (this.state.search) {
        return (
          <div>
            <div class="resultFound">{filtered.length} apps found for a</div>
            <button type="button" class="backButton" onClick={this.Clear}>
              <em class="icon-prev"></em>Back
            </button>
          </div>
        );
      } else return null;
    };
   
    function sortAsc(arr, field) {
      return arr.sort(function (a, b) {
        if (a[field] > b[field]) {
          return 1;
        }
        if (b[field] > a[field]) {
          return -1;
        }
        return 0;
      });
    }
    function sortDesc(arr, field) {
      return arr.sort(function (a, b) {
        if (a[field] > b[field]) {
          return -1;
        }
        if (b[field] > a[field]) {
          return 1;
        }
        return 0;
      });
    }
    const ascending = (field, e) => {
      if (this.state.sortId == e.target.id)
        this.setState({ data: this.state.sort, sortId: "" });
      else
        this.setState({
          data: sortAsc(this.state.data, field),
          sortId: e.target.id,
        });

      filtered = this.state.data;
    };
    const descending = (field, e) => {
      if (this.state.sortId == e.target.id) {
        filtered = this.state.data;
        this.setState({ sortId: "" });
        console.log(this.state.sort);
      } else {
        filtered = sortDesc(this.state.data, field);
        this.setState({ sortId: e.target.id });
      }
    };
    const filter = this.state.data.filter(
      (value) =>
        value.category_ids.filter((info) => info === this.state.categoryId)
          .length
    );
    if (this.state.categoryId) {
      filtered = filter;
    }
    const platforms = this.state.data.filter(
      (value) =>
        value.platform_ids.filter((info) => info === this.state.platformId)
          .length
    );
    if (this.state.platformId) {
      filtered = platforms;
    }
    const NotFound = () => {
      if (length == 0) {
        return (
          <div className="searchNotFound">
            <img
              src="https://studio.builder.ai/assets/images/searchNotFound.png"
              alt=""
            ></img>
            <h3>NO RESULTS FOUND</h3>
            <h4>
              We searched far and wide and couldn’t find
              <br /> any template matching your search.
            </h4>
            <button type="button" className="button1">
              <em className="icon-plus"></em> Custom Template{" "}
            </button>
          </div>
        );
      } else return null;
    };
    const classes = useStyles();
    const markC = [
      { value: 0, label: this.state.template_price[0] },
      { value: 63480, label: this.state.template_price[1] },
    ];
    const markD = [
      { value: 0, label: this.state.template_weeks[0] },
      { value: 74, label: this.state.template_weeks[1] },
    ];
    function valuetext(value) {
      return `${value}`;
    }
    const handleSliderChange = (event, newValue) => {
      this.setState({ template_price: newValue });
      sliderPrice("template_price");
    };
    const handleSliderWeeks = (event, newValue) => {
      this.setState({ template_weeks: newValue });
      sliderPrice("template_weeks");
    };

    return this.state.loading ? (
      <InitialLoader />
    ) : (
      <div>
        <AppHeader />
        <div className="middlePart">
          <div className="templateSection">
            <div className="templateTop">
              <div className="templateSearch">
                <h3 className="visible-xs">
                  Select similar apps to your idea.
                </h3>
                <ul>
                  <li>
                    <label>I want to build like</label>
                    <div className="searchInput">
                      <input type="text" onChange={this.handleChange} value={this.state.search}></input>
                      <span class="clear">
                        <em class="icon-crossnew" onClick={this.Clear}>
                          <i
                            class="fas fa-times-circle"
                            style={{ marginRight: "5px" }}
                          ></i>
                        </em>
                      </span>
                    </div>
                  </li>
                  <li>
                    <label>For (optional)</label>
                    <div className="searchInput">
                      <input
                        type="text"
                        placeholder="Ex. doctors, teachers, mothers etc"
                      ></input>
                      <span className="clear">
                        <em className="icon-crossnew">
                          <i
                            class="fas fa-times-circle"
                            style={{ marginRight: "5px" }}
                          ></i>
                        </em>
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
              <div className="templateToolbar">
                <div className="templateFilter" onClick={this.toggleFilter}>
                  <div
                    className={`filterIcon ${
                      this.state.isOpen ? "active" : ""
                    }`}
                  >
                    <em className="icon-funnel">
                      <i class="fas fa-filter"></i>
                    </em>
                  </div>
                  <div
                    className={`filterClose ${
                      this.state.isOpen ? "active" : ""
                    }`}
                  ></div>
                  <div
                    className={`filterItemBox ${
                      this.state.isOpen ? "active" : ""
                    }`}
                    ref={this.setWrapperRef}
                  >
                    <div className="filterItemHolder">
                      <div className="filterSection">
                        <div className="filterRow">
                          <h4>Categories</h4>
                          <ul
                            className={`categoryList ${
                              this.state.filterActive ? "active" : ""
                            }`}
                          >
                            {this.state.categories.map((value) => {
                              return value.categories
                                .slice(0, this.state.itemsToShow)
                                .map((info) => (
                                  <li key={info._id}>
                                    <input
                                      type="checkbox"
                                      id={info.id}
                                      onChange={(e) =>
                                        this.handleCategory(e, info.id)
                                      }
                                    ></input>
                                    <label htmlFor={info.id}>
                                      {info.title}
                                    </label>
                                  </li>
                                ));
                            })}
                          </ul>
                          <button
                            type="button"
                            className="moreButton"
                            onClick={this.showMore}
                          >
                            {this.state.expanded ? (
                              <span>View less</span>
                            ) : (
                              <span>+31 more</span>
                            )}
                          </button>
                        </div>

                        <div className="filterRow">
                          <h4>Template Cost</h4>
                          <div className="rangeSlider">
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
                                onChange={handleSliderChange}
                              />
                            </div>
                          </div>
                          <div className="filterRow">
                            <h4>Duration</h4>
                            <div className="rangeSlider">
                              <div className={classes.root}>
                                <Typography
                                  id="track-range-duration-slider"
                                  gutterBottom
                                >
                                  track range
                                </Typography>
                                <Slider
                                  color={"secondary"}
                                  max={74}
                                  aria-labelledby="track-range-duration-slider"
                                  getAriaValueText={valuetext}
                                  defaultValue={[0, 74]}
                                  marks={markD}
                                  onChange={handleSliderWeeks}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="filterRow">
                          <h4>Supported platforms</h4>
                          <ul>
                            {this.state.categories.map((value) => {
                              return value.platforms.map((info) => (
                                <li>
                                  <input
                                    type="checkbox"
                                    id={info.id}
                                    onClick={(e) => this.handlePlatform(e,info.id)}
                                  ></input>
                                  <label htmlFor={info.id}>{info.title}</label>
                                </li>
                              ));
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templateSorting">
                  <div className="sortingIcon">
                    <em class="icon-filtercheck">
                      <i class="fas fa-sort"></i>
                    </em>
                  </div>
                  <div className="sortItems">
                    <h4>SORT BY</h4>
                    <ul>
                      <li
                        id="1"
                        onClick={(e) => ascending("title", e)}
                        className={`${
                          this.state.sortId == "1" ? "active" : ""
                        }`}
                      >
                        Name
                      </li>
                      <li
                        id="2"
                        onClick={(e) => ascending("template_price", e)}
                        className={`${
                          this.state.sortId == "2" ? "active" : ""
                        }`}
                      >
                        Price: Low to High
                      </li>
                      <li
                        id="3"
                        onClick={(e) => descending("template_price", e)}
                        className={`${
                          this.state.sortId == "3" ? "active" : ""
                        }`}
                      >
                        Price: High to Low
                      </li>
                      <li
                        id="4"
                        onClick={(e) => ascending("template_weeks", e)}
                        className={`${
                          this.state.sortId == "4" ? "active" : ""
                        }`}
                      >
                        Duration: Low to High
                      </li>
                      <li
                        id="5"
                        onClick={(e) => descending("template_weeks", e)}
                        className={`${
                          this.state.sortId == "5" ? "active" : ""
                        }`}
                      >
                        Duration: High to Low
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="searchButton visible-xs">
                  <div class="searchIcon">
                    <em class="icon-magnifying"></em>
                  </div>
                </div>
                <div class="customTemplate" onClick={this.customTemplate}>
                  <em class="icon-plus"></em>

                  <span>Custom Template</span>
                </div>
              </div>
            </div>
            <div className="templateListing withLock">
              <Result />
              <NotFound />
              <div className="templateRow">
                {filtered.map((value) => {
                  return (
                    <React.Fragment key={value._id}>
                      <div
                        className={`templateBox ${
                          this.state.checkedApps.filter(
                            (info) => info === value.id
                          ).length
                            ? "active"
                            : ""
                        }`}
                      >
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                        <div
                          className="tickBox"
                          onClick={(e) => this.handleCheck(value.id)}
                        ></div>
                        <img
                          width="96"
                          height="96"
                          alt=""
                          src={value.app_builder_icon_url}
                        ></img>
                        <div className="appListFooter">
                          <div className="appPrice">
                            <span>Price</span>
                            <strong>₹ {value.price}K</strong>
                          </div>
                          <a
                            target="_blank"
                            class="btn apps-detailbtn"
                            href={`http://localhost:3000/apps/${value.title}`}
                          >
                            {" "}
                            View Details{" "}
                          </a>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className={`commonPopUp ${this.state.custom?'active':''}`}>
                <div class="popOverlay"></div>
                <div className='popHolder addNewTemplate'>
                    <div className="closePopUp" onClick={this.customTemplate}><span class="icon-cancel"></span></div>
                    <div class="tempLeft">
                        <h3>Custom Template</h3><p>Share the links of the apps, websites that best connect with your idea.</p>
                    </div>
                    <div className='tempRight'>
                        <form>
                            <div className="tempDisclaimer">*Custom feature pricing and time may vary post proper understanding of the project </div>
                            <ul>
                                <li>
                                    <div className="mat-form-field ng-tns-c57-0 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid mat-form-field-should-float mat-focused">
                                        <div className="mat-form-field-wrapper ng-tns-c57-0">
                                            <div className="mat-form-field-flex ng-tns-c57-0">
                                                <div className="mat-form-field-infix ng-tns-c57-0">
                                                    <input type="text" matinput=""  name="title" maxlength="100" required="" className="mat-input-element mat-form-field-autofill-control ng-tns-c57-0 cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid" id="mat-input-0" aria-invalid="false" aria-required="true"/>
                                                    <span className="mat-form-field-label-wrapper ng-tns-c57-0">
                                                        <label className="mat-form-field-label ng-tns-c57-0 mat-empty mat-form-field-empty ng-star-inserted" id="mat-form-field-label-1" for="mat-input-0" aria-owns="mat-input-0">
                                                            <span className="ng-tns-c57-0 ng-star-inserted">Name your template</span>
                                                            <span aria-hidden="true" className="mat-placeholder-required mat-form-field-required-marker ng-tns-c57-0 ng-star-inserted"> *</span>
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mat-form-field-underline ng-tns-c57-0 ng-star-inserted">
                                                <span className="mat-form-field-ripple ng-tns-c57-0"></span>
                                            </div>
                                            <div className="mat-form-field-subscript-wrapper ng-tns-c57-0">
                                                <div className="mat-form-field-hint-wrapper ng-tns-c57-0 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{opacity: '1', transform: 'translateY(0%)'}}>
                                                    <div className="mat-form-field-hint-spacer ng-tns-c57-0"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <label>Select a category?</label>
                                    <div className="customDropdown">
                                        <select id="category" name="category">
                                            <option value="0: Object">Art &amp; Design</option>
                                            <option value="1: Object">Auto &amp; Vehicles</option>
                                            <option value="2: Object">Beauty</option>
                                            <option value="3: Object">Books &amp; Reference</option>
                                            <option value="4: Object">Business</option>
                                            <option value="5: Object">Business Process Management</option>
                                            <option value="6: Object">Client/Customer Projects</option>
                                            <option value="7: Object">Comics</option>
                                            <option value="8: Object">Communication</option>
                                            <option value="9: Object">Content Management</option>
                                            <option value="10: Object">Dating</option>
                                            <option value="11: Object">Education</option>
                                            <option value="12: Object">Entertainment</option>
                                            <option value="13: Object">Events</option>
                                            <option value="14: Object">Finance</option>
                                            <option value="15: Object">Food &amp; Drinks</option>
                                            <option value="16: Object">Health &amp; Fitness</option>
                                            <option value="17: Object">House &amp; Home</option>
                                            <option value="18: Object">Lifestyle</option>
                                            <option value="19: Object">Maps &amp; Navigation</option>
                                            <option value="20: Object">Marketing</option>
                                            <option value="21: Object">Medical</option>
                                            <option value="22: Object">Music &amp; Audio</option>
                                            <option value="23: Object">News &amp; Magazines</option>
                                            <option value="24: Object">Operations</option>
                                            <option value="25: Object">Parenting</option>
                                            <option value="26: Object">Photography</option>
                                            <option value="27: Object">Productivity </option>
                                            <option value="28: Object">Shopping</option>
                                            <option value="29: Object">Social</option>
                                            <option value="30: Object">Sports</option>
                                            <option value="31: Object" >Tools</option>
                                            <option value="32: Object">Travel &amp; Local</option>
                                            <option value="33: Object">Utilities</option>
                                            <option value="34: Object">Video Players &amp; Editors</option>
                                            <option value="35: Object">Weather</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                            <ul>
                                <li className='active'>
                                    <label>Add links of similar templates * (Minimum 1 and Maximum 3 links)</label>
                                    <div className="relativeRow">
                                        <input placeholder="e.g., http://www.example.com" name="appurl" />
                                    </div>
                                </li>
                                <li>
                                    <label>Select at least one platform for your product</label>
                                    <div className="relativeRow">
                                        <div className="platformChip"><em className="icon-right"></em> Android </div>
                                        <div className="platformChip"><em className="icon-right"></em> iOS </div>
                                        <div className="platformChip "><em className="icon-right"></em> Web </div>
                                        <div className="platformChip"><em className="icon-right"></em> Windows Phone </div>
                                        <div className="platformChip "><em className="icon-right"></em> macOS </div>
                                        <div className="platformChip"><em className="icon-right"></em> Windows </div>
                                        <div className="platformChip"><em className="icon-right"></em> watchOS </div>
                                        <div className="platformChip "><em className="icon-right"></em> Oculus </div>
                                        <div className="platformChip"><em className="icon-right"></em> Mobile Site </div>
                                    </div>
                                </li>
                                <li><button type="button" class="submitButton" disabled> Submit </button></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
          </div>
          <div></div>
        </div>
        {this.state.checkedApps.length ? (
          <div
            className={`tempBottomBar ${
              this.state.checkedApps.length ? "active" : ""
            }`}
          >
            <div className="tempLeft">
              <h3>
                {this.state.checkedApps.length}
                <span> Template selected</span>
              </h3>
            </div>
            <div className="tempRight">
              <button type="button" class="next">
                Continue{" "}
              </button>
              <share-url-button>
                <button type="button" class="shareUrl">
                  <em class="icon-share-outline"></em>
                </button>
              </share-url-button>
            </div>
          </div>
        ) : (
          <Footer />
        )}
      </div>
    );
  }
}
export default withStyles(useStyles)(AppPage);
