import React,{Component} from 'react';
import logo from '../../../../../src/img/appiness-logo.png';
import {FaSistrix,FaAngleDown,FaBookmark, FaShoppingBag, FaCaretDown} from 'react-icons/fa';
import {Row, Col} from 'react-bootstrap';
class NavDesktop extends Component{
    state = {
        show:false
    }
    
    dropDownHandler = () =>{
        this.setState(
            {
                show:!this.state.show
            }
        )
    }
    myHandler() {
        alert('click');
    }
    render(){
        return(
            <div>
               
            <Row>
            <Col xs={1}>Logo</Col>
            <Col xs={4}>
                <div className="search-div-desktop">
                    <input className="input-search-desktop" type="text" placeholder="Search"/>
                    <div className="search-btn-desktop" onClick={this.props.onSearch}> <FaSistrix className="search-icon-mobile"/></div>
                   
                </div>
            </Col>
            <Col xs={1}>
                <div>
                    <div className="nav-profile">
                        <div>{this.props.profileUrl?<img src={this.props.profileUrl} height="30px" width="30px" alt="logo" className="nav-profile-image"/>:<span>loading</span>} {this.props.name?<span className="profile-name">{this.props.name}</span>:<span>loading</span>}</div>
                    </div>
                </div>
            </Col>
            <Col xs={2}>
                <button className="button-bookmark"><FaBookmark className="bookmark"/><span className="menu-title"> My Bookmarks</span></button>
            </Col>
            <Col xs={1}>
                <button className="button-bookmark"><FaShoppingBag className="bookmark"/> <span className="menu-title">Jobs</span></button>
            </Col>
            <Col xs={2}><FaCaretDown className="c-down" onClick={this.dropDownHandler}/> </Col>
        </Row>
        {this.state.show?(
            <div className="dropdown-custom">
            <ul className="list-item">
            <li className="item">Login:{localStorage.getItem('displayName')}</li>
                <li className="item">Settings</li>
                <li className="item">Q AND A</li>
                <li className="item">Manage Account</li>
                <li className="item">About Us</li>
                <li className="item" onClick={this.props.Logout}>Logout</li>
            </ul>
        </div>
        ):null}
        
                
            </div>
        )
    }
}
export default NavDesktop;