import rule from "../../../lib/rules/md019.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md019");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD019 (default)", rule, {
  valid: [testCaseDefault.valid("atx-with-space")],
  invalid: [
    testCaseDefault.invalid(
      "atx-with-many-spaces",
      [
        "Multiple spaces after hash on atx style heading [Context: #  Heading 1]",
        "Multiple spaces after hash on atx style heading [Context: ##    Heading 2]",
      ],
      "atx-with-space"
    ),
  ],
});
