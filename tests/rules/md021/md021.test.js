"use strict";

const rule = require("../../../lib/rules/md021");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD021 (default)", rule, {
  valid: [testCaseDefault.valid("atx-closed-with-space")],
  invalid: [
    testCaseDefault.invalid(
      "atx-closed-with-many-spaces",
      [
        "Multiple spaces inside hashes on closed atx style heading [Context: #  Heading 1  #]",
        "Multiple spaces inside hashes on closed atx style heading [Context: ##    Heading 2 ##]",
      ],
      "atx-closed-with-space"
    ),
  ],
});
