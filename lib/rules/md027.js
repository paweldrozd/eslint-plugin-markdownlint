/**
 * @fileoverview Rule MD027
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md027
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "multiple spaces after blockquote symbol",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md027",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD027),
};
