/**
 * @fileoverview Rule MD028
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md028
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "blank line inside blockquote",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md028",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD028),
};
