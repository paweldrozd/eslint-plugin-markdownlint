/**
 * @fileoverview Rule MD028
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md028
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "blank line inside blockquote",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md028",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD028),
};
