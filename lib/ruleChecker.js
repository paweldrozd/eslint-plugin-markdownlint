/**
 * @fileOverview Single rule checker.
 * @author Paweł BB Drozd
 */

'use strict';

const markdownlint = require('markdownlint');
const { allRulesDisabled, formatters } = require('./utils');

/**
 * Check the rule.
 * @param {string} ruleId - Rule Id
 * @param {RuleContext} context
 */
const check = (ruleId, context) => {
    const filepath = context.getFilename();
    const config = Object.assign({}, allRulesDisabled, {
      [ruleId]: context.options[0] || true
    });

    const {[filepath]: res} = markdownlint.sync({
        files: [filepath],
        config
    });

    res.forEach((err) => {
        context.report({
            message: formatters.formatMessage(err),
            loc: formatters.getLocation(err),
        });
    });
}

module.exports = (ruleId) => function (context) {
    return {
        Program() {
            check(ruleId, context)
        },
    };
}
