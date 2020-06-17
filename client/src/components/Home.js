import React,{useEffect} from 'react';

import Navbar from './Navbar/Navbar'
import Type from './sectionTypeContent/sectionTypeContent'
import AppList from './app-list/app-list';
import AppTrending from './appTrending/appTrending';
import QuestionType from './question-type/question-type';
import Video from './video/video'
import Footer from './footer/footer';
import {auth} from './authentication'
function Home() {
  
   
  console.log(auth)
  return (
    
    <div className="App">
      <Navbar/>
       <Type/>
       <AppList/>
       <AppTrending/>
       <QuestionType/>
       <Video/>
       <Footer/>
       </div>
    
    
  );
}

export default Home;
