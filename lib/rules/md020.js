/**
 * @fileoverview Rule MD020
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md020
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'no space inside hashes on closed atx style heading',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md020',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD020)
};
