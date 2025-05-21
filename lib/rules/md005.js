/**
 * @fileoverview Rule MD005
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md005
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "heading levels should only increment by one level at a time",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md005",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD005),
};
