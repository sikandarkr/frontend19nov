import {profile_request} from '../constant/constants'
import axios from 'axios';
const apiUrl ='http://localhost:5000/profiles';
export  const  apiRequest=()=>{
    return{
        type:profile_request.PROFILES_REQUEST
    }
}

export const fetchData = (data) => {
    console.log("here is your data...",data);
  return {
    type: profile_request.PROFILES_SUCCESS,
    data
  }
};

export const getProfiles = (data) => {
    const  headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'WeLBwoDvI72rHHhXsiT0',
        'x-access-token':localStorage.getItem("Authorization")
    }
    return (dispatch) => {
        dispatch(apiRequest());
    return axios.get(apiUrl,{
         headers:headers,
         data:data
        }).then(response=>{
            dispatch(fetchData(response.data))
        })  
        .catch(error=>{
            throw(error);
        }) 
  };
};
