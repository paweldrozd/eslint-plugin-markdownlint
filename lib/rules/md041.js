/**
 * @fileoverview Rule MD041
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md041
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "first line in a file should be a top-level heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md041",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          level: {
            type: "number",
          },
          front_matter_title: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD041),
};
