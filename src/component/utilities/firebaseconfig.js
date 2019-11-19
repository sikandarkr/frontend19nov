import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDf2Frsr564Np_op0UExdH0UFmVGt4zpk0",
    authDomain: "testexample-70c01.firebaseapp.com",
    databaseURL: "https://testexample-70c01.firebaseio.com",
    projectId: "testexample-70c01",
    storageBucket: "testexample-70c01.appspot.com",
    messagingSenderId: "12347033372",
    appId: "1:12347033372:web:6c4fbbae2eb353fa7b9cd9",
    measurementId: "G-MXNGEP6MSB"
};
export function firebaseApp(){
    try {
        firebase.initializeApp(config)
       
    }
    catch(err){
        console.log("already initilized the firebase....");
    }
    return firebase;
}

