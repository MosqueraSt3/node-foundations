const { getAge }  = require('./get-age.plugin')
const { getUUID } = require('./get-id.plugin')
const { httpClientPlugin } = require('./http-client.plugin')
const buildLogger = require('./logger.plugin')

module.exports = {
    httpClientPlugin,
    getAge,
    getUUID,
    buildLogger,
}