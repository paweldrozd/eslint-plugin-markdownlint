/**
 * @fileoverview Rule MD054
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md054
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "link and image style",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md054",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          autolink: { type: "boolean" },
          inline: { type: "boolean" },
          full: { type: "boolean" },
          collapsed: { type: "boolean" },
          shortcut: { type: "boolean" },
          url_inline: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD054),
};
