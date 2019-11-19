import {profile_request} from '../constant/constants'
const initialState = {
    loading: false,
    data:null
};

export default function getProfiles(state = initialState, action) {
    // let users = action.data;
    switch (action.type) {
        case profile_request.PROFILES_REQUEST:
            return {...action.data, loading:true}
        case profile_request.PROFILES_SUCCESS:
                return { users:action.data, loading: false };
      default:
        return state;
    }
  }

