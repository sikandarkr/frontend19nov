import React, {Component} from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import {connect} from 'react-redux'
import Input from './Input';
import MessageList from './MessageList';
import './chat.css';
class ChatApp extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                currentUser: null,
                currentRoom: { users: [] },
                messages: [],
                users: []
            }
            this.addMessage = this.addMessage.bind(this);
    }
    componentDidMount() {
        console.log("your room Id is..###", this.props.modal.roomId);
        const roomId = this.props.modal.roomId;
        const userId = this.props.modal.data.authuserId
        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:7eaec858-7b94-4970-9e84-e1e9f7c53d62",
            userId:''+userId,
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/7eaec858-7b94-4970-9e84-e1e9f7c53d62/token"
            })
        })
         chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser: currentUser })
                return currentUser.subscribeToRoom({
                    roomId: ""+roomId,
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                    }
                })
            })
            .then(currentRoom => {
                this.setState({
                    currentRoom,
                    users: currentRoom.userIds
                })
            })
            .catch(error => console.log(error))
    }
    addMessage(text) {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
        .catch(error => console.error('error', error));
    }        
    render() {
        return (
            <div className="chat-app">
                <MessageList messages={this.state.messages} />
                <Input  onSubmit={this.addMessage} />
              
            </div>
        )
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

export default connect(mapStateToProps,null)(ChatApp);

