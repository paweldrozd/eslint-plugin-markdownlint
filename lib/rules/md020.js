/**
 * @fileoverview Rule MD020
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md020
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "no space inside hashes on closed atx style heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md020",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD020),
};
