/**
 * @fileoverview Rule MD032
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md032
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "lists should be surrounded by blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md032",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD032),
};
