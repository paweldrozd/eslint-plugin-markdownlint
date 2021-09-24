/**
 * @fileoverview Rule MD002
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md002
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'first heading should be a top-level heading',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md002',
    },
    schema: [{
      "type": "object",
      "properties": {
        "level": {
          "type": "number"
        }
      },
      "additionalProperties": false
    }],
    "deprecated": true,
    "replacedBy": [Rule.MD041]
  },
  create: ruleChecker(Rule.MD002)
};
