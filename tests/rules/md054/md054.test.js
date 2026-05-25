import rule from "../../../lib/rules/md054.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md054");

const testCaseAutolink = getTestCase(dirName, [{ autolink: false }]);
ruleTester.run("MD054 (autolink=false)", rule, {
  valid: [testCaseAutolink.valid("valid")],
  invalid: [
    testCaseAutolink.invalid(
      "invalid",
      ["Link and image style [Context: <https://example.com>]"],
      "fixed"
    ),
  ],
});
