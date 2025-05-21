/**
 * @fileoverview Rule MD042
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md042
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "no empty links",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md042",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD042),
};
