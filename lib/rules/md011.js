/**
 * @fileoverview Rule MD011
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md011
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "reversed link syntax",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md011",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD011),
};
