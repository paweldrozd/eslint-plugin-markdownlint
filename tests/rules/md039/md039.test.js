"use strict";

const rule = require("../../../lib/rules/md039");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD039 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Spaces inside link text [Context: [ a link ]]",
        "Spaces inside link text [Context: [ a link ]]",
      ],
      "valid"
    ),
  ],
});
