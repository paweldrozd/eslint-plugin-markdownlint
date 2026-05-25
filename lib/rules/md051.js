/**
 * @fileoverview Rule MD051
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md051
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "link fragments should be valid",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md051",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          ignore_case: {
            type: "boolean",
          },
          ignored_pattern: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD051),
};
