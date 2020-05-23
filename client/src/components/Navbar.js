import React from 'react'
import Mobile from './mobileHeader/mobileHeader'
import Header from './header/header'

export default class Navbar extends React.Component {

    render() {
       let width = window.innerWidth;
       if (width > 768) {
         return (
           <Header/>
         );
       } else {
         return (
           <Mobile/>
         );
       }
    }
  
  }