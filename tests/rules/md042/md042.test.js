"use strict";

const rule = require("../../../lib/rules/md042");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD042 (default)", rule, {
  valid: [testCaseDefault.valid("valid-link"), testCaseDefault.valid("valid-fragment")],
  invalid: [
    testCaseDefault.invalid("invalid-link", [
      "No empty links [Context: [an empty link]()]",
    ]),
    testCaseDefault.invalid("invalid-fragment", [
      "No empty links [Context: [an empty fragment](#)]",
    ]),
  ],
});
