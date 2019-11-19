import React,{Component} from 'react';
import logo from '../../../../../src/img/appiness-logo.png';
import {FaSistrix,FaAngleDown,FaBookmark, FaShoppingBag, FaCaretDown} from 'react-icons/fa';
import {Row, Col} from 'react-bootstrap';
class NavThinkpad extends Component{
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
    render(){
        return(
            <div>
            <Row>
            <Col xs={1}>Logo</Col>
            <Col xs={4}>
                <div className="search-div-desktop">
                    <input className="input-search-desktop" type="text" placeholder="Search"/>
                    <div className="search-btn-desktop"> <FaSistrix className="search-icon-mobile"/></div>
                   
                </div>
            </Col>
            <Col xs={2}>
                <div>
                    <div className="nav-profile">
                        <div><img src={logo} height="30px" width="30px" alt="logo"/><span className="profile-name">Sikandar</span></div>
                    </div>
                </div>
            </Col>
            <Col xs={2}>
                <button className="button-bookmark"><FaBookmark className="bookmark"/><span className="menu-title">Bookmarks</span></button>
            </Col>
            <Col xs={2}>
                <button className="button-bookmark"><FaShoppingBag className="bookmark"/> <span className="menu-title">Jobs</span></button>
            </Col>
            <Col xs={1}><FaCaretDown className="c-down"  onClick={this.dropDownHandler} className="c-down"/> </Col>
        </Row>
            {this.state.show?(
                <div className="dropdown-custom-tablet">
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
export default NavThinkpad;