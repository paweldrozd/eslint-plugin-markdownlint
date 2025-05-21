/**
 * @fileoverview Rule MD044
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md044
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "proper names should have the correct capitalization",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md044",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          names: {
            type: "array",
            items: {
              type: "string",
            },
          },
          code_blocks: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD044),
};
