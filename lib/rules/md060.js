/**
 * @fileoverview Rule MD060
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md060
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "table column style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md060",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          style: {
            enum: ["any", "aligned", "compact", "tight"],
          },
          aligned_delimiter: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD060),
};
