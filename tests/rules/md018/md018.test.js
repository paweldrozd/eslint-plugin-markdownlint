"use strict";

const rule = require("../../../lib/rules/md018");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD018 (default)", rule, {
  valid: [testCaseDefault.valid("atx-with-space")],
  invalid: [
    testCaseDefault.invalid(
      "atx-without-space",
      [
        "No space after hash on atx style heading [Context: #Heading 1]",
        "No space after hash on atx style heading [Context: ##Heading 2]",
      ],
      "atx-with-space"
    ),
  ],
});
