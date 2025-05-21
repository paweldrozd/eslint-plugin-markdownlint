import rule from "../../../lib/rules/md048.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md048");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD048 (default)", rule, {
  valid: [testCaseDefault.valid("tilde"), testCaseDefault.valid("backtick")],
  invalid: [
    testCaseDefault.invalid("mixed", [
      "Code fence style: Expected: backtick; Actual: tilde",
    ]),
  ],
});

const testCaseConsistent = getTestCase(dirName, [
  {
    style: "consistent",
  },
]);
ruleTester.run("MD048 (style='consistent')", rule, {
  valid: [testCaseConsistent.valid("tilde"), testCaseConsistent.valid("backtick")],
  invalid: [
    testCaseConsistent.invalid("mixed", [
      "Code fence style: Expected: backtick; Actual: tilde",
    ]),
  ],
});

const testCaseTilde = getTestCase(dirName, [
  {
    style: "tilde",
  },
]);
ruleTester.run("MD048 (style='tilde')", rule, {
  valid: [testCaseTilde.valid("tilde")],
  invalid: [
    testCaseTilde.invalid("backtick", [
      "Code fence style: Expected: tilde; Actual: backtick",
    ]),
    testCaseTilde.invalid("mixed", [
      "Code fence style: Expected: tilde; Actual: backtick",
    ]),
  ],
});

const testCaseBacktick = getTestCase(dirName, [
  {
    style: "backtick",
  },
]);
ruleTester.run("MD048 (style='backtick')", rule, {
  valid: [testCaseBacktick.valid("backtick")],
  invalid: [
    testCaseBacktick.invalid("tilde", [
      "Code fence style: Expected: backtick; Actual: tilde",
    ]),
    testCaseBacktick.invalid("mixed", [
      "Code fence style: Expected: backtick; Actual: tilde",
    ]),
  ],
});
