import rule from "../../../lib/rules/md050.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md050");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD050 (default)", rule, {
  valid: [testCaseDefault.valid("asterisk"), testCaseDefault.valid("underscore")],
  invalid: [
    testCaseDefault.invalid(
      "mixed",
      [
        "Strong style: Expected: asterisk; Actual: underscore",
        "Strong style: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

const testCaseConsistent = getTestCase(dirName, [
  {
    style: "consistent",
  },
]);
ruleTester.run("MD050 (style='consistent')", rule, {
  valid: [testCaseConsistent.valid("asterisk"), testCaseConsistent.valid("underscore")],
  invalid: [
    testCaseConsistent.invalid(
      "mixed",
      [
        "Strong style: Expected: asterisk; Actual: underscore",
        "Strong style: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

const testCaseAsterisk = getTestCase(dirName, [
  {
    style: "asterisk",
  },
]);
ruleTester.run("MD050 (style='asterisk')", rule, {
  valid: [testCaseAsterisk.valid("asterisk")],
  invalid: [
    testCaseAsterisk.invalid(
      "underscore",
      [
        "Strong style: Expected: asterisk; Actual: underscore",
        "Strong style: Expected: asterisk; Actual: underscore",
        "Strong style: Expected: asterisk; Actual: underscore",
        "Strong style: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "mixed",
      [
        "Strong style: Expected: asterisk; Actual: underscore",
        "Strong style: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

// TODO: check on next iteration
// const testCaseUnderscore = getTestCase(dirName, [
//   {
//     style: "underscore",
//   },
// ]);
// ruleTester.run("MD050 (style='underscore')", rule, {
//   valid: [testCaseUnderscore.valid("underscore")],
//   invalid: [
//     testCaseUnderscore.invalid(
//       "asterisk",
//       [
//         "Strong style should be consistent: Expected: underscore; Actual: asterisk",
//         "Strong style should be consistent: Expected: underscore; Actual: asterisk",
//       ],
//       "underscore"
//     ),
//     testCaseUnderscore.invalid(
//       "mixed",
//       ["Strong style should be consistent: Expected: underscore; Actual: asterisk"],
//       "underscore"
//     ),
//   ],
// });
