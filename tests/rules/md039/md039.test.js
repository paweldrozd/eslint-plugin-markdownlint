import rule from "../../../lib/rules/md039.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md039");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD039 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Spaces inside link text [Context: [ a link ]]",
        "Spaces inside link text [Context: [ a link ]]",
      ],
      "valid"
    ),
  ],
});
