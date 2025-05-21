import rule from "../../../lib/rules/md023.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md023");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD023 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Headings must start at the beginning of the line [Context:   # Heading]"],
      "valid"
    ),
  ],
});
