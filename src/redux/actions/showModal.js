// import {chat_request} from '../constant/constants'
// import axios from 'axios';
// export const showWindow = (data) => dispatch => {
//     console.log("modal data ##########", data);
//   dispatch({
//     type: chat_request.OPEN_MODEL,
//     data,
//   });
// }

// export const hideWindow = (data) => dispatch => {
//     console.log("actions from hide window ##########");
//   dispatch({
//     type: chat_request.HIDE_MODEL,
//     data
//   });
// }
import {chat_request} from '../constant/constants'
import axios from 'axios';
const apiUrl ='http://localhost:5000/start';
export const hideWindow = (data) => dispatch => {
  dispatch({
    type:chat_request.HIDE_MODEL,
    data
  });
}

export  const  apiRequest=(data)=>{
  return{
      type:chat_request.OPEN_MODAL_REQUEST,
      data
  }
}

export const createChatId = (data) => {
    // console.log("your chat id ", data);
    return {
      type:chat_request.OPEN_MODEL_SUCCESS,
      data
    }
};

export const showWindow = (data) => {
  const  headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'WeLBwoDvI72rHHhXsiT0'
  }
  return (dispatch) => {
      dispatch(apiRequest(data));
    return axios.post(apiUrl,data, {
      headers:headers
     }).then(response=>{
        dispatch(createChatId(response.data));
        //console.log("your response from server....", response);
     })
  }
}