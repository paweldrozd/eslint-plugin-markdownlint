"use strict";

const rule = require("../../../lib/rules/md020");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD020 (default)", rule, {
  valid: [testCaseDefault.valid("atx-closed-with-space")],
  invalid: [
    testCaseDefault.invalid(
      "atx-closed-without-space",
      [
        "No space inside hashes on closed atx style heading [Context: #Heading 1#]",
        "No space inside hashes on closed atx style heading [Context: ##Heading 2 ##]",
      ],
      "atx-closed-with-space"
    ),
  ],
});
