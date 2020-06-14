import React from 'react'
import {Nav,Navbar,Modal,ModalBody,ModalHeader,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import Drawer from '../drawer/drawer'
import './mobileHeader.css'
import CurrencyBox from '../currencyBox/currencyBox'
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
             <CurrencyBox/>
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