/**
 * @fileoverview Rule MD030
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md030
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "spaces after list markers",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md030",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          ul_single: {
            type: "number",
          },
          ol_single: {
            type: "number",
          },
          ul_multi: {
            type: "number",
          },
          ol_multi: {
            type: "number",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD030),
};
