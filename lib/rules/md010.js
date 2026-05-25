/**
 * @fileoverview Rule MD010
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md010
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "hard tabs",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md010",
    },
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          code_blocks: {
            type: "boolean",
          },
          ignore_code_languages: {
            type: "array",
            items: { type: "string" },
          },
          spaces_per_tab: {
            type: "number",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD010),
};
