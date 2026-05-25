import rule from "../../../lib/rules/md060.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md060");

const testCaseCompact = getTestCase(dirName, [{ style: "compact" }]);
ruleTester.run("MD060 (style=compact)", rule, {
  valid: [testCaseCompact.valid("valid")],
  invalid: [
    testCaseCompact.invalid("invalid", [
      'Table column style: Table pipe has extra space to the left for style "compact"',
    ]),
  ],
});
