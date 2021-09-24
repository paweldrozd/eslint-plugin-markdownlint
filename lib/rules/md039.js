/**
 * @fileoverview Rule MD039
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md039
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'spaces inside link text',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md039',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD039)
};
