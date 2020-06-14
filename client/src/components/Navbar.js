import React from 'react'
import Mobile from './mobileHeader/mobileHeader'
import Header from './header/header'
import CurrencyBox from './currencyBox/currencyBox'

export default class Navbar extends React.Component {

    render() {
         return (
           <div style={{marginRight:'100px'}}>
               <CurrencyBox/>
           </div>
           
         )
    }
  
  }