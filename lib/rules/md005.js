/**
 * @fileoverview Rule MD005
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md005
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'heading levels should only increment by one level at a time',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md005',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD005)
};
