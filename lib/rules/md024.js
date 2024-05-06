/**
 * @fileoverview Rule MD024
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md024
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "headings should be surrounded by blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md024",
    },
    schema: [
      {
        type: "object",
        properties: {
          siblings_only: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD024),
};
