/**
 * @fileoverview Rule MD007
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md007
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "unordered list indentation",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md007",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          indent: {
            type: "number",
          },
          start_indented: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD007),
};
