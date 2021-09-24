/**
 * @fileoverview Rule MD012
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md012
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'multiple consecutive blank lines',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md012',
    },
    schema: [{
      "type": "object",
      "properties": {
        "maximum": {
          "type": "number"
        },
      },
      "additionalProperties": false
    }]
  },
  create: ruleChecker(Rule.MD012)
};
