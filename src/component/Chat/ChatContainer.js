import React, { Component } from 'react';
import { default as Chatkit } from '@pusher/chatkit-server';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import {connect} from 'react-redux'
import ChatApp from './ChatApp';
import Header from './Header';
import './chat.css';
    const chatkit = new Chatkit({
      instanceLocator: "v1:us1:7eaec858-7b94-4970-9e84-e1e9f7c53d62",
      key: "d69326e1-f693-40d4-b3bc-4e7f7f64e470:+tt0M2bW3ZtIvD5XpRrdsWgHgA3BeLbzUqU3h6MpAYQ="
    })
    class ChatContainer extends Component {
      constructor(props) {
          super(props);
          this.state = {
               
          }
      }
      
    createUser(username) {
       
    }

    changeView(view) {
        this.setState({
            currentView: view
        })
    }

      render() {
            let view ='';
            return (
                <div className="chat-container">
                    <Header />
                   <ChatApp />
                </div>
            );
        }
    }
    const mapStateToProps = (state) => {
        return {
          data:state.searchData,
          login:state.login,
          profiles:state.profiles,
          modal:state.modal
        }
    }
export default connect(mapStateToProps,null)(ChatContainer);
