const COS = require('cos-nodejs-sdk-v5')
const config = require('../../config')
const cos = new COS({
    //AppId: config.cosAppId,
    SecretId: config.cosSecretId,
    SecretKey: config.cosSecretKey,
});
module.exports = cos;
