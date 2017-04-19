import React from 'react';
import ReactDOM from 'react-dom';

function ClearButton(props) {
  return (
    <button onClick={props.onClick}>
      Clear
    </button>
  );
}
function AddMails(props) {
  return (
    <button onClick={props.onClick}>
      Add New Mail
    </button>
  );
}

class MailBox extends React.Component {
  constructor (props) {
    super(props);
    this.clearPlate = this.clearPlate.bind(this);
    this.addMails = this.addMails.bind(this);
    this.state = {unreadMessages : props.unreadMessages};
  }
  
  addMails () {
    this.setState((prevState) => ({
      unreadMessages: prevState.unreadMessages + 1
    }));
  }
  clearPlate () {
    this.setState({unreadMessages : []});
  }

  render () {
    let buttonClear = null;
    let buttonAdd = null;
    if (this.state.unreadMessages.length > 0) {
      buttonClear = <ClearButton onClick={this.clearPlate} />;
    } 
    buttonAdd = <AddMails onClick={this.addMails} />;
    
    return (
      <div>
      <h1>Hello!</h1>
        {this.state.unreadMessages.length > 0 &&
          <div>
            <h2>
              You have {this.state.unreadMessages.length} unread messages.
            </h2>
            
          </div>
        }
        {this.state.unreadMessages.length === 0 &&
          <h2>
            You have {this.state.unreadMessages.length} mails in your plate.
          </h2>
        }
        {buttonClear}
        {buttonAdd}
      </div>
    );
  }
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <MailBox unreadMessages={messages}/>,
  document.getElementById('root')
);
