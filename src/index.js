import React from 'react';
import ReactDOM from 'react-dom';

function Blog (props) {
  const topbar = (
    <ul>
      {
        props.posts.map( (item) => 
          <li key={item.id}>
            {item.title}
          </li>
        )
      }
    </ul>
    );

  const footer = props.posts.map( (item) =>
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  );

  return (
    <div>
      {topbar}
      <hr />
      {footer}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);