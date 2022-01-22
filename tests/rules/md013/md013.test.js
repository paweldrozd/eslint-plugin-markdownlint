"use strict";

const rule = require("../../../lib/rules/md013");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD013 (default)", rule, {
  valid: [
    testCaseDefault.valid("80-80-80-tttff"),
    testCaseDefault.valid("80-80-80-ttttt"),
  ],
  invalid: [
    testCaseDefault.invalid("88-88-88-ttttt", [
      "Line length: Expected: 80; Actual: 88",
      "Line length: Expected: 80; Actual: 88",
      "Line length: Expected: 80; Actual: 88",
      "Line length: Expected: 80; Actual: 88",
      "Line length: Expected: 80; Actual: 88",
    ]),
  ],
});

const testCase808080tttff = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 80,
    code_block_line_length: 80,
    code_blocks: true,
    tables: true,
    headings: true,
    strict: false,
    stern: false,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=80; code_block_line_length=80; code_blocks=true; tables=true; headings=true; strict=false; stern=false)",
  rule,
  {
    valid: [
      testCase808080tttff.valid("80-80-80-tttff"),
      testCase808080tttff.valid("80-80-80-ttttt"),
    ],
    invalid: [
      testCase808080tttff.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);

const testCase808080ttttt = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 80,
    code_block_line_length: 80,
    code_blocks: true,
    tables: true,
    headings: true,
    strict: true,
    stern: true,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=80; code_block_line_length=80; code_blocks=true; tables=true; headings=true; strict=true; stern=true)",
  rule,
  {
    valid: [testCase808080ttttt.valid("80-80-80-ttttt")],
    invalid: [
      testCase808080ttttt.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);

const testCase788080ttttt = getTestCase(__dirname, [
  {
    line_length: 78,
    heading_line_length: 80,
    code_block_line_length: 80,
    code_blocks: true,
    tables: true,
    headings: true,
    strict: true,
    stern: true,
  },
]);
ruleTester.run(
  "MD013 (line_length=78; heading_line_length=80; code_block_line_length=80; code_blocks=true; tables=true; headings=true; strict=true; stern=true)",
  rule,
  {
    valid: [testCase788080ttttt.valid("78-80-80-ttttt")],
    invalid: [
      testCase788080ttttt.invalid("80-80-80-ttttt", [
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
      ]),
      testCase788080ttttt.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 78; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 80",
        "Line length: Expected: 78; Actual: 88",
        "Line length: Expected: 78; Actual: 88",
        "Line length: Expected: 78; Actual: 88",
        "Line length: Expected: 78; Actual: 88",
        "Line length: Expected: 78; Actual: 88",
        "Line length: Expected: 78; Actual: 88",
      ]),
    ],
  }
);

const testCase807880ttttt = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 78,
    code_block_line_length: 80,
    code_blocks: true,
    tables: true,
    headings: true,
    strict: true,
    stern: true,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=78; code_block_line_length=80; code_blocks=true; tables=true; headings=true; strict=true; stern=true)",
  rule,
  {
    valid: [testCase807880ttttt.valid("80-78-80-ttttt")],
    invalid: [
      testCase807880ttttt.invalid("80-80-80-ttttt", [
        "Line length: Expected: 78; Actual: 80",
      ]),
      testCase807880ttttt.invalid("88-88-88-ttttt", [
        "Line length: Expected: 78; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);

const testCase808078ttttt = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 80,
    code_block_line_length: 78,
    code_blocks: true,
    tables: true,
    headings: true,
    strict: true,
    stern: true,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=80; code_block_line_length=78; code_blocks=true; tables=true; headings=true; strict=true; stern=true)",
  rule,
  {
    valid: [testCase808078ttttt.valid("80-80-78-ttttt")],
    invalid: [
      testCase808078ttttt.invalid("80-80-80-ttttt", [
        "Line length: Expected: 78; Actual: 80",
      ]),
      testCase808078ttttt.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 78; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);

const testCase808080ftttt = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 80,
    code_block_line_length: 80,
    code_blocks: false,
    tables: true,
    headings: true,
    strict: true,
    stern: true,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=80; code_block_line_length=80; code_blocks=false; tables=true; headings=true; strict=true; stern=true)",
  rule,
  {
    valid: [
      testCase808080ftttt.valid("80-80-80-ftttt"),
      testCase808080ftttt.valid("80-80-80-ttttt"),
    ],
    invalid: [
      testCase808080ftttt.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);

const testCase808080tfttt = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 80,
    code_block_line_length: 80,
    code_blocks: true,
    tables: false,
    headings: true,
    strict: true,
    stern: true,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=80; code_block_line_length=80; code_blocks=true; tables=false; headings=true; strict=true; stern=true)",
  rule,
  {
    valid: [
      testCase808080tfttt.valid("80-80-80-tfttt"),
      testCase808080tfttt.valid("80-80-80-ttttt"),
    ],
    invalid: [
      testCase808080tfttt.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);

const testCase808080ttftt = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 80,
    code_block_line_length: 80,
    code_blocks: true,
    tables: true,
    headings: false,
    strict: true,
    stern: true,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=80; code_block_line_length=80; code_blocks=true; tables=true; headings=false; strict=true; stern=true)",
  rule,
  {
    valid: [
      testCase808080ttftt.valid("80-80-80-ttftt"),
      testCase808080ttftt.valid("80-80-80-ttttt"),
    ],
    invalid: [
      testCase808080ttftt.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);

const testCase808080tttft = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 80,
    code_block_line_length: 80,
    code_blocks: true,
    tables: true,
    headings: true,
    strict: false,
    stern: true,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=80; code_block_line_length=80; code_blocks=true; tables=true; headings=true; strict=false; stern=true)",
  rule,
  {
    valid: [
      testCase808080tttft.valid("80-80-80-tttft"),
      testCase808080tttft.valid("80-80-80-ttttt"),
    ],
    invalid: [
      testCase808080tttft.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);

const testCase808080ttttf = getTestCase(__dirname, [
  {
    line_length: 80,
    heading_line_length: 80,
    code_block_line_length: 80,
    code_blocks: true,
    tables: true,
    headings: true,
    strict: true,
    stern: false,
  },
]);
ruleTester.run(
  "MD013 (line_length=80; heading_line_length=80; code_block_line_length=80; code_blocks=true; tables=true; headings=true; strict=true; stern=false)",
  rule,
  {
    valid: [
      testCase808080ttttf.valid("80-80-80-ttttf"),
      testCase808080ttttf.valid("80-80-80-ttttt"),
    ],
    invalid: [
      testCase808080ttttf.invalid("88-88-88-ttttt", [
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
        "Line length: Expected: 80; Actual: 88",
      ]),
    ],
  }
);
