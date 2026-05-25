import rule from "../../../lib/rules/md055.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md055");

const testCaseLeadingAndTrailing = getTestCase(dirName, [
  { style: "leading_and_trailing" },
]);
ruleTester.run("MD055 (style=leading_and_trailing)", rule, {
  valid: [testCaseLeadingAndTrailing.valid("valid")],
  invalid: [
    testCaseLeadingAndTrailing.invalid("invalid", [
      "Table pipe style: Expected: leading_and_trailing; Actual: leading_only; Missing trailing pipe",
      "Table pipe style: Expected: leading_and_trailing; Actual: leading_only; Missing trailing pipe",
      "Table pipe style: Expected: leading_and_trailing; Actual: leading_only; Missing trailing pipe",
    ]),
  ],
});
