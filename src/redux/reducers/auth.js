
import {
    SET_USERDATA,
    LOGOUT,
} from '../actions/auth';
const initialState = {
    userData: null,
    isLogin: false,
    apiResponseError: { isError: false, errorMessage: '', flag: '' },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USERDATA:
            return { ...state, userData: action.payload, isLogin: true };
        case LOGOUT:
            return { ...state, userData: null, isLogin: false };
        default:
            return state;
    }
}