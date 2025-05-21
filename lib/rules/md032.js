/**
 * @fileoverview Rule MD032
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md032
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "lists should be surrounded by blank lines",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md032",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD032),
};
