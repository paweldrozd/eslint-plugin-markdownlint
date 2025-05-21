import rule from "../../../lib/rules/md020.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md020");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD020 (default)", rule, {
  valid: [testCaseDefault.valid("atx-closed-with-space")],
  invalid: [
    testCaseDefault.invalid(
      "atx-closed-without-space",
      [
        "No space inside hashes on closed atx style heading [Context: #Heading 1#]",
        "No space inside hashes on closed atx style heading [Context: ##Heading 2 ##]",
      ],
      "atx-closed-with-space"
    ),
  ],
});
