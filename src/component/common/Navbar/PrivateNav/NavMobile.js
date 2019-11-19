import React,{Component} from 'react';
import logo from '../../../../../src/img/appiness-logo.png';
import {FaSistrix,FaCaretDown} from 'react-icons/fa';
import './privatenav.css';
import { Row, Col} from 'react-bootstrap';
class NavMobile extends Component{
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
                    <Col xs={2}>Logo</Col>
                    <Col xs={9}>
                        <div className="search-div-mobile">
                            <input className="input-search-mobile" type="text" placeholder="Search"/>
                           <div className="search-btn-mobile"> <FaSistrix className="search-icon-mobile"/></div>
                        </div>
                    </Col>
                    <Col xs={1}>
                        <div>
                            <div className="nav-profile">
                                <div className="nav-dropdown"><FaCaretDown className="c-down" onClick={this.dropDownHandler}/></div>
                            </div>
                        </div>
                    </Col>
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
export default NavMobile;