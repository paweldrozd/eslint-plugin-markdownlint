/**
 * @fileoverview Rule MD026
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md026
 * @author Paweł BB Drozd
 */

"use strict";

const ruleChecker = require("../ruleChecker");
const Rule = require("./rule");

module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "trailing punctuation in heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md026",
    },
    fixable: "code",
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
  create: ruleChecker(Rule.MD026),
};
