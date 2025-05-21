/**
 * @fileoverview Rule MD025
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md025
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "headings should be surrounded by blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md025",
    },
    fixable: "whitespace",
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
  create: ruleChecker(Rule.MD025),
};
