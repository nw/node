var path = require("path");

exports.testDir = path.dirname(__filename);
exports.fixturesDir = path.join(exports.testDir, "fixtures");
exports.libDir = path.join(exports.testDir, "../lib");
exports.PORT = 12346;

require.paths.unshift(exports.libDir);

var assert = require('assert');
var sys = require("sys");

process.mixin(exports, sys);
exports.assert = require('assert');