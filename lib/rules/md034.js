/**
 * @fileoverview Rule MD034
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md034
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "bare URL used",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md034",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD034),
};
