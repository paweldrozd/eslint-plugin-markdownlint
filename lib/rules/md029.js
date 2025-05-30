/**
 * @fileoverview Rule MD029
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md029
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "ordered list item prefix",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md029",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: ["one", "ordered", "one_or_ordered", "zero"],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD029),
};
