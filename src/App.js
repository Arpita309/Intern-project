import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/signup/signup'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/signin' component={SignIn}/>
         <Route exact path='/signup' component={SignUp}/>
       </Switch>
       
    </BrowserRouter>   
    
  );
}

export default App;
