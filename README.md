# eslint-plugin-markdownlint

> ESLint plugin that runs [markdownlint](https://github.com/DavidAnson/markdownlint) rules on Markdown files.

[![npm version](https://badge.fury.io/js/eslint-plugin-markdownlint.svg)](https://badge.fury.io/js/eslint-plugin-markdownlint)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Install

```shell
npm install eslint-plugin-markdownlint --save-dev
```

## Usage

### Flat config (ESLint ≥9)

```js
// eslint.config.js
import markdownlint from "eslint-plugin-markdownlint";
import markdownlintParser from "eslint-plugin-markdownlint/parser.js";

export default [
  {
    files: ["**/*.md"],
    plugins: { markdownlint },
    languageOptions: { parser: markdownlintParser },
    rules: {
      ...markdownlint.configs.recommended.rules,
    },
  },
];
```

### Legacy `.eslintrc`

```json
{
  "overrides": [
    {
      "files": ["*.md"],
      "parser": "eslint-plugin-markdownlint/parser",
      "extends": ["plugin:markdownlint/recommended"]
    }
  ]
}
```

## Configuring rules

All rules accept an options object matching the corresponding markdownlint rule
parameters. For example:

```js
rules: {
  "markdownlint/md013": ["error", { line_length: 100, code_blocks: false }],
  "markdownlint/md033": ["error", { allowed_elements: ["br", "details"] }],
  "markdownlint/md025": "off",
}
```

See [markdownlint rules documentation](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
for the full list of available options per rule.

## Config file integration

The plugin automatically reads the nearest `.markdownlint.json` or
`.markdownlint.jsonc` file, walking up from the linted file's directory. This
is the same file the
[vscode-markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
extension reads, so you can share configuration between the editor and ESLint
without duplication.

Rule options in your ESLint config always take precedence over the config file.

### Custom config file location

If your config file is in a non-standard location, point to it via ESLint
`settings`:

```js
// eslint.config.js
export default [
  {
    files: ["**/*.md"],
    plugins: { markdownlint },
    languageOptions: { parser: markdownlintParser },
    settings: {
      markdownlint: { configFile: ".config/.markdownlint.json" },
    },
    rules: markdownlint.configs.recommended.rules,
  },
];
```

The path is resolved relative to the current working directory.

## TypeScript

The package ships with type definitions. Rule option types are exported for use
in typed ESLint configs:

```ts
import type { MD013Options, MD033Options } from "eslint-plugin-markdownlint";
```

The `RuleOptionsMap` type maps each rule name to its options interface, which
is useful with typed flat config helpers.

## Supported rules

All built-in markdownlint rules are supported (MD001–MD060, excluding the
deprecated MD002 and MD006):

| Rule | Description |
|------|-------------|
| MD001 | Heading levels should only increment by one level at a time |
| MD003 | Heading style |
| MD004 | Unordered list style |
| MD005 | Inconsistent indentation for list items at the same level |
| MD007 | Unordered list indentation |
| MD009 | Trailing spaces |
| MD010 | Hard tabs |
| MD011 | Reversed link syntax |
| MD012 | Multiple consecutive blank lines |
| MD013 | Line length |
| MD014 | Dollar signs used before commands without showing output |
| MD018 | No space after hash on atx style heading |
| MD019 | Multiple spaces after hash on atx style heading |
| MD020 | No space inside hashes on closed atx style heading |
| MD021 | Multiple spaces inside hashes on closed atx style heading |
| MD022 | Headings should be surrounded by blank lines |
| MD023 | Headings must start at the beginning of the line |
| MD024 | Multiple headings with the same content |
| MD025 | Multiple top-level headings in the same document |
| MD026 | Trailing punctuation in heading |
| MD027 | Multiple spaces after blockquote symbol |
| MD028 | Blank line inside blockquote |
| MD029 | Ordered list item prefix |
| MD030 | Spaces after list markers |
| MD031 | Fenced code blocks should be surrounded by blank lines |
| MD032 | Lists should be surrounded by blank lines |
| MD033 | Inline HTML |
| MD034 | Bare URL used |
| MD035 | Horizontal rule style |
| MD036 | Emphasis used instead of a heading |
| MD037 | Spaces inside emphasis markers |
| MD038 | Spaces inside code span elements |
| MD039 | Spaces inside link text |
| MD040 | Fenced code blocks should have a language specified |
| MD041 | First line in a file should be a top-level heading |
| MD042 | No empty links |
| MD043 | Required heading structure |
| MD044 | Proper names should have the correct capitalization |
| MD045 | Images should have alternate text (alt text) |
| MD046 | Code block style |
| MD047 | Files should end with a single newline character |
| MD048 | Code fence style |
| MD049 | Emphasis style |
| MD050 | Strong style |
| MD051 | Link fragments should be valid |
| MD052 | Reference links and images should use a label that is defined |
| MD053 | Link and image reference definitions should be needed |
| MD054 | Link and image style |
| MD055 | Table pipe style |
| MD056 | Table column count |
| MD058 | Tables should be surrounded by blank lines |
| MD059 | Link text should be descriptive |
| MD060 | Table column style |

## Markdownlint documentation

For full rule documentation refer to
[DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint).
