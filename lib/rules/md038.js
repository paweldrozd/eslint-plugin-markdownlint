/**
 * @fileoverview Rule MD038
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md038
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'spaces inside code span elements',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md038',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD038)
};
