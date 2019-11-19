import openSocket from "socket.io-client";
import React,{Component} from 'react';
import {Bootstrap, Grid, Row,Container,Col} from 'react-bootstrap';
import {connect} from 'react-redux'
import socketConnection from '../utilities/socketConnection';
import {getProfiles} from '../../redux/actions/profile'
import {showWindow, hideWindow} from '../../redux/actions/showModal';
import ChatContainer from '../Chat/ChatContainer';
import User from '../card/User';
import Chatbox from '../card/Chatbox';
import trim from 'trim';
class Profiles extends Component{
  constructor(){
    super();
    this.state = {
        searchData: [],
        show:false

    }
}
async componentDidMount(){
  if(this.props.login.users){
    socketConnection.establishSocketConnection(this.props.login.users.id);
    //  this.socket = openSocket("http://localhost:5000/",{
    //       query: `userId=${this.props.login.users.id}`,
    //   }
    //   );
  }

   await this.props.Profiles();
      await this.setState({
        searchData:this.props.profiles
      })
     
  }
  showModal= (object) =>{
    // console.log("your object data", object);
    // this.setState({
    //   show:true
    // })
    let obj = {
              "userName":object.name, "profilePic":object.url,"userId":object.id,
              "socketId":object.socketId,"authuserId":object.authuserId
            }
    this.props.showWindow(obj);
  }
  hideModal = () =>{
    let  data ={isOpen:false};
    this.props.hideWindow(data);
  }
    render(){
      let {searchData}= this.state;
      console.log("your data ", searchData.users);
        return(
            <Container>
              <Row>
                <Col xs={1}/>
                <Col xs={8}>
                  <Container>
                     {
                       this.props.profiles.users?<Row>
                         {this.props.profiles.users.data.map((i,j)=>{
                           return <Col xs={6}> 
                                      <User
                                        upvote={i.upvote}
                                        downvote={i.downvote}
                                        profileUrl={i.profileUrl}
                                        name={i.name}
                                        id={i.socketId}
                                        startChat= {
                                              () => this.showModal({ 
                                                      "name":i.name,
                                                      "url":i.profileUrl,
                                                      "id":i._id,
                                                      'socketId':i.socketId,
                                                      'authuserId':localStorage.getItem("authuserId")
                                                    }
                                              )}
                                      />
                                  </Col>
                         })}
                       </Row>:<p>no</p>
                     }
                  </Container>
                </Col>
                <Col xs={1}/>
              </Row>
              {/* {this.props.modal.show?<Chatbox closeChat ={this.hideModal} />:null} */}
              {/* <ChatContainer/> */}
            
              {this.props.modal.show?<ChatContainer closeChat ={this.hideModal} />:null}

              {/* {this.state.show?<Chatbox closeChat ={this.hideModal} />:null} */}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      data:state.searchData,
      login:state.login,
      profiles:state.profiles,
      modal:state.modal
    }
  }
    function mapDispatchToProps(dispatch) {
        return({
            Profiles: (data) => {dispatch(getProfiles(data))},
            showWindow:(data) =>{dispatch(showWindow(data))},
            hideWindow:(data) =>{dispatch(hideWindow(data))}
        })
    }
export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
