'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@octokit/core');
var pluginRequestLog = require('@octokit/plugin-request-log');
var pluginPaginateRest = require('@octokit/plugin-paginate-rest');
var pluginRestEndpointMethods = require('@octokit/plugin-rest-endpoint-methods');

const VERSION = "18.0.4";

const Octokit = core.Octokit.plugin(pluginRequestLog.requestLog, pluginRestEndpointMethods.restEndpointMethods, pluginPaginateRest.paginateRest).defaults({
  userAgent: `octokit-rest.js/${VERSION}`
});

exports.Octokit = Octokit;
//# sourceMappingURL=index.js.map
