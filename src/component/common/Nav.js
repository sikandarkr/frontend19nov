import React, {Component} from 'react';
import first from '../../img/first.gif';
import {Bootstrap, Grid, Row, Col,Container,Button,Form,FormControl,Dropdown,Navbar, Nav, NavItem, NavDropdown, Glyphicon} from 'react-bootstrap';
class NavNoAuth extends Component{
    render(){
        return(
            <Row>
            <Col xs={6}>Logo</Col>
              
            <Col xs={6}>
                <form>
                    <Row>
                        <Col><input onChange={this.props.onChangeHandler} type="email" className="input-login" id="email" placeholder="Username"/></Col>
                        <Col>  <input onChange={this.props.onChangeHandler} type="password"  name="password" id="password"  className="input_login_password" placeholder="Password"/></Col>
                        <Col><button type="button" className="login-submit" onClick={this.props.submitHandler} >Signi In</button> </Col>
                    </Row>
                </form>
               
            </Col>
          
        </Row>
        )
    }
}

export default NavNoAuth;