import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FlavorForm extends Component{
  constructor (props) {
    super(props);
    this.state = { value: 'coconut'};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      
        <h2>You have selected the <i>{this.state.value}</i> flavour</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);