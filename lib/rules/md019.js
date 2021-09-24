/**
 * @fileoverview Rule MD019
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md019
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'multiple spaces after hash on atx style heading',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md019',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD019)
};
