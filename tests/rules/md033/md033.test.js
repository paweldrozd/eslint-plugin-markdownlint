"use strict";

const rule = require("../../../lib/rules/md033");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD033 (default)", rule, {
  valid: [testCaseDefault.valid("without-html")],
  invalid: [
    testCaseDefault.invalid("with-h1-html-tag", ["Inline HTML: Element: h1"]),
    testCaseDefault.invalid("with-br-html-tag", ["Inline HTML: Element: br"]),
  ],
});

const testCaseNoAllowedElements = getTestCase(__dirname, [{ allowed_elements: [] }]);
ruleTester.run("MD033 (allowed_elements=[])", rule, {
  valid: [testCaseNoAllowedElements.valid("without-html")],
  invalid: [
    testCaseNoAllowedElements.invalid("with-h1-html-tag", ["Inline HTML: Element: h1"]),
    testCaseNoAllowedElements.invalid("with-br-html-tag", ["Inline HTML: Element: br"]),
  ],
});

const testCaseAllowedH1 = getTestCase(__dirname, [{ allowed_elements: ["h1"] }]);
ruleTester.run("MD033 (allowed_elements=['h1'])", rule, {
  valid: [
    testCaseAllowedH1.valid("without-html"),
    testCaseAllowedH1.valid("with-h1-html-tag"),
  ],
  invalid: [
    testCaseAllowedH1.invalid("with-br-html-tag", ["Inline HTML: Element: br"]),
  ],
});
