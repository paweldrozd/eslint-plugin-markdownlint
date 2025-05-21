/**
 * @fileoverview Rule MD023
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md023
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "headings must start at the beginning of the line",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md023",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD023),
};
