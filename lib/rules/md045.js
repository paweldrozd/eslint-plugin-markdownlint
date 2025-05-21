/**
 * @fileoverview Rule MD045
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md045
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "images should have alternate text (alt text)",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md045",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD045),
};
