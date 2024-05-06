"use strict";

const rule = require("../../../lib/rules/md030");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD030 (default)", rule, {
  valid: [testCaseDefault.valid("1-1-1-1")],
  invalid: [
    testCaseDefault.invalid(
      "2-2-2-2",
      [
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
      ],
      "1-1-1-1"
    ),
  ],
});

const testCaseSingle1Multi1 = getTestCase(__dirname, [
  {
    ul_single: 1,
    ol_single: 1,
    ul_multi: 1,
    ol_multi: 1,
  },
]);
ruleTester.run("MD030 (ul_single=1; ol_single=1; ul_multi=1; ol_multi=1)", rule, {
  valid: [testCaseSingle1Multi1.valid("1-1-1-1")],
  invalid: [
    testCaseSingle1Multi1.invalid(
      "2-2-2-2",
      [
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
        "Spaces after list markers: Expected: 1; Actual: 2",
      ],
      "1-1-1-1"
    ),
  ],
});

const testCaseSingle2Multi2 = getTestCase(__dirname, [
  {
    ul_single: 2,
    ol_single: 2,
    ul_multi: 2,
    ol_multi: 2,
  },
]);
ruleTester.run("MD030 (ul_single=2; ol_single=2; ul_multi=2; ol_multi=2)", rule, {
  valid: [testCaseSingle2Multi2.valid("2-2-2-2")],
  invalid: [
    testCaseSingle2Multi2.invalid(
      "1-1-1-1",
      [
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
        "Spaces after list markers: Expected: 2; Actual: 1",
      ],
      "2-2-2-2"
    ),
  ],
});
