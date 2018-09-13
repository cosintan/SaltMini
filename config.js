const CONF = {
    port: '9993',
    ROUTE_BASE_PATH: '/applet',

    cosAppId: '1257176610',
    cosSecretId: 'AKIDdDgz87GWxDIBsNCpmX8YmojU3Qbbh8g2',
    cosSecretKey: 'lRzMYHpBORINLCrKbo4OmX9ZnpgKoIbk',
    cosFileBucket: 'tan-1257176610',
    cosRegion: 'cn-southwest',
    // 文件夹
    cosUploadFolder: '/'
}
// 生成访问 COS 的域名，无需修改
CONF.cosDomain = (() => `https://${CONF.cosFileBucket}.cos.ap-chengdu.myqcloud.com/`)()

module.exports = CONF

