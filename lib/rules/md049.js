/**
 * @fileoverview Rule MD049
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md049
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "emphasis style should be consistent",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md049",
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
  create: ruleChecker(Rule.MD049),
};
