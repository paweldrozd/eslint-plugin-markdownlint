/**
 * @fileoverview Rule MD036
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md036
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "emphasis used instead of a heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md036",
    },
    schema: [
      {
        type: "object",
        properties: {
          punctuation: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD036),
};
