import React,{Component} from 'react';
import logo from '../../../../../src/img/appiness-logo.png';
import {FaSistrix,FaCaretDown} from 'react-icons/fa';
import {Row, Col} from 'react-bootstrap';
class NavTablet extends Component{
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
                    <Col xs={3}>Logo</Col>
                    <Col xs={5}>
                        <div className="search-div-tablet">
                            <input className="input-search-tablet" type="text" placeholder="Search"/>
                            <div className="search-btn-tablet"> <FaSistrix className="search-icon-mobile"/></div>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div>
                            <div className="nav-profile">
                                <div><img src={logo} height="30px" width="30px" alt="images"/>Image</div>
                                <div className="nav-dropdown"><FaCaretDown className="c-down" onClick={this.dropDownHandler}/></div>
                            </div>
                        </div>
                    </Col>
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
export default NavTablet;