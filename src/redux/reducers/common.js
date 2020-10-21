
import {
    ISERROR,
    ISLOADING,
} from '../actions/common';
const initialState = {
    error: {
        isError: false,
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
        default:
            return state;
    }
}