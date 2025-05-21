import rule from "../../../lib/rules/md004.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md004");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD004 (default)", rule, {
  valid: [
    testCaseDefault.valid("asterisk"),
    testCaseDefault.valid("dash"),
    testCaseDefault.valid("plus"),
  ],
  invalid: [
    testCaseDefault.invalid(
      "asterisk-invalid",
      [
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
      ],
      "asterisk"
    ),
    testCaseDefault.invalid(
      "dash-invalid",
      [
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: plus",
      ],
      "dash"
    ),
    testCaseDefault.invalid(
      "plus-invalid",
      [
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
      ],
      "plus"
    ),
    testCaseDefault.invalid(
      "sublist",
      [
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
      ],
      "asterisk"
    ),
    testCaseDefault.invalid(
      "sublist-invalid",
      [
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
      ],
      "plus"
    ),
  ],
});

const testCaseAsterisk = getTestCase(dirName, [{ style: "asterisk" }]);
ruleTester.run("MD004 (style=asterisk)", rule, {
  valid: [testCaseAsterisk.valid("asterisk")],
  invalid: [
    testCaseAsterisk.invalid(
      "asterisk-invalid",
      [
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "dash",
      [
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "dash-invalid",
      [
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "plus",
      [
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "plus-invalid",
      [
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "sublist",
      [
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "sublist-invalid",
      [
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: plus",
      ],
      "asterisk"
    ),
  ],
});

const testCaseDash = getTestCase(dirName, [{ style: "dash" }]);
ruleTester.run("MD004 (style=dash)", rule, {
  valid: [testCaseDash.valid("dash")],
  invalid: [
    testCaseDash.invalid(
      "asterisk",
      [
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
      ],
      "dash"
    ),
    testCaseDash.invalid(
      "asterisk-invalid",
      [
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
      ],
      "dash"
    ),
    testCaseDash.invalid(
      "dash-invalid",
      [
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: plus",
      ],
      "dash"
    ),
    testCaseDash.invalid(
      "plus",
      [
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
      ],
      "dash"
    ),
    testCaseDash.invalid(
      "plus-invalid",
      [
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
      ],
      "dash"
    ),
    testCaseDash.invalid(
      "sublist",
      [
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
      ],
      "dash"
    ),
    testCaseDash.invalid(
      "sublist-invalid",
      [
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: plus",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: plus",
      ],
      "dash"
    ),
  ],
});

const testCasePlus = getTestCase(dirName, [{ style: "plus" }]);
ruleTester.run("MD004 (style=plus)", rule, {
  valid: [testCasePlus.valid("plus")],
  invalid: [
    testCasePlus.invalid(
      "asterisk",
      [
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
      ],
      "plus"
    ),
    testCasePlus.invalid(
      "asterisk-invalid",
      [
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
      ],
      "plus"
    ),
    testCasePlus.invalid(
      "dash",
      [
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
      ],
      "plus"
    ),
    testCasePlus.invalid(
      "dash-invalid",
      [
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
      ],
      "plus"
    ),
    testCasePlus.invalid(
      "plus-invalid",
      [
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
      ],
      "plus"
    ),
    testCasePlus.invalid(
      "sublist",
      [
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: asterisk",
      ],
      "plus"
    ),
    testCasePlus.invalid(
      "sublist-invalid",
      [
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
      ],
      "plus"
    ),
  ],
});

const testCaseSublist = getTestCase(dirName, [{ style: "sublist" }]);
ruleTester.run("MD004 (style=sublist)", rule, {
  valid: [testCaseSublist.valid("sublist")],
  invalid: [
    testCaseSublist.invalid(
      "asterisk",
      [
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
      ],
      "sublist"
    ),
    testCaseSublist.invalid(
      "asterisk-invalid",
      [
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: asterisk; Actual: dash",
      ],
      "sublist"
    ),
    testCaseSublist.invalid(
      "dash",
      [
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
      ],
      "sublist-dash"
    ),
    testCaseSublist.invalid(
      "dash-invalid",
      [
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: dash",
      ],
      "sublist-dash2"
    ),
    testCaseSublist.invalid(
      "plus",
      [
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
      ],
      "sublist-plus"
    ),
    testCaseSublist.invalid(
      "plus-invalid",
      [
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: plus; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: plus",
      ],
      "sublist-plus"
    ),
    testCaseSublist.invalid(
      "sublist-invalid",
      [
        "Unordered list style: Expected: asterisk; Actual: plus",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: dash; Actual: asterisk",
        "Unordered list style: Expected: asterisk; Actual: dash",
        "Unordered list style: Expected: dash; Actual: asterisk",
      ],
      "sublist-plus2"
    ),
  ],
});
