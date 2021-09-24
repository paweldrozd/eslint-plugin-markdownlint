/**
 * @fileoverview Rule MD006
 * @see https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md006
 * @author Paweł BB Drozd
 */

'use strict';

const ruleChecker = require('../ruleChecker');
const Rule = require('./rule');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'consider starting bulleted lists at the beginning of the line\n',
      url: 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md006',
    },
    schema: [],
    "deprecated": true
  },
  create: ruleChecker(Rule.MD006)
};
