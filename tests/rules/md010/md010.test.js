"use strict";

const rule = require("../../../lib/rules/md010");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD010 (code_blocks=true,spaces_per_tab=1)", rule, {
  valid: [
    testCaseDefault.valid("block-spaces1"),
    testCaseDefault.valid("block-spaces2"),
    testCaseDefault.valid("spaces1-fixed-block2"),
    testCaseDefault.valid("spaces2-fixed-block1"),
  ],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 5",
      ],
      "block-spaces1"
    ),
    testCaseDefault.invalid(
      "spaces1",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
      ],
      "block-spaces1"
    ),
    testCaseDefault.invalid(
      "spaces2",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
      ],
      "spaces2-fixed-block1"
    ),
  ],
});

const testCaseBlocksSpaces1 = getTestCase(__dirname, [
  { code_blocks: true, spaces_per_tab: 1 },
]);
ruleTester.run("MD010 (code_blocks=true,spaces_per_tab=1)", rule, {
  valid: [
    testCaseBlocksSpaces1.valid("block-spaces1"),
    testCaseBlocksSpaces1.valid("block-spaces2"),
    testCaseBlocksSpaces1.valid("spaces1-fixed-block2"),
    testCaseBlocksSpaces1.valid("spaces2-fixed-block1"),
  ],
  invalid: [
    testCaseBlocksSpaces1.invalid(
      "invalid",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 5",
      ],
      "block-spaces1"
    ),
    testCaseBlocksSpaces1.invalid(
      "spaces1",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
      ],
      "block-spaces1"
    ),
    testCaseBlocksSpaces1.invalid(
      "spaces2",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
      ],
      "spaces2-fixed-block1"
    ),
  ],
});

const testCaseBlocksSpaces2 = getTestCase(__dirname, [
  { code_blocks: true, spaces_per_tab: 2 },
]);
ruleTester.run("MD010 (code_blocks=true,spaces_per_tab=2)", rule, {
  valid: [
    testCaseBlocksSpaces2.valid("block-spaces1"),
    testCaseBlocksSpaces2.valid("block-spaces2"),
    testCaseBlocksSpaces2.valid("spaces1-fixed-block2"),
    testCaseBlocksSpaces2.valid("spaces2-fixed-block1"),
  ],
  invalid: [
    testCaseBlocksSpaces2.invalid(
      "invalid",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 5",
      ],
      "block-spaces2"
    ),
    testCaseBlocksSpaces2.invalid(
      "spaces2",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
      ],
      "block-spaces2"
    ),
    testCaseBlocksSpaces2.invalid(
      "spaces1",
      [
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
        "Hard tabs: Column: 1",
      ],
      "spaces1-fixed-block2"
    ),
  ],
});

const testCaseSpaces1 = getTestCase(__dirname, [
  { code_blocks: false, spaces_per_tab: 1 },
]);
ruleTester.run("MD010 (code_blocks=false,spaces_per_tab=1)", rule, {
  valid: [
    testCaseSpaces1.valid("spaces1"),
    testCaseSpaces1.valid("spaces2"),
    testCaseSpaces1.valid("spaces1-fixed-block2"),
    testCaseSpaces1.valid("spaces2-fixed-block1"),
  ],
  invalid: [testCaseSpaces1.invalid("invalid", ["Hard tabs: Column: 5"], "spaces1")],
});

const testCaseSpaces2 = getTestCase(__dirname, [
  { code_blocks: false, spaces_per_tab: 2 },
]);
ruleTester.run("MD010 (code_blocks=false,spaces_per_tab=2)", rule, {
  valid: [
    testCaseSpaces2.valid("spaces1"),
    testCaseSpaces2.valid("spaces2"),
    testCaseSpaces2.valid("spaces1-fixed-block2"),
    testCaseSpaces2.valid("spaces2-fixed-block1"),
  ],
  invalid: [testCaseSpaces2.invalid("invalid", ["Hard tabs: Column: 5"], "spaces2")],
});
