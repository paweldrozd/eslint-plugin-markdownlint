import rule from "../../../lib/rules/md035.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md035");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD035 (default)", rule, {
  valid: [testCaseDefault.valid("dashes"), testCaseDefault.valid("stars")],
  invalid: [
    testCaseDefault.invalid("mixed", [
      "Horizontal rule style: Expected: ---; Actual: ***",
    ]),
  ],
});

const testCaseConsistent = getTestCase(dirName, [{ style: "consistent" }]);
ruleTester.run("MD035 (style='consistent')", rule, {
  valid: [testCaseConsistent.valid("dashes"), testCaseConsistent.valid("stars")],
  invalid: [
    testCaseConsistent.invalid("mixed", [
      "Horizontal rule style: Expected: ---; Actual: ***",
    ]),
  ],
});

const testCaseDashes = getTestCase(dirName, [{ style: "---" }]);
ruleTester.run("MD035 (style='---')", rule, {
  valid: [testCaseDashes.valid("dashes")],
  invalid: [
    testCaseDashes.invalid("stars", [
      "Horizontal rule style: Expected: ---; Actual: ***",
      "Horizontal rule style: Expected: ---; Actual: ***",
    ]),

    testCaseDashes.invalid("mixed", [
      "Horizontal rule style: Expected: ---; Actual: ***",
    ]),
  ],
});

const testCaseStars = getTestCase(dirName, [{ style: "***" }]);
ruleTester.run("MD035 (style='***')", rule, {
  valid: [testCaseStars.valid("stars")],
  invalid: [
    testCaseStars.invalid("dashes", [
      "Horizontal rule style: Expected: ***; Actual: ---",
      "Horizontal rule style: Expected: ***; Actual: ---",
    ]),

    testCaseStars.invalid("mixed", [
      "Horizontal rule style: Expected: ***; Actual: ---",
    ]),
  ],
});
