import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/signup/signup'
import ProblemSolve from './components/ProblemSolve/ProblemSolve'
import AppPage from './components/appPage/appPage'
import AppDetail from './components/appDetail/appDetail'
import './App.css'
import Features from './components/FeaturesPage/FeaturesPage';
function App() {
  return (
    <BrowserRouter>
    
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/signin' component={SignIn}/>
         <Route exact path='/signup' component={SignUp}/>
         <Route exact path='/problemsolve' component={ProblemSolve}/>
         <Route exact path='/apps' component={AppPage}/>
         <Route path='/apps/:name' component={AppDetail} />
         <Route exact='/features' component={Features}/>
       </Switch>
       
    </BrowserRouter>   
    
  );
}

export default App;
