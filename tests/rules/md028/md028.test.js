import rule from "../../../lib/rules/md028.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md028");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD028 (default)", rule, {
  valid: [testCaseDefault.valid("valid1"), testCaseDefault.valid("valid2")],
  invalid: [testCaseDefault.invalid("invalid", ["Blank line inside blockquote"])],
});
