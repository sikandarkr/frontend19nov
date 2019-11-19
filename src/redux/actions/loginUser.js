import {login_request} from '../constant/constants'
import axios from 'axios';
const apiUrl ='http://localhost:5000/login';
export  const  apiRequest=()=>{
    return{
        type:login_request.LOGIN_REQUEST
    }
}
export const fetchData = (data) => {
  return {
    type: login_request.LOGIN_SUCCESS,
    data
  }
};
export const loginUser = (data, browserHistory) => {
   const  headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'WeLBwoDvI72rHHhXsiT0'
    }
    return (dispatch) => {
        dispatch(apiRequest());
    return axios.post(apiUrl,data, {
         headers:headers
        }).then(response=>{
          if(response.data.message==="success"){
               dispatch(fetchData(response.data))
                localStorage.setItem('displayName',response.data.name);
                localStorage.setItem('profileImage',response.data.profileUrl)
                localStorage.setItem("Authorization",response.data.token);
                localStorage.setItem("authuserId",response.data.id);
                browserHistory.push('/profile');
          }
        })  
        .catch(error=>{
            throw(error);
        }) 
  };
};
