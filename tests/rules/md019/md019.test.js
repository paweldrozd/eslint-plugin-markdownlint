"use strict";

const rule = require("../../../lib/rules/md019");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD019 (default)", rule, {
  valid: [testCaseDefault.valid("atx-with-space")],
  invalid: [
    testCaseDefault.invalid(
      "atx-with-many-spaces",
      [
        "Multiple spaces after hash on atx style heading [Context: #  Heading 1]",
        "Multiple spaces after hash on atx style heading [Context: ##    Heading 2]",
      ],
      "atx-with-space"
    ),
  ],
});
