/**
 * @fileoverview Rule MD024
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md024
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "headings should be surrounded by blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md024",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          siblings_only: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD024),
};
