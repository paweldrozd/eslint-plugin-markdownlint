/**
 * @fileoverview Rule MD033
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md033
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
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
