/**
 * @fileoverview Rule MD021
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md021
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'multiple spaces inside hashes on closed atx style heading',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md021',
    },
    schema: []
  },
  create: ruleChecker(Rule.MD021)
};
