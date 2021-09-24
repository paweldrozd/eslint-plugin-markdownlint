/**
 * @fileoverview Rule MD034
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md034
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'bare URL used',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md034',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD034)
};
