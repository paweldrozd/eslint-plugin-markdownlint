import { rules } from "../lib/index.js";

test.each(Object.keys(rules))(
  'rule "%s" has a fixable property of "code" or "whitespace"',
  (ruleId) => {
    const rule = rules[ruleId];
    expect(rule.meta.fixable).toBeDefined();
    expect(["code", "whitespace"]).toContain(rule.meta.fixable);
  }
);
