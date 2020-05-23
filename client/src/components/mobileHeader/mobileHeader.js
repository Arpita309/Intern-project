import React from 'react'
import {Nav,Navbar,Modal,ModalBody,ModalHeader,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import Drawer from '../drawer/drawer'
import './mobileHeader.css'
class Mobile extends React.Component{
    constructor(props) {
        super(props);
    
        
        this.state = {
        
            isModalOpen: false
        
        };
        this.toggleModal = this.toggleModal.bind(this);
        
      }

     
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    render(){
    return (
        <Navbar className='parent'>
           
        <a href='#' className='header-nav  '><img className='i1' src='https://studio.builder.ai/assets/images/engineer-logo.png'></img></a>
        
          <Nav>
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
               <div><button onClick={this.toggleModal} style={{backgroundColor:'white'}}><i class="far fa-user fa-2x" style={{color:'rgb(0, 112, 224)'}}></i></button></div>
            <Drawer/>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} dialogClassName="custom-modal-style" {...this.props}
      
      aria-labelledby="contained-modal-title-vcenter"
      centered>
                   
                    <ModalBody style={{borderRadius:'12px'}}>
                    <Form >
                            <FormGroup>
                                <p style={{textAlign:"center",color:'gray'}}>Already have an account?</p>
                                <button type="button" class="btn btn-primary  drawer-project"  style={{height:'65px',width:'280px',marginTop:'0px',backgroundColor:'rgb(243, 21, 151)',border:'none',fontSize:'20px'}}>LOGIN</button>   
                            </FormGroup>
                            <hr/>
                            <FormGroup>
                             <p style={{textAlign:"center",color:'gray'}}>Don't have an account?</p>
                             <button type="button" class="btn btn-primary  drawer-project" style={{height:'65px',width:'280px',marginTop:'0px',backgroundColor:'rgb(244, 247, 252)',color:'rgb(0, 112, 224)',border:'none',fontSize:'20px'}}>REGISTER</button>    
                            </FormGroup>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            
        </Nav> 
       
        </Navbar>   
    );}
}
export default Mobile;