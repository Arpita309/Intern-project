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
import Welcome from './components/prototypeWelcomePage/prototypeWelcome';
import Prototype from './components/prototype/prototype';
import Delivery from './components/deliverables/deliverables';
import BuildCard from './components/buildCard/buildCard';
import PaymentPlan from './components/paymentPlan/paymentPlan';
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
         <Route exact path='/features' component={Features}/>
         <Route exact path='/welcome' component={Welcome}/>
         <Route exact path='/prototype' component={Prototype}/>
         <Route exact path='/delivery' component={Delivery}/>
         <Route exact path='/build-card' component={BuildCard}/>
         <Route exact path='/payment-plan' component={PaymentPlan}/>

       </Switch>
       
    </BrowserRouter>   
    
  );
}

export default App;
