import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./App.css"
//import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
//import * as serviceWorker from "../service-worker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("service-worker.js").then(registration => {
//     console.log("it worked", registration)
//   }).catch(error => { console.log("fail",error) });
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js').then(function(reg) {
      console.log('Successfully registered service worker', reg);
  }).catch(function(err) {
      console.warn('Error whilst registering service worker', err);
  });
  }


//serviceWorker.register();

//reportWebVitals();
