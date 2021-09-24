const markdownlint = require('markdownlint');
const { rules, formatters } = require('./utils');

const check = (context, ruleId) => {
    const filepath = context.getFilename();
    const config = {
        ...rules.allRulesDisabled,
        [ruleId]: context.options[0] || true
    }

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

module.exports = function (context) {
    return {
        Program() {
            const ruleId = context.id.split('/')[1];
            check(context, ruleId)
        },
    };
}
