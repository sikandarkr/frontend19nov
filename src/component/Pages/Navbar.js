import React,{Component} from 'react';
import { Redirect,withRouter } from 'react-router-dom';
import first from '../../img/first.gif';
import {Bootstrap, Grid, Row} from 'react-bootstrap';
import {Link, Router, Route} from "react-router";
import {connect} from 'react-redux'
import {loginUser} from '../../redux/actions/loginUser';
import NavDesktop from '../../component/common/Navbar/PrivateNav/NavDesktop';
import NavMobile from '../../component/common/Navbar/PrivateNav/NavMobile';
import NavTablet from '../../component/common/Navbar/PrivateNav/NavTablet';
import NavThinkpad from '../../component/common/Navbar/PrivateNav/NavThinkpad'
import {Desktop, Mobile, Tablet, ThinkPad, Default} from '../../component/common/Devices';
import NavNoAuth from '../../component/common/Nav';
import logo from '../../img/appiness-logo.png';
import _ from 'loadsh';
class TopNavbar extends Component{
    state = {
        email:"",
        password:""
    }
    componentDidMount(){
        document.body.addEventListener('click', this.myHandler);
    }
    myHandler = () =>{
        console.log("hhhhhh...................");
    }
    onChangeHandler = (e) =>{
        this.setState({
           [e.target.id] :e.target.value
        })
    }
    onSearch = () =>{
        console.log("clicked search.........");
    }
    
    submitHandler =() =>{
        const data = this.state;
        this.props.Login(data, this.props.history);
    }
    LogoutHandler = () =>{
        localStorage.removeItem('Authorization');
        this.props.history.push('/login');
    }
    render(){
        let name = localStorage.getItem("displayName");
        let profileUrl = localStorage.getItem("profileImage");
        return(
           <div className="navbar-top">       
              {
                   localStorage.getItem("Authorization")?(
                       <div>
                            <Desktop>
                                <NavDesktop
                                    onSearch={this.onSearch}
                                    Logout={this.LogoutHandler}
                                    name={name}
                                    profileUrl={profileUrl}
                                />
                            </Desktop>
                            <Mobile>
                                <NavMobile
                                    onSearch={this.onSearch}
                                    Logout={this.LogoutHandler}
                                />
                            </Mobile>
                            <Tablet>
                                <NavTablet
                                    onSearch={this.onSearch}
                                    Logout={this.LogoutHandler}
                                />
                            </Tablet>
                            <ThinkPad>
                                <NavThinkpad
                                    onSearch={this.onSearch}
                                    Logout={this.LogoutHandler}
                                />
                            </ThinkPad>
                        </div>
                   ):(
                        <NavNoAuth
                            onChangeHandler={this.onChangeHandler}
                            submitHandler={this.submitHandler}
                            Logout={this.LogoutHandler}
                        /> 
                   )
              }  
                 {this.props.children}
           </div>
                
        )
    }
}
const mapStateToProps = state => ({
    data: state.login  
});
const mapDispatchToProps = function(dispatch) {
  return ({
    Login: (data, browserHistory) => {dispatch(loginUser(data, browserHistory))}
  })
};
export default connect(mapStateToProps,mapDispatchToProps)(TopNavbar);
