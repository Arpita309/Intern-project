import React from 'react'
import Mobile from './mobileHeader/mobileHeader'
import Header from './header/header'
import CurrencyBox from './currencyBox/currencyBox'
import {Link} from 'react-router-dom'
export default class Navbar extends React.Component {

    render() {
         return (
           <React.Fragment>
             <Link to='become-a-partner' className='partner'>BECOME A PARTNER</Link>
             <div style={{marginRight:'100px'}}>
               <CurrencyBox/>
            </div>
           </React.Fragment>
           
           
         )
    }
  
  }