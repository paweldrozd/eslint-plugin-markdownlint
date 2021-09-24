/**
 * @fileoverview Rule MD025
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md025
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
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md025',
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
  create: ruleChecker(Rule.MD025)
};
