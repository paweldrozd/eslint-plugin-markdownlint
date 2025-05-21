import rule from "../../../lib/rules/md014.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md014");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD014 (default)", rule, {
  valid: [
    testCaseDefault.valid("output-with-dollar"),
    testCaseDefault.valid("no-output-without-dollar"),
  ],
  invalid: [
    testCaseDefault.invalid(
      "no-output-with-dollar",
      [
        "Dollar signs used before commands without showing output [Context: $ ls]",
        "Dollar signs used before commands without showing output [Context: $ cat foo]",
        "Dollar signs used before commands without showing output [Context: $ less bar]",
      ],
      "no-output-without-dollar"
    ),
  ],
});
