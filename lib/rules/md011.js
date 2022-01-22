/**
 * @fileoverview Rule MD011
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md011
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "reversed link syntax",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md011",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD011),
};
