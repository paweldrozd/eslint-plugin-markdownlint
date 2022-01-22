/**
 * @fileOverview All rules disabled object.
 * @author Paweł BB Drozd
 */

"use strict";

const Rule = require("../rules/rule");

module.exports = Object.values(Rule).reduce((o, key) => {
  o[key] = false;
  return o;
}, {});
