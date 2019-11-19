import React, {Component} from 'react';
import trim from 'trim';
import socketConnection from  '../utilities/socketConnection'
import {FaTimes,FaWindowMinimize, FaTelegramPlane,FaPaperclip} from 'react-icons/fa';
class MessageBox extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      message: ''
    };     
  }
  onChange(e){
      this.setState({
        message: e.target.value
      });
  }
  sendMessage =(e) =>{
    this.socket.emit('add-message',"hiiii");
  }
  render() {
    return (
    <div className="chat-head">
        <div className="chat-footer">
            <div className="chat-input-container">
                <input type="text" className="chat-input-field" placeholder="Type here..."
                    onChange={this.onChange}
                    value={this.state.message}
                />
            </div>
            <div className="chat-message-send-icon-container">
                <FaPaperclip className="chat-attachment-icon"/>
                <FaTelegramPlane className="chat-send-icon" onClick={this.sendMessage}/>
            </div>
        </div>
    </div>      
    )
  }
}

export default MessageBox