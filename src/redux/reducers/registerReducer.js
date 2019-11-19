import {register_request, login_request} from '../constant/constants'
const initialState = {
    loading: false,
    data:null
};


export default function registerUser(state = initialState, action) {
    // let users = action.data;
    switch (action.type) {
        case register_request.REGISTER_REQUEST:
            return {...action.data, loading:true}
        case register_request.REGISTER_SUCCESS:
                return { ...state, users:action.data, loading: false };
      default:
        return state;
    }
  }

