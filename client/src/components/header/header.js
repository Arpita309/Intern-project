import React,{useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap'

import './header.css'
import {Link} from 'react-router-dom'
import { Tooltip } from 'reactstrap';







const Header =()=>{
    const Tip = () => {
        const [tooltipOpen, setTooltipOpen] = useState(false);
      
        const toggle = () => setTooltipOpen(!tooltipOpen);
      
        return (
          <div >
            <button type="button" class="btn btn-primary project" id='TooltipExample'>GET HELP WITH MY PROJECT</button>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle} className='tool' autohide={false}>
                <div>
             <i className="fas fa-phone-alt"></i>  
                 <span className='demo'>Want a demo?</span><br/>
                <a href='#' className='sales'>Talk to Sales <span className='ref'>(Free)</span></a>
                <hr/>
                <i class="fas fa-user-tie"></i>
                <span className='demo'>Want Help With Specing?</span><br/>
                <a href='#' className='sales'>Talk To Expert <span className='ref'>(Refundable)</span></a>
                </div>
            

            </Tooltip>
          </div>
        );
      }
      const Tool= () => {
        const [tooltipOpen, setTooltipOpen] = useState(false);
      
        const toggle = () => setTooltipOpen(!tooltipOpen);
      
        return (
          <div>
            <button type="button" class="btn btn-primary signin" id='Tooltip' >Sign In</button>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltip" toggle={toggle} className='tool' autohide={false}>
                <div>
                <i class="fas fa-user-check"></i>
                 <span className='demo'>Already have an account? </span><br/>
                <Link to='/signin' className='login' >Login</Link>
                <hr/>
                <i class="fas fa-user-plus"></i>
                <span className='demo'>Don't have an account?</span><br/>
                <Link to='/signup' className='login' >Register</Link>
                </div>
            

            </Tooltip>
          </div>
        );
      }
    


    return(
       
       <Navbar className='parent' fixed='top' >
           
           <a href='#' className='header-nav  '><img height='26px' src='https://studio.builder.ai/assets/images/engineer-logo.png'></img></a>
           
           <Nav>
          
           <a href='#' className='partner'>BECOME A PARTNER</a>
           
           <Tip/>
           <div className="dropdown">
           
  <button className="btn dropdown-toggle" data-toggle="dropdown">
    INR <span></span>
  </button>
  <div className='dropdown-menu'>
  
        <button  className="dropdown-item"><img src='https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd4e9588f3ac67bbadfda0/pounds-symbol__1_.png'></img>Pounds</button>
        <hr/>
        <button  className="dropdown-item"><img src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/376/SAR__1_.png"></img>Saudi Riyal</button>
        <hr/>
        <button  className="dropdown-item"><img src='https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9aa814c49f7f467463f7/Dollar.svg'></img>US Dollars</button>
        <hr/>
        <button  className="dropdown-item"><img src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd4ef688f3ac67bbadfda8/euro-symbol__1_.png"></img>Euro</button>
        <hr/>
        <button  className="dropdown-item"><img src='https://duj87royd3ze0.cloudfront.net/uploads/image/file/5ce3b012b0a5a94038945727/Canada.png'></img>Canadian Dollar</button>
        <hr/>
        
        <button  className="dropdown-item"><img src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/5bdfefe51f0c640e7cfadee0/yen.png" class="fas fa-yen-sign"></img>YEN</button>
        <hr/>
        <button  className="dropdown-item"><img src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9aa714c49f7f467463f6/Rupee.svg"></img>Indian Rupee</button>
        <hr/>
        <button  className="dropdown-item"><img src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/5ab3ab3c0b82ec47eda97d71/AED_0.5x.png"></img>Dirham</button>
        <hr/>
        <button  className="dropdown-item"><img src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9aa614c49f7f467463f5/Ringgit.svg"></img>Ringgit</button>

               </div>
               </div>
               
          <Tool/>  
               
      
       </Nav>      
       </Navbar>
      
    );
}
export default Header;