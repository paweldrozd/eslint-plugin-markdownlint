/**
 * @fileoverview Rule MD038
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md038
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "spaces inside code span elements",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md038",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD038),
};
