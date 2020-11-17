
import {
    ISERROR,
    ISLOADING,
    ISSUCCESS
} from '../actions/common';
const initialState = {
    error: {
        isError: false,
        text: ''
    },
    success: {
        isSuccess: false,
        text: ''
    },
    isLoadin: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ISERROR:
            return { ...state, error: action.payload, };
        case ISLOADING:
            return { ...state, isLoadin: action.payload, };
        case ISSUCCESS:
            return { ...state, success: action.payload, };
        default:
            return state;
    }
}