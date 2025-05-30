/**
 * @fileoverview Rule MD048
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md048
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "code block style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md048",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: ["consistent", "tilde", "backtick"],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD048),
};
