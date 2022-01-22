/**
 * @fileoverview Rule MD004
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md004
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "unordered list style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md004",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: ["consistent", "asterisk", "plus", "dash", "sublist"],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD004),
};
