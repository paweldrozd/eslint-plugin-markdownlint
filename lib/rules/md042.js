/**
 * @fileoverview Rule MD042
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md042
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'no empty links',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md042',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD042)
};
