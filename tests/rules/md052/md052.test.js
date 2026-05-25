import rule from "../../../lib/rules/md052.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md052");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD052 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      'Reference links and images should use a label that is defined: Missing link or image reference definition: "logo" [Context: ![img][logo]]',
    ]),
  ],
});
