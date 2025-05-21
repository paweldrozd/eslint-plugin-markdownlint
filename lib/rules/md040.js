/**
 * @fileoverview Rule MD040
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md040
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "fenced code blocks should have a language specified",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md040",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD040),
};
