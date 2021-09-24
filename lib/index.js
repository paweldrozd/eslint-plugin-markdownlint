const { Rule } = require('./utils');
ruleChecker = require('./ruleChecker');

module.exports = {
  config: {
    recommended: {
      extends: ['markdownlint'],
      plugins: ['markdownlint'],
      rules: {
        [`markdownlint/${Rule.MD001}`]: true,
        [`markdownlint/${Rule.MD003}`]: true,
        [`markdownlint/${Rule.MD004}`]: true,
        [`markdownlint/${Rule.MD005}`]: true,
        [`markdownlint/${Rule.MD007}`]: true,
        [`markdownlint/${Rule.MD009}`]: true,
        [`markdownlint/${Rule.MD010}`]: true,
        [`markdownlint/${Rule.MD011}`]: true,
        [`markdownlint/${Rule.MD012}`]: true,
        [`markdownlint/${Rule.MD013}`]: true,
        [`markdownlint/${Rule.MD014}`]: true,
        [`markdownlint/${Rule.MD018}`]: true,
        [`markdownlint/${Rule.MD019}`]: true,
        [`markdownlint/${Rule.MD020}`]: true,
        [`markdownlint/${Rule.MD021}`]: true,
        [`markdownlint/${Rule.MD022}`]: true,
        [`markdownlint/${Rule.MD023}`]: true,
        [`markdownlint/${Rule.MD024}`]: true,
        [`markdownlint/${Rule.MD025}`]: true,
        [`markdownlint/${Rule.MD026}`]: true,
        [`markdownlint/${Rule.MD027}`]: true,
        [`markdownlint/${Rule.MD028}`]: true,
        [`markdownlint/${Rule.MD029}`]: true,
        [`markdownlint/${Rule.MD030}`]: true,
        [`markdownlint/${Rule.MD031}`]: true,
        [`markdownlint/${Rule.MD032}`]: true,
        [`markdownlint/${Rule.MD033}`]: true,
        [`markdownlint/${Rule.MD034}`]: true,
        [`markdownlint/${Rule.MD035}`]: true,
        [`markdownlint/${Rule.MD036}`]: true,
        [`markdownlint/${Rule.MD037}`]: true,
        [`markdownlint/${Rule.MD038}`]: true,
        [`markdownlint/${Rule.MD039}`]: true,
        [`markdownlint/${Rule.MD040}`]: true,
        [`markdownlint/${Rule.MD041}`]: true,
        [`markdownlint/${Rule.MD042}`]: true,
        [`markdownlint/${Rule.MD043}`]: true,
        [`markdownlint/${Rule.MD044}`]: true,
        [`markdownlint/${Rule.MD045}`]: true,
        [`markdownlint/${Rule.MD046}`]: true,
        [`markdownlint/${Rule.MD047}`]: true,
        [`markdownlint/${Rule.MD048}`]: true,
      }
    }
  },
  rules: Object.values(Rule).reduce((o, key) => {
    o[key] = {
      create: ruleChecker
    }
    return o;
  }, {})
};

        //     "MD002": false,
        //     "MD006": false,
        //     "MD013": {
        //         "line_length": 88,
        //         "code_blocks": false,
        //         "tables": false
        //     },
        //     "MD034": false,
        //     "MD024": {
        //         "allow_different_nesting": true
        //     }
        // },
