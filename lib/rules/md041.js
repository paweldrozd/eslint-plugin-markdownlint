/**
 * @fileoverview Rule MD041
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md041
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'first line in a file should be a top-level heading',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md041',
    },
    schema: [{
      "type": "object",
      "properties": {
        "level": {
          "type": "number"
        },
        "front_matter_title": {
          "type": "string"
        },
      },
      "additionalProperties": false
    }]
  },
  create: ruleChecker(Rule.MD041)
};
