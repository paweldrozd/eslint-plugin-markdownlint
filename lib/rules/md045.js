/**
 * @fileoverview Rule MD045
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md045
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "images should have alternate text (alt text)",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md045",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD045),
};
