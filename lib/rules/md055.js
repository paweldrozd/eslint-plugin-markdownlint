/**
 * @fileoverview Rule MD055
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md055
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "table pipe style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md055",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: [
              "consistent",
              "leading_only",
              "trailing_only",
              "leading_and_trailing",
              "no_leading_or_trailing",
            ],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD055),
};
