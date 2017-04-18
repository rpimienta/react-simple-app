import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function tick () {
  const element = (
    <div>
      <h1>Hello!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      element
    );
  }
}
setInterval(tick, 2000);

export default App;
