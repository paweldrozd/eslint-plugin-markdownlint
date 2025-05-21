import rule from "../../../lib/rules/md018.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md018");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD018 (default)", rule, {
  valid: [testCaseDefault.valid("atx-with-space")],
  invalid: [
    testCaseDefault.invalid(
      "atx-without-space",
      [
        "No space after hash on atx style heading [Context: #Heading 1]",
        "No space after hash on atx style heading [Context: ##Heading 2]",
      ],
      "atx-with-space"
    ),
  ],
});
