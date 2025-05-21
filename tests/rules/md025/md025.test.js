import rule from "../../../lib/rules/md025.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md025");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD025 (level=1; front_matter_title=default-regex)", rule, {
  valid: [testCaseDefault.valid("valid"), testCaseDefault.valid("front_matter_valid")],
  invalid: [
    testCaseDefault.invalid("invalid_h1", [
      "Multiple top-level headings in the same document [Context: First chapter]",
    ]),
    testCaseDefault.invalid("front_matter_invalid", [
      "Multiple top-level headings in the same document [Context: First chapter]",
    ]),
  ],
});

const testCaseLevel1FmDefault = getTestCase(dirName, [
  {
    level: 1,
    front_matter_title: '^s*"?title"?s*[:=]',
  },
]);
ruleTester.run("MD025 (level=1; front_matter_title=default-regex)", rule, {
  valid: [
    testCaseLevel1FmDefault.valid("valid"),
    testCaseLevel1FmDefault.valid("front_matter_valid"),
  ],
  invalid: [
    testCaseLevel1FmDefault.invalid("invalid_h1", [
      "Multiple top-level headings in the same document [Context: First chapter]",
    ]),
    testCaseLevel1FmDefault.invalid("front_matter_invalid", [
      "Multiple top-level headings in the same document [Context: First chapter]",
    ]),
  ],
});

const testCaseLevel2FmDefault = getTestCase(dirName, [
  {
    level: 2,
    front_matter_title: '^s*"?title"?s*[:=]',
  },
]);
ruleTester.run("MD025 (level=2; front_matter_title=default-regex)", rule, {
  valid: [
    testCaseLevel2FmDefault.valid("valid"),
    testCaseLevel2FmDefault.valid("front_matter_invalid"),
  ],
  invalid: [
    testCaseLevel2FmDefault.invalid("invalid_h2", [
      "Multiple top-level headings in the same document [Context: First chapter]",
    ]),
    testCaseLevel2FmDefault.invalid("front_matter_valid", [
      "Multiple top-level headings in the same document [Context: First chapter]",
    ]),
  ],
});

const testCaseLevel1FmCustom = getTestCase(dirName, [
  {
    level: 1,
    front_matter_title: '^s*"?custom"?s*[:=]',
  },
]);
ruleTester.run("MD025 (level=1; front_matter_title=custom-regex)", rule, {
  valid: [
    testCaseLevel1FmCustom.valid("valid"),
    testCaseLevel1FmCustom.valid("front_matter_valid"),
    testCaseLevel1FmCustom.valid("front_matter_invalid"),
  ],
  invalid: [
    testCaseLevel1FmCustom.invalid("invalid_h1", [
      "Multiple top-level headings in the same document [Context: First chapter]",
    ]),
    testCaseLevel1FmCustom.invalid("front_matter_custom", [
      "Multiple top-level headings in the same document [Context: First chapter]",
    ]),
  ],
});
