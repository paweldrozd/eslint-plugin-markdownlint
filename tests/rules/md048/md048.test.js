"use strict";

const rule = require("../../../lib/rules/md048");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD048 (default)", rule, {
  valid: [testCaseDefault.valid("tilde"), testCaseDefault.valid("backtick")],
  invalid: [
    testCaseDefault.invalid("mixed", [
      "Code fence style: Expected: backtick; Actual: tilde",
    ]),
  ],
});

const testCaseConsistent = getTestCase(__dirname, [
  {
    style: "consistent",
  },
]);
ruleTester.run("MD048 (style='consistent')", rule, {
  valid: [testCaseConsistent.valid("tilde"), testCaseConsistent.valid("backtick")],
  invalid: [
    testCaseConsistent.invalid("mixed", [
      "Code fence style: Expected: backtick; Actual: tilde",
    ]),
  ],
});

const testCaseTilde = getTestCase(__dirname, [
  {
    style: "tilde",
  },
]);
ruleTester.run("MD048 (style='tilde')", rule, {
  valid: [testCaseTilde.valid("tilde")],
  invalid: [
    testCaseTilde.invalid("backtick", [
      "Code fence style: Expected: tilde; Actual: backtick",
    ]),
    testCaseTilde.invalid("mixed", [
      "Code fence style: Expected: tilde; Actual: backtick",
    ]),
  ],
});

const testCaseBacktick = getTestCase(__dirname, [
  {
    style: "backtick",
  },
]);
ruleTester.run("MD048 (style='backtick')", rule, {
  valid: [testCaseBacktick.valid("backtick")],
  invalid: [
    testCaseBacktick.invalid("tilde", [
      "Code fence style: Expected: backtick; Actual: tilde",
    ]),
    testCaseBacktick.invalid("mixed", [
      "Code fence style: Expected: backtick; Actual: tilde",
    ]),
  ],
});
