import rule from "../../../lib/rules/md037.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md037");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD037 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Spaces inside emphasis markers [Context: ** b]",
        "Spaces inside emphasis markers [Context: d **]",
        "Spaces inside emphasis markers [Context: * i]",
        "Spaces inside emphasis markers [Context: c *]",
        "Spaces inside emphasis markers [Context: __ b]",
        "Spaces inside emphasis markers [Context: d __]",
        "Spaces inside emphasis markers [Context: _ i]",
        "Spaces inside emphasis markers [Context: c _]",
      ],
      "valid"
    ),
  ],
});
