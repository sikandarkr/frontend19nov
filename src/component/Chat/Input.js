    import React, {Component} from 'react';
    import './chat.css';
    class Input extends Component {
        constructor(props) {
            super(props);
            this.state = {
                message: ""
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(e) {
            this.setState({
                message: e.target.value
            })
        }
        handleSubmit(e) {
            e.preventDefault();
            this.props.onSubmit(this.state.message);
            this.setState({
                message: ''
            })
        }
        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input className="message-input" type="text" placehoder="type your message" onChange={this.handleChange} value={this.state.message}/>
                        <input className="message-submit" type="submit" value="send" /> 
                    </div> 
                </form>    
            )
        }
    }
    export default Input;