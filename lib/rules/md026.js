/**
 * @fileoverview Rule MD026
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md026
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "trailing punctuation in heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md026",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          punctuation: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD026),
};
