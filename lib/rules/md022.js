/**
 * @fileoverview Rule MD022
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md022
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'headings should be surrounded by blank lines',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md022',
    },
    schema: [{
            "type": "object",
      "properties": {
        "lines_above": {
          "type": "number"
        },
        "lines_below": {
          "type": "number"
        },
      },
      "additionalProperties": false
    }]
  },
  create: ruleChecker(Rule.MD022)
};
