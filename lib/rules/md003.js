/**
 * @fileoverview Rule MD003
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md003
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "heading style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md003",
    },
    fixable: "code",
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
