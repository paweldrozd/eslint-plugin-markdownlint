"use strict";

const rule = require("../../../lib/rules/md002");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD002 (default)", rule, {
  valid: [testCaseDefault.valid("first-header-h1")],
  invalid: [
    testCaseDefault.invalid("first-header-h2", [
      "First heading should be a top-level heading: Expected: h1; Actual: h2",
    ]),
    testCaseDefault.invalid("first-header-h3", [
      "First heading should be a top-level heading: Expected: h1; Actual: h3",
    ]),
    testCaseDefault.invalid("first-header-h4", [
      "First heading should be a top-level heading: Expected: h1; Actual: h4",
    ]),
    testCaseDefault.invalid("first-header-h5", [
      "First heading should be a top-level heading: Expected: h1; Actual: h5",
    ]),
    testCaseDefault.invalid("first-header-h6", [
      "First heading should be a top-level heading: Expected: h1; Actual: h6",
    ]),
  ],
});

const testCaseLevel1 = getTestCase(__dirname);
ruleTester.run("MD002 (level=1)", rule, {
  valid: [testCaseLevel1.valid("first-header-h1")],
  invalid: [
    testCaseLevel1.invalid("first-header-h2", [
      "First heading should be a top-level heading: Expected: h1; Actual: h2",
    ]),
    testCaseLevel1.invalid("first-header-h3", [
      "First heading should be a top-level heading: Expected: h1; Actual: h3",
    ]),
    testCaseLevel1.invalid("first-header-h4", [
      "First heading should be a top-level heading: Expected: h1; Actual: h4",
    ]),
    testCaseLevel1.invalid("first-header-h5", [
      "First heading should be a top-level heading: Expected: h1; Actual: h5",
    ]),
    testCaseLevel1.invalid("first-header-h6", [
      "First heading should be a top-level heading: Expected: h1; Actual: h6",
    ]),
  ],
});

const testCaseLevel2 = getTestCase(__dirname, [{ level: 2 }]);
ruleTester.run("MD002 (level=2)", rule, {
  valid: [testCaseLevel2.valid("first-header-h2")],
  invalid: [
    testCaseLevel2.invalid("first-header-h1", [
      "First heading should be a top-level heading: Expected: h2; Actual: h1",
    ]),
    testCaseLevel2.invalid("first-header-h3", [
      "First heading should be a top-level heading: Expected: h2; Actual: h3",
    ]),
    testCaseLevel2.invalid("first-header-h4", [
      "First heading should be a top-level heading: Expected: h2; Actual: h4",
    ]),
    testCaseLevel2.invalid("first-header-h5", [
      "First heading should be a top-level heading: Expected: h2; Actual: h5",
    ]),
    testCaseLevel2.invalid("first-header-h6", [
      "First heading should be a top-level heading: Expected: h2; Actual: h6",
    ]),
  ],
});

const testCaseLevel3 = getTestCase(__dirname, [{ level: 3 }]);
ruleTester.run("MD002 (level=3)", rule, {
  valid: [testCaseLevel3.valid("first-header-h3")],
  invalid: [
    testCaseLevel3.invalid("first-header-h1", [
      "First heading should be a top-level heading: Expected: h3; Actual: h1",
    ]),
    testCaseLevel3.invalid("first-header-h2", [
      "First heading should be a top-level heading: Expected: h3; Actual: h2",
    ]),
    testCaseLevel3.invalid("first-header-h4", [
      "First heading should be a top-level heading: Expected: h3; Actual: h4",
    ]),
    testCaseLevel3.invalid("first-header-h5", [
      "First heading should be a top-level heading: Expected: h3; Actual: h5",
    ]),
    testCaseLevel3.invalid("first-header-h6", [
      "First heading should be a top-level heading: Expected: h3; Actual: h6",
    ]),
  ],
});

const testCaseLevel4 = getTestCase(__dirname, [{ level: 4 }]);
ruleTester.run("MD002 (level=4)", rule, {
  valid: [testCaseLevel4.valid("first-header-h4")],
  invalid: [
    testCaseLevel4.invalid("first-header-h1", [
      "First heading should be a top-level heading: Expected: h4; Actual: h1",
    ]),
    testCaseLevel4.invalid("first-header-h2", [
      "First heading should be a top-level heading: Expected: h4; Actual: h2",
    ]),
    testCaseLevel4.invalid("first-header-h3", [
      "First heading should be a top-level heading: Expected: h4; Actual: h3",
    ]),
    testCaseLevel4.invalid("first-header-h5", [
      "First heading should be a top-level heading: Expected: h4; Actual: h5",
    ]),
    testCaseLevel4.invalid("first-header-h6", [
      "First heading should be a top-level heading: Expected: h4; Actual: h6",
    ]),
  ],
});

const testCaseLevel5 = getTestCase(__dirname, [{ level: 5 }]);
ruleTester.run("MD002 (level=5)", rule, {
  valid: [testCaseLevel5.valid("first-header-h5")],
  invalid: [
    testCaseLevel5.invalid("first-header-h1", [
      "First heading should be a top-level heading: Expected: h5; Actual: h1",
    ]),
    testCaseLevel5.invalid("first-header-h2", [
      "First heading should be a top-level heading: Expected: h5; Actual: h2",
    ]),
    testCaseLevel5.invalid("first-header-h3", [
      "First heading should be a top-level heading: Expected: h5; Actual: h3",
    ]),
    testCaseLevel5.invalid("first-header-h4", [
      "First heading should be a top-level heading: Expected: h5; Actual: h4",
    ]),
    testCaseLevel5.invalid("first-header-h6", [
      "First heading should be a top-level heading: Expected: h5; Actual: h6",
    ]),
  ],
});

const testCaseLevel6 = getTestCase(__dirname, [{ level: 6 }]);
ruleTester.run("MD002 (level=6)", rule, {
  valid: [testCaseLevel6.valid("first-header-h6")],
  invalid: [
    testCaseLevel6.invalid("first-header-h1", [
      "First heading should be a top-level heading: Expected: h6; Actual: h1",
    ]),
    testCaseLevel6.invalid("first-header-h2", [
      "First heading should be a top-level heading: Expected: h6; Actual: h2",
    ]),
    testCaseLevel6.invalid("first-header-h3", [
      "First heading should be a top-level heading: Expected: h6; Actual: h3",
    ]),
    testCaseLevel6.invalid("first-header-h4", [
      "First heading should be a top-level heading: Expected: h6; Actual: h4",
    ]),
    testCaseLevel6.invalid("first-header-h5", [
      "First heading should be a top-level heading: Expected: h6; Actual: h5",
    ]),
  ],
});
