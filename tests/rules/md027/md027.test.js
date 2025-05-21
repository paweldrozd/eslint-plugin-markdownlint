import rule from "../../../lib/rules/md027.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md027");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD027 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Multiple spaces after blockquote symbol [Context: >  This is a blockquote with]",
        "Multiple spaces after blockquote symbol [Context: >  indentation.]",
      ],
      "valid"
    ),
  ],
});
