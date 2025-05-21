/**
 * @fileoverview Rule MD033
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md033
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "inline HTML",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md033",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          allowed_elements: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD033),
};
