/**
 * @fileoverview Rule MD018
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md018
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "no space after hash on atx style heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md018",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD018),
};
