/**
 * @fileoverview Rule MD056
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md056
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "table column count",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md056",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD056),
};
