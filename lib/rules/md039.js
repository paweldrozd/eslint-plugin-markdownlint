/**
 * @fileoverview Rule MD039
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md039
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "spaces inside link text",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md039",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD039),
};
