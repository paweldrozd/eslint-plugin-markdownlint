"use strict";

const rule = require("../../../lib/rules/md041");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD041 (default)", rule, {
  valid: [
    testCaseDefault.valid("valid"),
    testCaseDefault.valid("image-on-first-line"),
    testCaseDefault.valid("front_matter"),
  ],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "First line in a file should be a top-level heading [Context: This is a file without a headi...]",
    ]),
    testCaseDefault.invalid("valid-level2", [
      "First line in a file should be a top-level heading [Context: ## File with heading]",
    ]),
    testCaseDefault.invalid("image-on-first-line-level2", [
      'First line in a file should be a top-level heading [Context: <h2 align="center"><img src="h...]',
    ]),
  ],
});

const testCaseLevel1FMDefault = getTestCase(__dirname, [
  {
    level: 1,
    front_matter_title: '^\\s*"?title"?\\s*[:=]',
  },
]);
ruleTester.run("MD041 (level=1, front_matter_title='<default>')", rule, {
  valid: [
    testCaseLevel1FMDefault.valid("valid"),
    testCaseLevel1FMDefault.valid("image-on-first-line"),
    testCaseLevel1FMDefault.valid("front_matter"),
  ],
  invalid: [
    testCaseLevel1FMDefault.invalid("invalid", [
      "First line in a file should be a top-level heading [Context: This is a file without a headi...]",
    ]),
    testCaseLevel1FMDefault.invalid("valid-level2", [
      "First line in a file should be a top-level heading [Context: ## File with heading]",
    ]),
    testCaseLevel1FMDefault.invalid("image-on-first-line-level2", [
      'First line in a file should be a top-level heading [Context: <h2 align="center"><img src="h...]',
    ]),
  ],
});

const testCaseLevel1FMDisabled = getTestCase(__dirname, [
  {
    level: 1,
    front_matter_title: "",
  },
]);
ruleTester.run("MD041 (level=1, front_matter_title='')", rule, {
  valid: [
    testCaseLevel1FMDisabled.valid("valid"),
    testCaseLevel1FMDisabled.valid("image-on-first-line"),
  ],
  invalid: [
    testCaseLevel1FMDisabled.invalid("invalid", [
      "First line in a file should be a top-level heading [Context: This is a file without a headi...]",
    ]),
    testCaseLevel1FMDisabled.invalid("front_matter", [
      "First line in a file should be a top-level heading [Context: ## First chapter]",
    ]),
    testCaseLevel1FMDisabled.invalid("valid-level2", [
      "First line in a file should be a top-level heading [Context: ## File with heading]",
    ]),
    testCaseLevel1FMDisabled.invalid("image-on-first-line-level2", [
      'First line in a file should be a top-level heading [Context: <h2 align="center"><img src="h...]',
    ]),
  ],
});

const testCaseLevel2FMDefault = getTestCase(__dirname, [
  {
    level: 2,
    front_matter_title: '^\\s*"?title"?\\s*[:=]',
  },
]);
ruleTester.run("MD041 (level=2, front_matter_title='<default>')", rule, {
  valid: [
    testCaseLevel2FMDefault.valid("valid-level2"),
    testCaseLevel2FMDefault.valid("image-on-first-line-level2"),
    testCaseLevel2FMDefault.valid("front_matter"),
  ],
  invalid: [
    testCaseLevel2FMDefault.invalid("invalid", [
      "First line in a file should be a top-level heading [Context: This is a file without a headi...]",
    ]),
    testCaseLevel2FMDefault.invalid("valid", [
      "First line in a file should be a top-level heading [Context: # File with heading]",
    ]),
    testCaseLevel2FMDefault.invalid("image-on-first-line", [
      'First line in a file should be a top-level heading [Context: <h1 align="center"><img src="h...]',
    ]),
  ],
});
