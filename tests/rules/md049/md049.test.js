import rule from "../../../lib/rules/md049.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md049");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD049 (default)", rule, {
  valid: [testCaseDefault.valid("asterisk"), testCaseDefault.valid("underscore")],
  invalid: [
    testCaseDefault.invalid(
      "mixed",
      [
        "Emphasis style: Expected: asterisk; Actual: underscore",
        "Emphasis style: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

const testCaseConsistent = getTestCase(dirName, [
  {
    style: "consistent",
  },
]);
ruleTester.run("MD049 (style='consistent')", rule, {
  valid: [testCaseConsistent.valid("asterisk"), testCaseConsistent.valid("underscore")],
  invalid: [
    testCaseConsistent.invalid(
      "mixed",
      [
        "Emphasis style: Expected: asterisk; Actual: underscore",
        "Emphasis style: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

const testCaseAsterisk = getTestCase(dirName, [
  {
    style: "asterisk",
  },
]);
ruleTester.run("MD049 (style='asterisk')", rule, {
  valid: [testCaseAsterisk.valid("asterisk")],
  invalid: [
    testCaseAsterisk.invalid(
      "underscore",
      [
        "Emphasis style: Expected: asterisk; Actual: underscore",
        "Emphasis style: Expected: asterisk; Actual: underscore",
        "Emphasis style: Expected: asterisk; Actual: underscore",
        "Emphasis style: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "mixed",
      [
        "Emphasis style: Expected: asterisk; Actual: underscore",
        "Emphasis style: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

const testCaseUnderscore = getTestCase(dirName, [
  {
    style: "underscore",
  },
]);
ruleTester.run("MD049 (style='underscore')", rule, {
  valid: [testCaseUnderscore.valid("underscore")],
  invalid: [
    testCaseUnderscore.invalid(
      "asterisk",
      [
        "Emphasis style: Expected: underscore; Actual: asterisk",
        "Emphasis style: Expected: underscore; Actual: asterisk",
        "Emphasis style: Expected: underscore; Actual: asterisk",
        "Emphasis style: Expected: underscore; Actual: asterisk",
      ],
      "underscore"
    ),
    testCaseUnderscore.invalid(
      "mixed",
      [
        "Emphasis style: Expected: underscore; Actual: asterisk",
        "Emphasis style: Expected: underscore; Actual: asterisk",
      ],
      "underscore"
    ),
  ],
});
