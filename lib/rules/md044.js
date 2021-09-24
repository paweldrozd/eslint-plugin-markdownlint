/**
 * @fileoverview Rule MD044
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md044
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'proper names should have the correct capitalization',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md044',
    },
    schema: [{
      "type": "object",
      "properties": {
        "names": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "code_blocks": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    }]  },
  create: ruleChecker(Rule.MD044)
};
