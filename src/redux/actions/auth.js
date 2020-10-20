export const SET_USERDATA = 'SET_USERDATA';
export const LOGOUT = 'LOGOUT';

const action = {};

action.saveUserData = function (data) {
    return async function (dispatch) {
        // dispatch({ type: SET_USERDATA, payload: data });
        dispatch({ type: SET_USERDATA, payload: data });
    };
};

action.logout = function (data) {
    return async function (dispatch) {
        // dispatch({ type: SET_USERDATA, payload: data });
        dispatch({ type: LOGOUT, payload: data });
    };
};

export default action
