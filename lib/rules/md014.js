/**
 * @fileoverview Rule MD014
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md014
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "dollar signs used before commands without showing output",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md014",
    },
    fixable: "code",
    schema: [],
  },
  create: ruleChecker(Rule.MD014),
};
