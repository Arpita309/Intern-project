import React,{useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap'

import './header.css'
import {Link} from 'react-router-dom'
import { Tooltip } from 'reactstrap';
import Currency from '../currencyBox/currencyBox'






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
           <Currency/>
               
          <Tool/>  
               
      
       </Nav>      
       </Navbar>
      
    );
}
export default Header;