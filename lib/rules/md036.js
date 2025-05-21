/**
 * @fileoverview Rule MD036
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md036
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "emphasis used instead of a heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md036",
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
  create: ruleChecker(Rule.MD036),
};
