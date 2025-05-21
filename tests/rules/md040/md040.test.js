import rule from "../../../lib/rules/md040.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md040");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD040 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Fenced code blocks should have a language specified [Context: ```]",
      "Fenced code blocks should have a language specified [Context: ```]",
    ]),
  ],
});
