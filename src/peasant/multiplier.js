var _ = require("underscore");
var logger = require('./logger');
var peasant = require('./peasant');

function multiplier(x, y) {
  var col = [];

  logger.verbose('-- initial steps:');
  col = peasant.generate(x, y);
  _.each(col, logger.verbose);

  logger.verbose('-- pick odd pairs');
  col = peasant.pick(col);
  _.each(col, logger.verbose);

  logger.verbose('-- sum up:');
  var res = peasant.sum(col);
  logger.verbose(res);

  return res;
}

module.exports = multiplier;
