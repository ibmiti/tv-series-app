import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const greeting = <h1>Hello world</h1>; // using jsx
const greeting2 = React.createElement('h2', {}, 'hellow world from h2'); // using js 
ReactDOM.render([greeting, greeting2], document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

