import {register_request, login_request} from '../constant/constants'
import axios from 'axios';
const apiUrl ='http://localhost:5000/register';
export  const  apiRequest=()=>{
    return{
        type:register_request.REGISTER_REQUEST
    }
}

export const fetchData = (data) => {
    console.log("here is your data...");
  return {
    type: register_request.REGISTER_SUCCESS,
    data
  }
};
export const registerUser = (data) => {
    console.log("################## register data....");
   const  headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'WeLBwoDvI72rHHhXsiT0'
    }
    return (dispatch) => {
        dispatch(apiRequest());
    return axios.post(apiUrl,data, {
         headers:headers
        }).then(response=>{
            dispatch(fetchData(response.data))
        })  
        .catch(error=>{
            throw(error);
        }) 
  };
};
