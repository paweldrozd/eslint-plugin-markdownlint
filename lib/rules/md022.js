/**
 * @fileoverview Rule MD022
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md022
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "headings should be surrounded by blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md022",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          lines_above: {
            type: "number",
          },
          lines_below: {
            type: "number",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD022),
};
