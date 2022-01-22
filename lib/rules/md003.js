/**
 * @fileoverview Rule MD003
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md003
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "heading style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md003",
    },
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: [
              "consistent",
              "atx",
              "atx_closed",
              "setext",
              "setext_with_atx",
              "setext_with_atx_closed",
            ],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD003),
};
