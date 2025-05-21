import rule from "../../../lib/rules/md033.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md033");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD033 (default)", rule, {
  valid: [testCaseDefault.valid("without-html")],
  invalid: [
    testCaseDefault.invalid("with-h1-html-tag", ["Inline HTML: Element: h1"]),
    testCaseDefault.invalid("with-br-html-tag", ["Inline HTML: Element: br"]),
  ],
});

const testCaseNoAllowedElements = getTestCase(dirName, [{ allowed_elements: [] }]);
ruleTester.run("MD033 (allowed_elements=[])", rule, {
  valid: [testCaseNoAllowedElements.valid("without-html")],
  invalid: [
    testCaseNoAllowedElements.invalid("with-h1-html-tag", ["Inline HTML: Element: h1"]),
    testCaseNoAllowedElements.invalid("with-br-html-tag", ["Inline HTML: Element: br"]),
  ],
});

const testCaseAllowedH1 = getTestCase(dirName, [{ allowed_elements: ["h1"] }]);
ruleTester.run("MD033 (allowed_elements=['h1'])", rule, {
  valid: [
    testCaseAllowedH1.valid("without-html"),
    testCaseAllowedH1.valid("with-h1-html-tag"),
  ],
  invalid: [
    testCaseAllowedH1.invalid("with-br-html-tag", ["Inline HTML: Element: br"]),
  ],
});
