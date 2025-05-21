/**
 * @fileoverview Rule MD037
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md037
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "spaces inside emphasis markers",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md037",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD037),
};
