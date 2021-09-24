/**
 * @fileoverview Rule MD009
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md009
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'trailing spaces',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md009',
    },
    schema: [{
      "type": "object",
      "properties": {
        "br_spaces": {
          "type": "number"
        },
        "list_item_empty_lines": {
          "type": "boolean"
        },
        "strict": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    }]
  },
  create: ruleChecker(Rule.MD009)
};
