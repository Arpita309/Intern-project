import React from 'react'
import './sideBar.css'
export const  SideBar =()=>{
    return(
        <React.Fragment>
        <platform-list  className="forMobileNew">
        <div  className='platformSidebarOverlay active'></div>
        <div  className='platformSidebar active'>
            <div  className="topHead">
                <h3>Platforms</h3>
                <div className="closeBar"><em  className="icon-cancel" ></em></div>
            </div>
            <div  className="platformListing">
                <perfect-scrollbars>
                    <div style={{position: 'static'}} className="ps">
                        <div className="ps-content">
                            <ul>
                                <li className="active">
                                    <div  className="platformImg">
                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9b0014c49f7f46746441/Android_blue.png"></img>
                                    </div>
                                    <div  className="platformName">Android</div>
                                    <div className="platformCheck">
                                        <input  type="checkbox" id="platform0undefined"></input>
                                        <label  for="platform0undefined"></label>
                                    </div>
                                </li>
                                <li  className="active">
                                    <div  className="platformImg">
                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd56b888f3ac79a46ef210/ios_blue.png"></img>
                                    </div>
                                    <div  className="platformName">iOS</div>
                                    <div  className="platformCheck">
                                        <input  type="checkbox" id="platform1undefined"></input>
                                        <label  for="platform1undefined"></label>
                                    </div>
                                </li>
                                <li  className="active">
                                    <div  className="platformImg">
                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd570d88f3ac79a46ef213/Web_xh.png"></img>
                                    </div>
                                    <div  className="platformName">Web</div>
                                    <div  className="platformCheck">
                                        <input  type="checkbox" id="platform2undefined"></input>
                                        <label  for="platform2undefined"></label>
                                    </div>
                                </li>
                                <li>
                                    <div className="platformImg">
                                        <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd576988f3ac79a46ef217/Windows_blue.png"></img>
                                    </div>
                                    <div className="platformName">Windows Phone</div>
                                    <div  className="platformCheck">
                                        <input  type="checkbox" id="platform3undefined"></input>
                                        <label  for="platform3undefined"></label>
                                    </div>
                                </li>
                                <li>
                                    <div  className="platformImg">
                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59376fd714c49f5759f8cd9f/Mac_os_xh.png"></img>
                                    </div>
                                    <div  className="platformName">macOS</div>
                                    <div  className="platformCheck">
                                        <input  type="checkbox" id="platform4undefined"></input>
                                        <label  for="platform4undefined"></label>
                                    </div>
                                </li>
                                <li>
                                    <div  className="platformImg">
                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd58d688f3ac79a46ef21d/Windows_os_xh.png"></img>
                                    </div>
                                    <div  className="platformName">Windows</div>
                                    <div  className="platformCheck">
                                        <input  type="checkbox" id="platform5undefined"></input>
                                        <label  for="platform5undefined"></label>
                                    </div>
                                </li>
                                <li>
                                    <div  className="platformImg">
                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd592088f3ac79a46ef220/Watch_os_xh.png"></img>
                                    </div>
                                    <div  className="platformName">watchOS</div>
                                    <div  className="platformCheck">
                                        <input  type="checkbox" id="platform6undefined"></input>
                                        <label  for="platform6undefined"></label>
                                    </div>
                                </li>
                                <li>
                                    <div  className="platformImg">
                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd595488f3ac79a46ef223/Oculus_xh.png"></img>
                                    </div>
                                    <div  className="platformName">Oculus</div>
                                    <div  className="platformCheck">
                                        <input  type="checkbox" id="platform7undefined"></input>
                                        <label for="platform7undefined"></label>
                                    </div>
                                </li>
                                <li>
                                    <div  className="platformImg">
                                        <img  alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd59ac88f3ac79a46ef226/mobile.png"></img>
                                    </div>
                                    <div  className="platformName">Mobile Site</div>
                                    <div className="platformCheck">
                                        <input  type="checkbox" id="platform8undefined"></input>
                                        <label  for="platform8undefined"></label
                                    ></div>
                                </li>
                            </ul>
                        </div></div>
                    </perfect-scrollbars>
                </div>
            </div>
        </platform-list></React.Fragment>
                            
 );
}
