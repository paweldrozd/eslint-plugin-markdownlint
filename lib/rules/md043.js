/**
 * @fileoverview Rule MD043
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md043
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "required heading structure",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md043",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          headings: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD043),
};
