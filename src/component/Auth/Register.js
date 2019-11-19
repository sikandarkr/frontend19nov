import React,{Component} from 'react';
import first from '../../img/first.gif';
import {connect} from 'react-redux'
import {registerUser} from '../../redux/actions/registerUser';
import {Bootstrap, Grid, Row, Col,Container,Button,Form,FormControl,Dropdown,Navbar, Nav, NavItem, NavDropdown, Glyphicon} from 'react-bootstrap';
class Register extends Component{
    state ={
        name:"",
        email:"",
        password:""
    }
    onChangeHandler = (e) =>{
        this.setState(
            {
                [e.target.id]:e.target.value
            }
        )
    }
    submitHandler = (e) =>{
        e.preventDefault();
        const data = this.state;
        this.props.Register(data);
        console.log("submit handler is working.... ",this.state.name);
    }

    render(){
        console.log(this.props);
        return(
          <Container>
              <Row>
                <Col xs={3} ></Col>
                <Col xs={6}>
                    <div className="text-center create-account-title">Create An Account</div>
                    <div className="register-container">
                    <div className="register-form">
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter displayname" id="name" onChange={this.onChangeHandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id="email"  onChange={this.onChangeHandler}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            {this.props.data.loading? <img className="spinner-gif" src={first} />:null}
                            {this.props.login.loading? <img className="spinner-gif" src={first} />:null}
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" id="password" onChange={this.onChangeHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" id="confirmpassword" onChange={this.onChangeHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="User Agreement" />
                            </Form.Group>
                            <Button variant="primary submit-form"  block onClick={this.submitHandler}>
                                Sign Me Up
                            </Button>
                        </Form>
                    </div>
                   <div className="nothing"></div>
                    </div>
                   
                </Col>
                <Col xs={3}></Col>
              </Row>
          </Container>
           
        )
        
    }
       
    
}
const mapStateToProps = (state) => {
    return {
      data:state.register,
      login:state.login
    }
  }
    function mapDispatchToProps(dispatch) {
        return({
            Register: (data) => {dispatch(registerUser(data))}
        })
    }
export default connect(mapStateToProps, mapDispatchToProps)(Register);
