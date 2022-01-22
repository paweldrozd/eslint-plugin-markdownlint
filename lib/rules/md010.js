/**
 * @fileoverview Rule MD010
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md010
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "hard tabs",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md010",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          code_blocks: {
            type: "boolean",
          },
          spaces_per_tab: {
            type: "number",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD010),
};
