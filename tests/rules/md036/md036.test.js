import rule from "../../../lib/rules/md036.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md036");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD036 (default)", rule, {
  valid: [
    testCaseDefault.valid("valid"),
    testCaseDefault.valid("invalid-with-punctuation"),
  ],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Emphasis used instead of a heading [Context: My document]",
      "Emphasis used instead of a heading [Context: Another section]",
    ]),
  ],
});

const testCaseDefaultPunctuation = getTestCase(dirName, [
  {
    punctuation: ".,;:!?。，；：！？",
  },
]);
ruleTester.run("MD036 (punctuation='.,;:!?。，；：！？')", rule, {
  valid: [
    testCaseDefaultPunctuation.valid("valid"),
    testCaseDefaultPunctuation.valid("invalid-with-punctuation"),
  ],
  invalid: [
    testCaseDefaultPunctuation.invalid("invalid", [
      "Emphasis used instead of a heading [Context: My document]",
      "Emphasis used instead of a heading [Context: Another section]",
    ]),
  ],
});

const testCaseEmptyPunctuation = getTestCase(dirName, [
  {
    punctuation: "",
  },
]);
ruleTester.run("MD036 (punctuation='')", rule, {
  valid: [testCaseEmptyPunctuation.valid("valid")],
  invalid: [
    testCaseEmptyPunctuation.invalid("invalid", [
      "Emphasis used instead of a heading [Context: My document]",
      "Emphasis used instead of a heading [Context: Another section]",
    ]),
    testCaseEmptyPunctuation.invalid("invalid-with-punctuation", [
      "Emphasis used instead of a heading [Context: My document:]",
      "Emphasis used instead of a heading [Context: Another section:]",
    ]),
  ],
});
