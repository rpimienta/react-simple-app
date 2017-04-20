import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class NameForm extends Component{
  constructor (props) {
    super(props);
    this.state = { value: 'Please write an essay about your favorite DOM element.'};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit (event) {
    alert("Your name is: " + this.state.value);
    event.preventDefault();
  }
  
  handleClick (event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name
          
          <textarea type="text" value={this.state.value} onChange={this.handleClick}/>
          <input type="submit" value="Submit" />

        </form>

        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);