import rule from "../../../lib/rules/md038.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md038");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD038 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Spaces inside code span elements [Context: `some text `]",
        "Spaces inside code span elements [Context: ` some text`]",
      ],
      "valid"
    ),
  ],
});
