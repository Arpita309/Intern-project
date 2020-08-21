import React from 'react'
import AuthContext from '../../context/state'
import  Drawer  from '../drawer/drawer'
import CurrencyBox from '../currencyBox/currencyBox'
import LoginIcon from '../loginIcon/loginIcon'
import User from '../loggedInUser/loggedInUser'
class ProblemSolveHeader extends React.Component{
    render(){
        return (
            <AuthContext.Consumer>
                {
                    (props)=>{
                        return(
                            <div className='headerpart'>
                <div className='offerbarTop'>
                    <div className='offerHolder'>
                        <p></p>
                        <div className='dropdownMenu'>
                            <span></span>
                        </div>
                        <a target="_blank" style={{color:"#fff"} } href="/acceptable_fair_use_policy">Acceptable (Fair) Use Policy</a>
                    </div>
                </div>
                <nav id='header'>
                    <div className='container-fluid'>
                        <div >
                            <div className='logo'>
                                <a href='http://localhost:3000/'><img width="107" height="26" alt="" class="mainLogo" src="https://studio.builder.ai/assets/images/engineer-logo.png"></img></a>
                                <a href='http://localhost:3000/'><img width="26" height="35" alt="" class="smallLogo" src="https://studio.builder.ai/assets/images/logoSmall.png"></img></a>
                            </div>
                            
                            
                            {props.auth.auth?<User auth={props.auth.auth}/>:<>
                            <div style={{marginLeft:'100px',verticalAlign:'center'}}>
                            <CurrencyBox/>
                         </div >
                         
                         <LoginIcon auth={props.auth.auth}/>
                         <div className='mobileClick'>
                             <em class="icon-hamicon" ><Drawer/></em>
                         </div></>}
                            
                        </div>
                    </div>

                </nav>
            </div>
                        )
                    }
                }
            </AuthContext.Consumer>
            
        );
    }
}
export default ProblemSolveHeader;