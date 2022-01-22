/**
 * @fileoverview Rule MD031
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md031
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "fenced code blocks should be surrounded by blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md031",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          list_items: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD031),
};
