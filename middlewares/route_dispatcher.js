/**
 * 通用路由分发器
 */

const express = require('express');
const path = require('path');
const _ = require('lodash');
const config = require('../config');
const routes = require('../routes');

const routeOptions = { 'caseSensitive': true, 'strict': true };
const routeDispatcher = express.Router(routeOptions);

require(path.join(global.SERVER_ROOT, 'routes', 'album/routehub'))(routeDispatcher);

module.exports = routeDispatcher;