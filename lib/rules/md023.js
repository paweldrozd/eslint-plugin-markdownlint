/**
 * @fileoverview Rule MD023
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md023
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'headings must start at the beginning of the line',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md023',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD023)
};
