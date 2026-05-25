/**
 * @fileoverview Rule MD052
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md052
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "reference links and images should use a label that is defined",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md052",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          ignored_labels: {
            type: "array",
            items: { type: "string" },
          },
          shortcut_syntax: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD052),
};
