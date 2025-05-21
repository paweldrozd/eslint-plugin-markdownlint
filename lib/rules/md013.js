/**
 * @fileoverview Rule MD013
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md013
 * @author Paweł BB Drozd
 */

import ruleChecker from "../ruleChecker.js";
import Rule from "./rule.js";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "line length",
      url: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md013",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          line_length: {
            type: "number",
          },
          heading_line_length: {
            type: "number",
          },
          code_block_line_length: {
            type: "number",
          },
          code_blocks: {
            type: "boolean",
          },
          tables: {
            type: "boolean",
          },
          headings: {
            type: "boolean",
          },
          strict: {
            type: "boolean",
          },
          stern: {
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: ruleChecker(Rule.MD013),
};
