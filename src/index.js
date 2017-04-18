import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
// import App from './App';

import './index.css';

function formatDate(date) {
  return date.toLocaleDateString();
}

const author = {
  user: {
    avatarUrl: logo,
    name: 'Fulanito de Tal'
  },
  date: new Date(),
  text: 'This is a random comment'
}
function App () {
  return (
    <Comment 
    user = {author.user}
    date = {author.date}
    text = {author.text}
    />
  );
}
function Comment (props) {
  console.log(props)
  return (
    <div className="Comment">
      <UserInfo user={props.user}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function UserInfo (props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.name}
      </div>
    </div>
  );
} 

function Avatar (props) {
  console.log(props);
  return (
    <img 
      className = "Avatar App-logo"
      src = {props.user.avatarUrl}
      alt = {props.user.name}
    />
  );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );