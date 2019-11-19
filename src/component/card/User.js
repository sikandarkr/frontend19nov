import React, {Component} from 'react';
import profile from '../../img/profile.png';
import {FaHeart,FaThumbsDown,FaMoneyCheckAlt, FaCircle,FaRegThumbsUp,FaRegThumbsDown} from 'react-icons/fa';
import './card.css';
class User extends Component{
    render(){
        return(
            <div className="card-container">
            <div className="profile">
                 <img src={this.props.profileUrl} className="img-size"/>
            </div>
                <p className="card-profile-name"><b>{this.props.name}</b></p>
                <span className="domain">Java,Html,Css</span>
                <span className="chat-btn"><button onClick={this.props.startChat}>chat</button></span>
                <div className="user-card-points">
                    <span><FaRegThumbsUp/>{this.props.upvote}</span>
                    <span><FaRegThumbsDown/>{this.props.downvote}</span>
                    <span><FaMoneyCheckAlt/>0.0</span>
                    <span><FaCircle className="online"/></span>
                </div>
            </div>
        )
    }

}

export default User;