/**
 * @fileoverview Rule MD007
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md007
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "unordered list indentation",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md007",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          indent: {
            type: "number",
          },
          start_indented: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD007),
};
