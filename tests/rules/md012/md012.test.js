import rule from "../../../lib/rules/md012.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md012");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD012 (default)", rule, {
  valid: [testCaseDefault.valid("one")],
  invalid: [
    testCaseDefault.invalid(
      "two",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 2"],
      "one"
    ),
    testCaseDefault.invalid(
      "three",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 3"],
      "one"
    ),
    testCaseDefault.invalid(
      "three-with-spaces",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 3"],
      "one-with-spaces"
    ),
    testCaseDefault.invalid(
      "four",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 4"],
      "one"
    ),
    testCaseDefault.invalid(
      "too-many-on-end",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 2"],
      "one"
    ),
  ],
});

const testCaseOne = getTestCase(dirName, [{ maximum: 1 }]);
ruleTester.run("MD012 (maximum=1)", rule, {
  valid: [testCaseOne.valid("one")],
  invalid: [
    testCaseOne.invalid(
      "two",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 2"],
      "one"
    ),
    testCaseOne.invalid(
      "three",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 3"],
      "one"
    ),
    testCaseOne.invalid(
      "three-with-spaces",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 3"],
      "one-with-spaces"
    ),
    testCaseOne.invalid(
      "four",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 4"],
      "one"
    ),
    testCaseOne.invalid(
      "too-many-on-end",
      ["Multiple consecutive blank lines: Expected: 1; Actual: 2"],
      "one"
    ),
  ],
});

const testCaseTwo = getTestCase(dirName, [{ maximum: 2 }]);
ruleTester.run("MD012 (maximum=2)", rule, {
  valid: [
    testCaseTwo.valid("one"),
    testCaseTwo.valid("two"),
    testCaseTwo.valid("too-many-on-end"),
  ],
  invalid: [
    testCaseTwo.invalid(
      "three",
      ["Multiple consecutive blank lines: Expected: 2; Actual: 3"],
      "two"
    ),
    testCaseTwo.invalid(
      "four",
      ["Multiple consecutive blank lines: Expected: 2; Actual: 4"],
      "two"
    ),
  ],
});

const testCaseThree = getTestCase(dirName, [{ maximum: 3 }]);
ruleTester.run("MD012 (maximum=3)", rule, {
  valid: [
    testCaseThree.valid("one"),
    testCaseThree.valid("two"),
    testCaseThree.valid("three"),
    testCaseThree.valid("too-many-on-end"),
  ],
  invalid: [
    testCaseThree.invalid(
      "four",
      ["Multiple consecutive blank lines: Expected: 3; Actual: 4"],
      "three"
    ),
  ],
});
