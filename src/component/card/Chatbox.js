import React,{Component} from 'react';
import profile from '../../img/profile.png';
import {Bootstrap, Grid, Row} from 'react-bootstrap';
import openSocket from "socket.io-client";
import './card.css';
import firebase from 'firebase';
import MessageList from './MessageList';
import MessageBox from './MessageBox';
import {FaTimes,FaWindowMinimize} from 'react-icons/fa';
import {connect} from 'react-redux';
import {firebaseApp} from '../utilities/firebaseconfig'
class Chatbox extends Component{
    constructor(props){
        super(props);
    //     this.socket = openSocket("http://localhost:5000/",{
    //       query: `userId='122'`,
    //   });
    } 
    
    render(){
        return(
            <div className="chatbox">
                <div className="chat-head">
                        <div className="chat-header">
                                {this.props.modal.userName?<div><img src={this.props.modal.profilePic} height="60px" width="50px" className="chat-image"/><span className="chatbox-user-name">&nbsp;&nbsp;{this.props.modal.userName} </span></div>:null}
                                <div className="chat-window-header-right">
                                    <FaWindowMinimize />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <FaTimes onClick={this.props.closeChat} className="close-chat-box-icon"/>
                                </div>
                        </div>
                </div>
                <div className="chat-message-box"> 
                        <div className="guest-user-message">
                            guest user
                        </div>
                </div>
                <MessageBox 
               
                />
                {/* <div className="message-loading"><p>Loading</p></div> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      login:state.login,
      modal:state.modal
    }
  }

export default connect(mapStateToProps, null)(Chatbox);

