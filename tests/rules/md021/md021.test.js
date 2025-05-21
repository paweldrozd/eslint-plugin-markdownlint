import rule from "../../../lib/rules/md021.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md021");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD021 (default)", rule, {
  valid: [testCaseDefault.valid("atx-closed-with-space")],
  invalid: [
    testCaseDefault.invalid(
      "atx-closed-with-many-spaces",
      [
        "Multiple spaces inside hashes on closed atx style heading [Context: #  Heading 1  #]",
        "Multiple spaces inside hashes on closed atx style heading [Context: #  Heading 1  #]",
        "Multiple spaces inside hashes on closed atx style heading [Context: ##    Heading 2 ##]",
      ],
      "atx-closed-with-space"
    ),
  ],
});
