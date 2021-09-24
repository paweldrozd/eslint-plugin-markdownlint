const { Rule } = require('./utils');
const ruleChecker = require('./ruleChecker');

module.exports = {
  configs: {
    recommended: {
      plugins: ['markdownlint'],
      rules: {
        [`markdownlint/${Rule.MD001}`]: 2,
        [`markdownlint/${Rule.MD003}`]: 2,
        [`markdownlint/${Rule.MD004}`]: 2,
        [`markdownlint/${Rule.MD005}`]: 2,
        [`markdownlint/${Rule.MD007}`]: 2,
        [`markdownlint/${Rule.MD009}`]: 2,
        [`markdownlint/${Rule.MD010}`]: 2,
        [`markdownlint/${Rule.MD011}`]: 2,
        [`markdownlint/${Rule.MD012}`]: 2,
        [`markdownlint/${Rule.MD013}`]: 2,
        [`markdownlint/${Rule.MD014}`]: 2,
        [`markdownlint/${Rule.MD018}`]: 2,
        [`markdownlint/${Rule.MD019}`]: 2,
        [`markdownlint/${Rule.MD020}`]: 2,
        [`markdownlint/${Rule.MD021}`]: 2,
        [`markdownlint/${Rule.MD022}`]: 2,
        [`markdownlint/${Rule.MD023}`]: 2,
        [`markdownlint/${Rule.MD024}`]: 2,
        [`markdownlint/${Rule.MD025}`]: 2,
        [`markdownlint/${Rule.MD026}`]: 2,
        [`markdownlint/${Rule.MD027}`]: 2,
        [`markdownlint/${Rule.MD028}`]: 2,
        [`markdownlint/${Rule.MD029}`]: 2,
        [`markdownlint/${Rule.MD030}`]: 2,
        [`markdownlint/${Rule.MD031}`]: 2,
        [`markdownlint/${Rule.MD032}`]: 2,
        [`markdownlint/${Rule.MD033}`]: 2,
        [`markdownlint/${Rule.MD034}`]: 2,
        [`markdownlint/${Rule.MD035}`]: 2,
        [`markdownlint/${Rule.MD036}`]: 2,
        [`markdownlint/${Rule.MD037}`]: 2,
        [`markdownlint/${Rule.MD038}`]: 2,
        [`markdownlint/${Rule.MD039}`]: 2,
        [`markdownlint/${Rule.MD040}`]: 2,
        [`markdownlint/${Rule.MD041}`]: 2,
        [`markdownlint/${Rule.MD042}`]: 2,
        [`markdownlint/${Rule.MD043}`]: 2,
        [`markdownlint/${Rule.MD044}`]: 2,
        [`markdownlint/${Rule.MD045}`]: 2,
        [`markdownlint/${Rule.MD046}`]: 2,
        [`markdownlint/${Rule.MD047}`]: 2,
        [`markdownlint/${Rule.MD048}`]: 2,
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
