import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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
  const element = (
    <div>
      <h1>Hello, world! {getGreeting(user)}</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}


setInterval(tick, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));


reportWebVitals();

