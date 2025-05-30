/**
 * @fileoverview Rule MD046
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md046
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "code block style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md046",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: ["consistent", "fenced", "indented"],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD046),
};
