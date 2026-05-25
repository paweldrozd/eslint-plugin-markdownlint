import rule from "../../../lib/rules/md053.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md053");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD053 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        'Link and image reference definitions should be needed: Unused link or image reference definition: "ref" [Context: [ref]: https://example.com]',
      ],
      "fixed"
    ),
  ],
});
