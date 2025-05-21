/**
 * Some settings in this rule are not autofixed together, in that case there are
 * v2 versions of example markdown which is used to check autofixer result, but isn't
 * fully valid.
 */

import rule from "../../../lib/rules/md009.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md009");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD009 (default)", rule, {
  valid: [
    testCaseDefault.valid("br2-emptyf-strictf"),
    testCaseDefault.valid("br2-emptyf-strictt"),
    testCaseDefault.valid("br2-emptyf-strictt-v2"),
    testCaseDefault.valid("br3-emptyf-strictt"),
  ],
  invalid: [
    testCaseDefault.invalid(
      "br2-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 2; Actual: 4"],
      "br2-emptyf-strictf-v2"
    ),
    testCaseDefault.invalid(
      "br2-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 2; Actual: 4"],
      "br2-emptyf-strictt"
    ),
    testCaseDefault.invalid(
      "br3-emptyf-strictf",
      [
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
      ],
      "br2-emptyf-strictt"
    ),
    testCaseDefault.invalid(
      "br3-emptyt-strictf",
      [
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
        "Trailing spaces: Expected: 0 or 2; Actual: 6",
      ],
      "br2-emptyf-strictt"
    ),
    testCaseDefault.invalid(
      "br3-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 2; Actual: 6"],
      "br2-emptyf-strictt"
    ),
    testCaseDefault.invalid(
      "br3-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
    testCaseDefault.invalid(
      "br3-emptyf-strictt-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
    testCaseDefault.invalid(
      "br3-emptyt-strictt-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
  ],
});

const testCaseBr2 = getTestCase(dirName, [
  { br_spaces: 2, list_item_empty_lines: false, strict: false },
]);
ruleTester.run("MD009 (br_spaces=2, list_item_empty_lines=false, strict=false)", rule, {
  valid: [
    testCaseBr2.valid("br2-emptyf-strictf"),
    testCaseBr2.valid("br2-emptyf-strictt"),
    testCaseBr2.valid("br2-emptyf-strictt-v2"),
    testCaseBr2.valid("br3-emptyf-strictt"),
  ],
  invalid: [
    testCaseBr2.invalid(
      "br2-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 2; Actual: 4"],
      "br2-emptyf-strictf-v2"
    ),
    testCaseBr2.invalid(
      "br2-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 2; Actual: 4"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2.invalid(
      "br3-emptyf-strictf",
      [
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
      ],
      "br2-emptyf-strictt"
    ),
    testCaseBr2.invalid(
      "br3-emptyt-strictf",
      [
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
        "Trailing spaces: Expected: 0 or 2; Actual: 6",
      ],
      "br2-emptyf-strictt"
    ),
    testCaseBr2.invalid(
      "br3-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 2; Actual: 6"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2.invalid(
      "br3-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2.invalid(
      "br3-emptyf-strictt-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2.invalid(
      "br3-emptyt-strictt-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
  ],
});

const testCaseBr3 = getTestCase(dirName, [
  { br_spaces: 3, list_item_empty_lines: false, strict: false },
]);
ruleTester.run("MD009 (br_spaces=3, list_item_empty_lines=false, strict=false)", rule, {
  valid: [
    testCaseBr3.valid("br2-emptyf-strictt"),
    testCaseBr3.valid("br3-emptyf-strictf"),
    testCaseBr3.valid("br3-emptyf-strictt"),
  ],
  invalid: [
    testCaseBr3.invalid(
      "br2-emptyf-strictf",
      [
        "Trailing spaces: Expected: 0 or 3; Actual: 2",
        "Trailing spaces: Expected: 0 or 3; Actual: 2",
      ],
      "br3-emptyf-strictt"
    ),
    testCaseBr3.invalid(
      "br2-emptyt-strictf",
      [
        "Trailing spaces: Expected: 0 or 3; Actual: 2",
        "Trailing spaces: Expected: 0 or 3; Actual: 4",
      ],
      "br3-emptyf-strictt"
    ),
    testCaseBr3.invalid(
      "br2-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 3; Actual: 4"],
      "br3-emptyf-strictt"
    ),
    testCaseBr3.invalid(
      "br2-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br3-emptyf-strictt"
    ),
    testCaseBr3.invalid(
      "br2-emptyf-strictt-v2",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br3-emptyf-strictt"
    ),
    testCaseBr3.invalid(
      "br3-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 3; Actual: 6"],
      "br3-emptyf-strictf-v2"
    ),
    testCaseBr3.invalid(
      "br3-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 3; Actual: 6"],
      "br3-emptyf-strictt"
    ),
  ],
});

const testCaseBr2Lines = getTestCase(dirName, [
  { br_spaces: 2, list_item_empty_lines: true, strict: false },
]);
ruleTester.run("MD009 (br_spaces=2, list_item_empty_lines=true, strict=false)", rule, {
  valid: [
    testCaseBr2Lines.valid("br2-emptyf-strictf"),
    testCaseBr2Lines.valid("br2-emptyf-strictt"),
    testCaseBr2Lines.valid("br2-emptyt-strictf"),
    testCaseBr2Lines.valid("br2-emptyt-strictt"),
    testCaseBr2Lines.valid("br2-emptyf-strictf-v2"),
    testCaseBr2Lines.valid("br2-emptyf-strictt-v2"),
    testCaseBr2Lines.valid("br3-emptyf-strictt"),
    testCaseBr2Lines.valid("br3-emptyt-strictt"),
    testCaseBr2Lines.valid("br3-emptyf-strictt-v2"),
    testCaseBr2Lines.valid("br3-emptyt-strictt-v2"),
  ],
  invalid: [
    testCaseBr2Lines.invalid(
      "br3-emptyf-strictf",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br3-emptyf-strictt-v2"
    ),
    testCaseBr2Lines.invalid(
      "br3-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Lines.invalid(
      "br3-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br3-emptyt-strictt"
    ),
  ],
});

const testCaseBr3Lines = getTestCase(dirName, [
  { br_spaces: 3, list_item_empty_lines: true, strict: false },
]);
ruleTester.run("MD009 (br_spaces=3, list_item_empty_lines=true, strict=false)", rule, {
  valid: [
    testCaseBr3Lines.valid("br2-emptyf-strictt"),
    testCaseBr3Lines.valid("br2-emptyt-strictt"),
    testCaseBr3Lines.valid("br2-emptyf-strictt-v2"),
    testCaseBr3Lines.valid("br3-emptyf-strictf"),
    testCaseBr3Lines.valid("br3-emptyf-strictt"),
    testCaseBr3Lines.valid("br3-emptyt-strictf"),
    testCaseBr3Lines.valid("br3-emptyt-strictt"),
    testCaseBr3Lines.valid("br3-emptyf-strictf-v2"),
    testCaseBr3Lines.valid("br3-emptyf-strictt-v2"),
    testCaseBr3Lines.valid("br3-emptyt-strictt-v2"),
  ],
  invalid: [
    testCaseBr3Lines.invalid(
      "br2-emptyf-strictf",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br2-emptyf-strictt-v2"
    ),
    testCaseBr3Lines.invalid(
      "br2-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br2-emptyt-strictt"
    ),
    testCaseBr3Lines.invalid(
      "br2-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br2-emptyf-strictt"
    ),
  ],
});

const testCaseBr2LineStrict = getTestCase(dirName, [
  { br_spaces: 2, list_item_empty_lines: true, strict: true },
]);
ruleTester.run("MD009 (br_spaces=2, list_item_empty_lines=true, strict=true)", rule, {
  valid: [
    testCaseBr2LineStrict.valid("br2-emptyf-strictt"),
    testCaseBr2LineStrict.valid("br2-emptyf-strictt-v2"),
    testCaseBr2LineStrict.valid("br2-emptyt-strictt"),
    testCaseBr2LineStrict.valid("br3-emptyf-strictt"),
    testCaseBr2LineStrict.valid("br3-emptyt-strictt"),
    testCaseBr2LineStrict.valid("br3-emptyf-strictt-v2"),
    testCaseBr2LineStrict.valid("br3-emptyt-strictt-v2"),
  ],
  invalid: [
    testCaseBr2LineStrict.invalid(
      "br2-emptyf-strictf",
      ["Trailing spaces: Expected: 0 or 2; Actual: 2"],
      "br2-emptyf-strictt-v2"
    ),
    testCaseBr2LineStrict.invalid(
      "br2-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 2; Actual: 2"],
      "br2-emptyt-strictt"
    ),
    testCaseBr2LineStrict.invalid(
      "br3-emptyf-strictf",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br3-emptyf-strictt-v2"
    ),
    testCaseBr2LineStrict.invalid(
      "br3-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br3-emptyt-strictt"
    ),
    testCaseBr2LineStrict.invalid(
      "br3-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
  ],
});

const testCaseBr3LineStrict = getTestCase(dirName, [
  { br_spaces: 3, list_item_empty_lines: true, strict: true },
]);
ruleTester.run("MD009 (br_spaces=3, list_item_empty_lines=true, strict=true)", rule, {
  valid: [
    testCaseBr3LineStrict.valid("br2-emptyf-strictt"),
    testCaseBr3LineStrict.valid("br2-emptyt-strictt"),
    testCaseBr3LineStrict.valid("br2-emptyf-strictt-v2"),
    testCaseBr3LineStrict.valid("br3-emptyf-strictt"),
    testCaseBr3LineStrict.valid("br3-emptyt-strictt"),
  ],
  invalid: [
    testCaseBr3LineStrict.invalid(
      "br2-emptyf-strictf",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br2-emptyf-strictt-v2"
    ),
    testCaseBr3LineStrict.invalid(
      "br2-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br2-emptyt-strictt"
    ),
    testCaseBr3LineStrict.invalid(
      "br2-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br3-emptyf-strictt"
    ),
    testCaseBr3LineStrict.invalid(
      "br3-emptyf-strictf",
      ["Trailing spaces: Expected: 0 or 3; Actual: 3"],
      "br3-emptyt-strictt-v2"
    ),
    testCaseBr3LineStrict.invalid(
      "br3-emptyt-strictf",
      ["Trailing spaces: Expected: 0 or 3; Actual: 3"],
      "br3-emptyt-strictt"
    ),
  ],
});

const testCaseBr2Strict = getTestCase(dirName, [
  { br_spaces: 2, list_item_empty_lines: false, strict: true },
]);
ruleTester.run("MD009 (br_spaces=2, list_item_empty_lines=false, strict=true)", rule, {
  valid: [
    testCaseBr2Strict.valid("br2-emptyf-strictt"),
    testCaseBr2Strict.valid("br3-emptyf-strictt"),
  ],
  invalid: [
    testCaseBr2Strict.invalid(
      "br2-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 2; Actual: 4"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br2-emptyf-strictf",
      [
        "Trailing spaces: Expected: 0 or 2; Actual: 2",
        "Trailing spaces: Expected: 0 or 2; Actual: 2",
      ],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br2-emptyt-strictf",
      [
        "Trailing spaces: Expected: 0 or 2; Actual: 2",
        "Trailing spaces: Expected: 0 or 2; Actual: 4",
      ],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br2-emptyf-strictt-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 2"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br3-emptyf-strictf",
      [
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
      ],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br3-emptyt-strictf",
      [
        "Trailing spaces: Expected: 0 or 2; Actual: 3",
        "Trailing spaces: Expected: 0 or 2; Actual: 6",
      ],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br3-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 2; Actual: 6"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br3-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br3-emptyf-strictt-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
    testCaseBr2Strict.invalid(
      "br3-emptyt-strictt-v2",
      ["Trailing spaces: Expected: 0 or 2; Actual: 3"],
      "br2-emptyf-strictt"
    ),
  ],
});

const testCaseBr3Strict = getTestCase(dirName, [
  { br_spaces: 3, list_item_empty_lines: false, strict: true },
]);
ruleTester.run("MD009 (br_spaces=3, list_item_empty_lines=false, strict=true)", rule, {
  valid: [
    testCaseBr3Strict.valid("br2-emptyf-strictt"),
    testCaseBr3Strict.valid("br3-emptyf-strictt"),
  ],
  invalid: [
    testCaseBr3Strict.invalid(
      "br2-emptyf-strictf",
      [
        "Trailing spaces: Expected: 0 or 3; Actual: 2",
        "Trailing spaces: Expected: 0 or 3; Actual: 2",
      ],
      "br3-emptyf-strictt"
    ),
    testCaseBr3Strict.invalid(
      "br2-emptyt-strictf",
      [
        "Trailing spaces: Expected: 0 or 3; Actual: 2",
        "Trailing spaces: Expected: 0 or 3; Actual: 4",
      ],
      "br3-emptyf-strictt"
    ),
    testCaseBr3Strict.invalid(
      "br2-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 3; Actual: 4"],
      "br3-emptyf-strictt"
    ),
    testCaseBr3Strict.invalid(
      "br2-emptyf-strictf-v2",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br3-emptyf-strictt"
    ),
    testCaseBr3Strict.invalid(
      "br2-emptyf-strictt-v2",
      ["Trailing spaces: Expected: 0 or 3; Actual: 2"],
      "br3-emptyf-strictt"
    ),
    testCaseBr3Strict.invalid(
      "br3-emptyt-strictt",
      ["Trailing spaces: Expected: 0 or 3; Actual: 6"],
      "br3-emptyf-strictt"
    ),
    testCaseBr3Strict.invalid(
      "br3-emptyf-strictf",
      [
        "Trailing spaces: Expected: 0 or 3; Actual: 3",
        "Trailing spaces: Expected: 0 or 3; Actual: 3",
      ],
      "br3-emptyf-strictt"
    ),
    testCaseBr3Strict.invalid(
      "br3-emptyt-strictf",
      [
        "Trailing spaces: Expected: 0 or 3; Actual: 3",
        "Trailing spaces: Expected: 0 or 3; Actual: 6",
      ],
      "br3-emptyf-strictt"
    ),
  ],
});
