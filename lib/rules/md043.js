/**
 * @fileoverview Rule MD043
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md043
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "required heading structure",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md043",
    },
    schema: [
      {
        type: "object",
        properties: {
          headings: {
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
  create: ruleChecker(Rule.MD043),
};
