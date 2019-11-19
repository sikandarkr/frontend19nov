import {combineReducers} from 'redux'
import registerReducer from './registerReducer';
import loginUser from './loginReducer';
import getProfiles from './profilesReducer';
import modalReducer from './modalReducer';
export default combineReducers({
    register:registerReducer,
    login:loginUser,
    profiles:getProfiles,
    modal:modalReducer
});


