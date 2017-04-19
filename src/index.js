import React from 'react';
import ReactDOM from 'react-dom';

function NumbersList(props){
    const numbers = props.array;
    const list = numbers.map( (item) => 
      <li key={item}>{item * 2}</li>
    );
    return (
      <ul>
        {list}
      </ul>
    );
}

ReactDOM.render(
  <NumbersList  array={[1,2,3,4,5,6,7]}/>,
  document.getElementById('root')
);
