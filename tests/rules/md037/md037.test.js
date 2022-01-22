"use strict";

const rule = require("../../../lib/rules/md037");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD037 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Spaces inside emphasis markers [Context: ** bold **]",
        "Spaces inside emphasis markers [Context: * italic *]",
        "Spaces inside emphasis markers [Context: __ bold __]",
        "Spaces inside emphasis markers [Context: _ italic _]",
      ],
      "valid"
    ),
  ],
});
