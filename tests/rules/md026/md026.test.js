import rule from "../../../lib/rules/md026.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md026");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD026 (default)", rule, {
  valid: [testCaseDefault.valid("valid"), testCaseDefault.valid("dash")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Trailing punctuation in heading: Punctuation: '.'"],
      "valid"
    ),
  ],
});

const testCasePunctuationDefault = getTestCase(dirName, [
  {
    punctuation: ".,;:!。，；：！",
  },
]);
ruleTester.run("MD026 (punctuation=default-chars)", rule, {
  valid: [
    testCasePunctuationDefault.valid("valid"),
    testCasePunctuationDefault.valid("dash"),
  ],
  invalid: [
    testCasePunctuationDefault.invalid(
      "invalid",
      ["Trailing punctuation in heading: Punctuation: '.'"],
      "valid"
    ),
  ],
});

const testCasePunctuationCustom = getTestCase(dirName, [
  {
    punctuation: "-",
  },
]);
ruleTester.run("MD026 (punctuation=custom-chars)", rule, {
  valid: [
    testCasePunctuationCustom.valid("valid"),
    testCasePunctuationCustom.valid("invalid"),
  ],
  invalid: [
    testCasePunctuationCustom.invalid(
      "dash",
      ["Trailing punctuation in heading: Punctuation: '-'"],
      "valid"
    ),
  ],
});
