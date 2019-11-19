// import React,{Component} from 'react';

// class Movies extends Component{

// }

class Movies{
    api(){
        return fetch("https://facebook.github.io/react-native/movies.json").then((res)=>{
            return res.json();
        })
    }
}

export default Movies;