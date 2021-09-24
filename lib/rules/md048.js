/**
 * @fileoverview Rule MD048
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md048
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'code block style',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md048',
    },
    schema: [{
      "type": "object",
      "properties": {
        "style": {
          "enum": ["consistent", "tilde", "backtick"],
        }
      },
      "additionalProperties": false
    }]
  },
  create: ruleChecker(Rule.MD048)
};
