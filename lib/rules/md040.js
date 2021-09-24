/**
 * @fileoverview Rule MD040
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md040
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'fenced code blocks should have a language specified',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md040',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD040)
};
