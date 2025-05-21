/**
 * @fileoverview Rule MD031
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md031
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "fenced code blocks should be surrounded by blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md031",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          list_items: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD031),
};
