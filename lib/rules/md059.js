/**
 * @fileoverview Rule MD059
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md059
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "link text should be descriptive",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md059",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD059),
};
