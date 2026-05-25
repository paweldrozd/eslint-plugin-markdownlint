/**
 * @fileoverview Rule MD053
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md053
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "link and image reference definitions should be needed",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md053",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          ignored_definitions: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD053),
};
