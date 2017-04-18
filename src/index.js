import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import './index.css';

function Welcome (props) {
  return <h1>Welcome, {props.firstname+ ' ' +props.lastname}</h1>
}
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       <Welcome firstname="Sara" lastname="Jop"/>
//     </div>
//   );
// }
function App () {
  return (
    <div>
      <Welcome firstname="Sara" lastname="Jop"/>
      <Welcome firstname="Sara" lastname="Jop"/>
      <Welcome firstname="Sara" lastname="Jop"/>
    </div>
  );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

// setInterval(tick, 1000);
