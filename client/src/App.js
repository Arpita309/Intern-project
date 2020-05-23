import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/signup/signup'
import ProblemSolve from './components/ProblemSolve/ProblemSolve'
import AppPage from './components/appPage/appPage'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/signin' component={SignIn}/>
         <Route exact path='/signup' component={SignUp}/>
         <Route exact path='/problemsolve' component={ProblemSolve}/>
         <Route exact path='/apps' component={AppPage}/>
       </Switch>
       
    </BrowserRouter>   
    
  );
}

export default App;
