/**
 * @fileoverview Rule MD047
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md047
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "files should end with a single newline character",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md047",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD047),
};
