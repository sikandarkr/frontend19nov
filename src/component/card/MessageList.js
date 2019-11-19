import React, {Component} from 'react';
import './card.css';
import _ from 'lodash';
import Message from './Message';
const messageList=[];
class MessageList extends Component {
    constructor(props){
        super(props);
        this.state = {
          messages: [],
          loading:true
        };
        let app = this.props.db.database().ref('messages');
        if(app){
            console.log("connecting with the particular user......######");
        }
        app.on('value', snapshot => {
          this.getData(snapshot.val());
        });
      }
      componentDidMount(){
          if(this.state.messages.length===0){
            const that  = this;
            let app = this.props.db.database().ref('messages');
            app.once('value',function(snapshot){
                snapshot.forEach(element => {
                let msg=[...that.state.messages,element.val()]
                    that.setState({
                    messages:msg,
                    loading:false
                   }) 
                });  
            })
          }
      }
      componentWillUnmount() {
        this.props.db.database().ref('messages').off();
      }
      getData(values){
        //   values.forEach(element =>{
        //       let msg = [...this.state.message,element.val()]
        //       this.setState({
        //         messages:msg,
        //         loading:false
        //       })
        //   })

        let messagesVal = values
        let messages = _(messagesVal)
                          .keys()
                          .map(messageKey => {
                              let cloned = _.clone(messagesVal[messageKey]);
                              cloned.key = messageKey;
                              return cloned;
                          })
                          .value();
          this.setState({
            messages: messages
          });
        console.log("your database chat value is ", values);
      }
      render() {
       
        return (
          <div>
             {this.state.loading && <div>Loading ...</div>}  
                {
                    this.state.messages.map((item,id)=>
                        <Message message={item.message} />
                    )
                }                
          </div>
        );
      }
}

export default MessageList