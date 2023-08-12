import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './seance11/App2';
import App from './seance11/App';
// import App from './App';
import Home from './Home';
// import App3 from './App3';
// import App from './exam/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Home/> */}
 
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

