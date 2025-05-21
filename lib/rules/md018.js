/**
 * @fileoverview Rule MD018
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md018
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "no space after hash on atx style heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md018",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD018),
};
