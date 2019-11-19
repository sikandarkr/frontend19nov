import React, {Component} from 'react';
import {FaTimes,FaWindowMinimize} from 'react-icons/fa';
import profile from '../../img/profile.png';
import './chat.css';
class Header extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            currentUser: null,
            currentRoom: { users: [] },
            messages: [],
            users: []
        }
       
    }
    componentDidMount() {
       
    }
    render(){
        return(
            <div className="header">
                    <div className="image" ><img src={profile} className="chat-image"/>&nbsp;&nbsp;<span className="chat-name">Sikandar</span></div>
                    <div className="minimise-window"><FaWindowMinimize className="minimize"/></div>
                    <div className="close-window"><FaTimes className="end"/></div>
            </div>
        )
    }

}

export default Header;