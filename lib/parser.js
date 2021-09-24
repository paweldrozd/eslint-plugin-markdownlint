const espree = require('espree');

exports.parseForESLint = function (code, options) {
  return {
    ast: espree.parse('', options),
    scopeManager: null,
    visitorKeys: null,
  };
};
