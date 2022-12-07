import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counters from './components/counters';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h2>Hello, {formatName(user)}! </h2>;
  }
  return <h1>Hello, Stranger.</h1>;
}


const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  url : 'https://reactjs.org/docs/components-and-props.html'
};


function tick() {
 
  root.render(<Counters/>);
}


setInterval(tick, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));


reportWebVitals();

