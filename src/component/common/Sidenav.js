import React,{Component} from 'react';
import {Bootstrap, Grid, Row, Col,Container,Button,Form,FormControl,Dropdown,Navbar, Nav, NavItem, NavDropdown, Glyphicon} from 'react-bootstrap';
class Sidenav extends Component{
    render(){
        return(
            <Row>
                <Col xs={3}>Sik</Col>
                <Col xs={9}>{this.props.children}</Col>

            </Row>
        )
    }
}

export default Sidenav;