import React, {Component} from 'react';

class Message extends Component {
componentDidMount(){
  let message=this.props.message;

  console.log(":::",message)
}
  render(){
    return (
      <div className="auth-user-message">
          {this.props.message}
      </div>
    )
  }
}
export default Message