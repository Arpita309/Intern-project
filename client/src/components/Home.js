import React,{useEffect, useState} from 'react';

import Navbar from './Navbar/Navbar'
import Type from './sectionTypeContent/sectionTypeContent'
import AppList from './app-list/app-list';
import AppTrending from './appTrending/appTrending';
import QuestionType from './question-type/question-type';
import Video from './video/video'
import Footer from './footer/footer';

import '../App.css'
function Home() {
  const [type,setType]=useState();
  const set=(type)=>{
    setType(type)
  }

  return (
    <div className='wrap'>
      <Navbar/>
      <div className='middlePart'>
        <div className="newHomeSection">
          <div className='setDisplayOrder'>
          
          <Type setType={set}/>
          <AppList type={type}/>
          <AppTrending/>
          <QuestionType/>
          <Video/>
          
          </div>
        
        </div>
      </div>
      <Footer/>
    </div>
    
    
    
  );
}

export default Home;
