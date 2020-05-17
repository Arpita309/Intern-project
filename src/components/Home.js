import React from 'react';

import Navbar from './Navbar'
import Type from './sectionTypeContent/sectionTypeContent'
import AppList from './app-list/app-list';
import AppTrending from './appTrending/appTrending';
import QuestionType from './question-type/question-type';

function Home() {
  return (
    
    <div className="App">
      <Navbar/>
       <Type/>
       <AppList/>
       <AppTrending/>
       <QuestionType/>
       
       </div>
    
    
  );
}

export default Home;
