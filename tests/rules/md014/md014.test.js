"use strict";

const rule = require("../../../lib/rules/md014");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD014 (default)", rule, {
  valid: [
    testCaseDefault.valid("output-with-dollar"),
    testCaseDefault.valid("no-output-without-dollar"),
  ],
  invalid: [
    testCaseDefault.invalid(
      "no-output-with-dollar",
      [
        "Dollar signs used before commands without showing output [Context: $ ls]",
        "Dollar signs used before commands without showing output [Context: $ cat foo]",
        "Dollar signs used before commands without showing output [Context: $ less bar]",
      ],
      "no-output-without-dollar"
    ),
  ],
});
