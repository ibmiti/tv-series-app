import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const getCurrentDate = () => { 
  const date = new Date(); // Date class{} doesnt need imported
  return date.toDateString(); // returns latest date
}

const greeting = <h1>Hello world, the current date: {getCurrentDate()}</h1>; // using jsx
// const greeting2 = React.createElement('h2', {}, 'hellow world from h2'); // using js 
ReactDOM.render(greeting, document.getElementById('root'))
reportWebVitals(); // performance measurements

