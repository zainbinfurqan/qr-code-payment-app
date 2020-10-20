import helpers from '../utils/helpers'
const api = {};




api.Login = async function (body = null, authorization = null, headers) {
    return await helpers.fetchApi(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/auth/login`,
    );
};


api.Registration = async function (body = null, authorization = null, headers) {
    return await helpers.fetchApi(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/auth/registration`,
    );
};


api.AddAmountInAccount = async function (body = null, authorization = null, headers) {
    return await helpers.fetchApi(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/wallet/add`,
    );
};

api.PurchaseProduct = async function (body = null, authorization = null, headers) {
    return await helpers.fetchApi(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/purchase/product`,
    );
};

api.CheckQRCodeExpire = async function (body = null, authorization = null, headers) {
    return await helpers.fetchApi(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/qr-code/isvalid`,
    );
};
api.getWalletAmount = async function (body = null, authorization = null, headers) {
    return await helpers.fetchApi(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/wallet`,
    );
};