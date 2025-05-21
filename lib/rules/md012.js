/**
 * @fileoverview Rule MD012
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md012
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "multiple consecutive blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md012",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          maximum: {
            type: "number",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD012),
};
