"use strict";

const rule = require("../../../lib/rules/md003");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD003 (default)", rule, {
  valid: [
    testCaseDefault.valid("atx"),
    testCaseDefault.valid("atx-closed"),
    testCaseDefault.valid("setext"),
  ],
  invalid: [
    testCaseDefault.invalid("setext-with-atx", [
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseDefault.invalid("setext-with-atx-closed", [
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseDefault.invalid("mixed-1", [
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseDefault.invalid("mixed-2", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseDefault.invalid("mixed-3", [
      "Heading style: Expected: atx; Actual: setext",
    ]),
    testCaseDefault.invalid("mixed-4", [
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
  ],
});

const testCaseAtx = getTestCase(__dirname, [{ style: "atx" }]);
ruleTester.run("MD003 (style=atx)", rule, {
  valid: [testCaseAtx.valid("atx")],
  invalid: [
    testCaseAtx.invalid("atx-closed", [
      "Heading style: Expected: atx; Actual: atx_closed",
      "Heading style: Expected: atx; Actual: atx_closed",
      "Heading style: Expected: atx; Actual: atx_closed",
    ]),
    testCaseAtx.invalid("setext", [
      "Heading style: Expected: atx; Actual: setext",
      "Heading style: Expected: atx; Actual: setext",
    ]),
    testCaseAtx.invalid("setext-with-atx", [
      "Heading style: Expected: atx; Actual: setext",
      "Heading style: Expected: atx; Actual: setext",
    ]),
    testCaseAtx.invalid("setext-with-atx-closed", [
      "Heading style: Expected: atx; Actual: setext",
      "Heading style: Expected: atx; Actual: setext",
      "Heading style: Expected: atx; Actual: atx_closed",
    ]),
    testCaseAtx.invalid("mixed-1", [
      "Heading style: Expected: atx; Actual: atx_closed",
      "Heading style: Expected: atx; Actual: setext",
    ]),
    testCaseAtx.invalid("mixed-2", [
      "Heading style: Expected: atx; Actual: setext",
      "Heading style: Expected: atx; Actual: atx_closed",
    ]),
    testCaseAtx.invalid("mixed-3", ["Heading style: Expected: atx; Actual: setext"]),
    testCaseAtx.invalid("mixed-4", [
      "Heading style: Expected: atx; Actual: setext",
      "Heading style: Expected: atx; Actual: setext",
      "Heading style: Expected: atx; Actual: atx_closed",
    ]),
  ],
});

const testCaseAtxClosed = getTestCase(__dirname, [{ style: "atx_closed" }]);
ruleTester.run("MD003 (style=atx_closed)", rule, {
  valid: [testCaseAtxClosed.valid("atx-closed")],
  invalid: [
    testCaseAtxClosed.invalid("atx", [
      "Heading style: Expected: atx_closed; Actual: atx",
      "Heading style: Expected: atx_closed; Actual: atx",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseAtxClosed.invalid("setext", [
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: setext",
    ]),
    testCaseAtxClosed.invalid("setext-with-atx", [
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseAtxClosed.invalid("setext-with-atx-closed", [
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: setext",
    ]),
    testCaseAtxClosed.invalid("mixed-1", [
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseAtxClosed.invalid("mixed-2", [
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseAtxClosed.invalid("mixed-3", [
      "Heading style: Expected: atx_closed; Actual: atx",
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseAtxClosed.invalid("mixed-4", [
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: setext",
    ]),
  ],
});

const testCaseConsistent = getTestCase(__dirname, [{ style: "consistent" }]);
ruleTester.run("MD003 (style=consistent)", rule, {
  valid: [
    testCaseConsistent.valid("atx"),
    testCaseConsistent.valid("atx-closed"),
    testCaseConsistent.valid("setext"),
  ],
  invalid: [
    testCaseConsistent.invalid("setext-with-atx", [
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseConsistent.invalid("setext-with-atx-closed", [
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseConsistent.invalid("mixed-1", [
      "Heading style: Expected: atx_closed; Actual: setext",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseConsistent.invalid("mixed-2", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseConsistent.invalid("mixed-3", [
      "Heading style: Expected: atx; Actual: setext",
    ]),
    testCaseConsistent.invalid("mixed-4", [
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
  ],
});

const testCaseSetext = getTestCase(__dirname, [{ style: "setext" }]);
ruleTester.run("MD003 (style=setext)", rule, {
  valid: [testCaseSetext.valid("setext")],
  invalid: [
    testCaseSetext.invalid("atx", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseSetext.invalid("atx-closed", [
      "Heading style: Expected: setext; Actual: atx_closed",
      "Heading style: Expected: setext; Actual: atx_closed",
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseSetext.invalid("setext-with-atx", [
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseSetext.invalid("setext-with-atx-closed", [
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseSetext.invalid("mixed-1", [
      "Heading style: Expected: setext; Actual: atx_closed",
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseSetext.invalid("mixed-2", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseSetext.invalid("mixed-3", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseSetext.invalid("mixed-4", [
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
  ],
});

const testCaseSetextWithAtx = getTestCase(__dirname, [{ style: "setext_with_atx" }]);
ruleTester.run("MD003 (style=setext_with_atx)", rule, {
  valid: [
    testCaseSetextWithAtx.valid("setext"),
    testCaseSetextWithAtx.valid("setext-with-atx"),
  ],
  invalid: [
    testCaseSetextWithAtx.invalid("atx", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseSetextWithAtx.invalid("atx-closed", [
      "Heading style: Expected: setext; Actual: atx_closed",
      "Heading style: Expected: setext; Actual: atx_closed",
      "Heading style: Expected: atx; Actual: atx_closed",
    ]),
    testCaseSetextWithAtx.invalid("setext-with-atx-closed", [
      "Heading style: Expected: atx; Actual: atx_closed",
    ]),
    testCaseSetextWithAtx.invalid("mixed-1", [
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseSetextWithAtx.invalid("mixed-2", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: atx; Actual: atx_closed",
    ]),
    testCaseSetextWithAtx.invalid("mixed-3", [
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseSetextWithAtx.invalid("mixed-4", [
      "Heading style: Expected: atx; Actual: atx_closed",
    ]),
  ],
});

const testCaseSetextWithAtxClosed = getTestCase(__dirname, [
  { style: "setext_with_atx_closed" },
]);
ruleTester.run("MD003 (style=setext_with_atx_closed)", rule, {
  valid: [
    testCaseSetextWithAtxClosed.valid("setext-with-atx-closed"),
    testCaseSetextWithAtxClosed.valid("mixed-4"),
    testCaseSetextWithAtxClosed.valid("setext"),
  ],
  invalid: [
    testCaseSetextWithAtxClosed.invalid("atx", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseSetextWithAtxClosed.invalid("atx-closed", [
      "Heading style: Expected: setext; Actual: atx_closed",
      "Heading style: Expected: setext; Actual: atx_closed",
    ]),
    testCaseSetextWithAtxClosed.invalid("setext-with-atx", [
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseSetextWithAtxClosed.invalid("mixed-1", [
      "Heading style: Expected: setext; Actual: atx_closed",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
    testCaseSetextWithAtxClosed.invalid("mixed-2", [
      "Heading style: Expected: setext; Actual: atx",
    ]),
    testCaseSetextWithAtxClosed.invalid("mixed-3", [
      "Heading style: Expected: setext; Actual: atx",
      "Heading style: Expected: atx_closed; Actual: atx",
    ]),
  ],
});
