/**
 * @fileoverview Rule MD050
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md050
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "strong style should be consistent",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md050",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: ["consistent", "asterisk", "underscore"],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD050),
};
