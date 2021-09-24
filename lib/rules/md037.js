/**
 * @fileoverview Rule MD037
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md037
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'spaces inside emphasis markers',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md037',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD037)
};
