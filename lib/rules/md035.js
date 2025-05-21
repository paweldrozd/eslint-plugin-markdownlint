/**
 * @fileoverview Rule MD035
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md035
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "horizontal rule style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md035",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: ["consistent", "---", "***"],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD035),
};
