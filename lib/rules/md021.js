/**
 * @fileoverview Rule MD021
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md021
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "multiple spaces inside hashes on closed atx style heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md021",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD021),
};
