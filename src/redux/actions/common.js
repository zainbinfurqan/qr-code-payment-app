export const ISERROR = 'ISERROR';
export const ISLOADING = 'ISLOADING';

const action = {};

action.isError = function (data) {
    return async function (dispatch) {
        dispatch({ type: ISERROR, payload: data });
    };
};

action.isLoading = function (flag) {
    return async function (dispatch) {
        dispatch({ type: ISLOADING, payload: flag });
    };
};

export default action
