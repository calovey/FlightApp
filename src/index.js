import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log("Service worker registered"))
      .catch(err => console.error(`Service Worker Error: ${err}`));
  });
} else {
  console.log("Service Worker is not supported by browser.");
}

if (navigator.storage && navigator.storage.persist)
  navigator.storage.persist().then(function (persistent) {
    if (persistent)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
  });