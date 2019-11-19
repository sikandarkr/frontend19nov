import openSocket from "socket.io-client";


class socketConnection {
    establishSocketConnection(userId) {
        try {
                this.socket = openSocket("http://localhost:5000/",{
                query: `userId=${userId}`,
            });
        } catch(error) {
            alert(`Something went wrong; Can't connect to socket server`);
        }

        this.socket.emit('add-message',"hiiiiiiii");
    }   
    sendMessage(message) {
        console.log("here is your message .... ", message);
        this.socket.emit('add-message', message);
    }
    receiveMessage() {
        this.socket.on('message-response', (data) => {
            this.eventEmitter.emit('message-response', data);
        });
    }

}

export default new socketConnection()