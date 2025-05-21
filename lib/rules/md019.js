/**
 * @fileoverview Rule MD019
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md019
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "multiple spaces after hash on atx style heading",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md019",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD019),
};
