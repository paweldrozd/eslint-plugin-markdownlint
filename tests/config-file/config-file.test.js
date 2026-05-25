import { Linter } from "eslint";
import parser from "../../parser.js";
import { rules } from "../../lib/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixtures = path.join(__dirname, "fixtures");

const linter = new Linter({ configType: "flat" });

const makeConfig = (ruleId, options = undefined) => [
  {
    files: ["**/*.md"],
    plugins: { markdownlint: { rules } },
    rules: {
      [`markdownlint/${ruleId}`]: options != null ? ["error", options] : "error",
    },
    languageOptions: { parser },
  },
];

// Line longer than 10 chars — violates MD013 with line_length: 10
const LONG_LINE =
  "# Title\n\nThis is a very long line that exceeds any reasonable limit.\n";
// Short enough for default limit (80)
const SHORT_LINE = "# Title\n\nShort.\n";

describe("markdownlint config file integration", () => {
  test("uses options from .markdownlint.json when no ESLint options given", () => {
    const errors = linter.verify(LONG_LINE, makeConfig("md013"), {
      filename: path.join(fixtures, "with-config", "test.md"),
    });
    expect(errors.length).toBeGreaterThan(0);
  });

  test("ESLint options take precedence over config file options", () => {
    const errors = linter.verify(
      LONG_LINE,
      makeConfig("md013", { line_length: 1000 }),
      { filename: path.join(fixtures, "with-config", "test.md") }
    );
    expect(errors.length).toBe(0);
  });

  test("works without a config file (uses markdownlint defaults)", () => {
    const errors = linter.verify(SHORT_LINE, makeConfig("md013"), {
      filename: path.join(fixtures, "no-config", "test.md"),
    });
    expect(errors.length).toBe(0);
  });

  test("finds config file in parent directory", () => {
    const errors = linter.verify(LONG_LINE, makeConfig("md013"), {
      filename: path.join(fixtures, "with-config", "subdir", "test.md"),
    });
    expect(errors.length).toBeGreaterThan(0);
  });

  test("supports .markdownlint.jsonc files", () => {
    const errors = linter.verify(LONG_LINE, makeConfig("md013"), {
      filename: path.join(fixtures, "with-jsonc", "test.md"),
    });
    expect(errors.length).toBeGreaterThan(0);
  });

  test("uses custom config file from ESLint settings", () => {
    const configFile = path.join(fixtures, "custom-location", "my.markdownlint.json");
    const config = [
      {
        files: ["**/*.md"],
        plugins: { markdownlint: { rules } },
        rules: { "markdownlint/md013": "error" },
        settings: { markdownlint: { configFile } },
        languageOptions: { parser },
      },
    ];
    // file is in no-config dir (no auto-discovered config), but settings.configFile is used
    const errors = linter.verify(LONG_LINE, config, {
      filename: path.join(fixtures, "no-config", "test.md"),
    });
    expect(errors.length).toBeGreaterThan(0);
  });
});
