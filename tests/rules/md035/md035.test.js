"use strict";

const rule = require("../../../lib/rules/md035");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD035 (default)", rule, {
  valid: [testCaseDefault.valid("dashes"), testCaseDefault.valid("stars")],
  invalid: [
    testCaseDefault.invalid("mixed", [
      "Horizontal rule style: Expected: ---; Actual: ***",
    ]),
  ],
});

const testCaseConsistent = getTestCase(__dirname, [{ style: "consistent" }]);
ruleTester.run("MD035 (style='consistent')", rule, {
  valid: [testCaseConsistent.valid("dashes"), testCaseConsistent.valid("stars")],
  invalid: [
    testCaseConsistent.invalid("mixed", [
      "Horizontal rule style: Expected: ---; Actual: ***",
    ]),
  ],
});

const testCaseDashes = getTestCase(__dirname, [{ style: "---" }]);
ruleTester.run("MD035 (style='---')", rule, {
  valid: [testCaseDashes.valid("dashes")],
  invalid: [
    testCaseDashes.invalid("stars", [
      "Horizontal rule style: Expected: ---; Actual: ***",
      "Horizontal rule style: Expected: ---; Actual: ***",
    ]),

    testCaseDashes.invalid("mixed", [
      "Horizontal rule style: Expected: ---; Actual: ***",
    ]),
  ],
});

const testCaseStars = getTestCase(__dirname, [{ style: "***" }]);
ruleTester.run("MD035 (style='***')", rule, {
  valid: [testCaseStars.valid("stars")],
  invalid: [
    testCaseStars.invalid("dashes", [
      "Horizontal rule style: Expected: ***; Actual: ---",
      "Horizontal rule style: Expected: ***; Actual: ---",
    ]),

    testCaseStars.invalid("mixed", [
      "Horizontal rule style: Expected: ***; Actual: ---",
    ]),
  ],
});
