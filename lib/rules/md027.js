/**
 * @fileoverview Rule MD027
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md027
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "multiple spaces after blockquote symbol",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md027",
    },
    fixable: "whitespace",
    schema: [],
  },
  create: ruleChecker(Rule.MD027),
};
