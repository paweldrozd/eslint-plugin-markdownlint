import rule from "../../../lib/rules/md051.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md051");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD051 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Link fragments should be valid [Context: [link](#bad-fragment)]",
    ]),
  ],
});
