const COS = require('cos-nodejs-sdk-v5')
const config = require('../../config')
const cos = new COS({
    //AppId: config.cosAppId,
    SecretId: config.cosSecretId,
    SecretKey: config.cosSecretKey,
});
module.exports = cos;

/*
const COS = require('cos-nodejs-sdk-v5')
const _cosConfig = require('cos-nodejs-sdk-v5/sdk/config')
const config = require('../../config')

_cosConfig.setAppInfo(config.cosAppId, config.cosSecretId, config.cosSecretKey);

module.exports = COS
*/
