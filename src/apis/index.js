import helpers from '../utils/helpers'
const api = {};




api.Login = async function (body = null, authorization = null, headers) {
    return await helpers.fetchApi(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/user/login`,
    );
};