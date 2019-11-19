import {chat_request} from '../constant/constants'
const initialState = {
    show: false,
    data:null,
    loading:false
};
function openModal(state = initialState, action) {
    switch (action.type) {
        case chat_request.OPEN_MODAL_REQUEST:
            return {...action.data, loading:true}
        case chat_request.OPEN_MODEL_SUCCESS:
                return { ...action.data, loading: false, show:true };
        case chat_request.HIDE_MODEL:
                return { ...action.data, show:false };
      default:
        return state;
    }
}
export default openModal;


