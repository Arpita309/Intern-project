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
import BillingDetails from './components/billingDetails/billingDetails';
import BecomePartner from './components/becomePartner/becomePartner';
import Dashboard from './components/Dashboard/dashboard';
import Pay from './components/payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Status from './components/status/status';
import {AuthState} from './context/state'
function App() {
  return (
    <AuthState>
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
         <Route exact path='/delivery/:name' component={Delivery}/>
         <Route exact path='/build-card/:template' component={BuildCard}/>
         <Route exact path='/payment-plan/:template' component={PaymentPlan}/>
         <Route exact path='/billing-details/:template' component={BillingDetails}/>
         <Route exact path='/become-a-partner' component={BecomePartner}/>
         <Route exact path='/dashboard' component={Dashboard}/>
         <Route exact path='/payment/:template' component={Pay}/>
         <Route exact path='/status' component={Status}/>

       </Switch>
       
    </BrowserRouter>   
    </AuthState>
  );
}

export default App;
