import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as Sentry from '@sentry/react';
import * as serviceWorker from './serviceWorker';
//Sentry.init({dsn: "https://fbecd8886385460ca80d04fab81b6b96@o416741.ingest.sentry.io/5312973"});


ReactDOM.render(
  
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
