# eslint-plugin-markdownlint

> Eslint plugin which runs [markdownlint](https://github.com/DavidAnson/markdownlint).

[![npm version](https://badge.fury.io/js/eslint-plugin-markdownlint.svg)](https://badge.fury.io/js/eslint-plugin-markdownlint)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Install

```shell
npm install eslint-plugin-markdownlint --save-dev
```

## Usage

### Flat configs

```js
import markdownlintPlugin from "eslint-plugin-markdownlint";
import markdownlintParser from "eslint-plugin-markdownlint/parser";

export default [
    // other configs,
  {
    files: ['**/*md'],
    plugins: {
      'markdownlint': markdownlintPlugin
    },
    languageOptions: {
      parser: markdownlintParser
    },
    rules: {
      ...markdownlintPlugin.configs.recommended.rules
    }
  }
]
```

### Legacy `.eslintrc`

In order to use this plugin there is required to put it into override section
of `.eslintrc` file with defined files array (select markdown files), parser and
rules.

Recommended config enable all options except deprecated, all with default values
and reported as error.

```json
{
  "overrides": [{
    "files": ["*.md"],
    "parser": "eslint-plugin-markdownlint/parser",
    "extends": ["plugin:markdownlint/recommended"]
  }]
}
```

If you want to modify recommended rules simply add related rule to the rules
section.

```json
{
  "overrides": [{
    "files": ["*.md"],
    "parser": "eslint-plugin-markdownlint/parser",
    "extends": ["plugin:markdownlint/recommended"],
    "rules": {
      "markdownlint/md001": "off",
      "markdownlint/md003": "warn",
      "markdownlint/md025": ["error", {
        "level": 2
      }]
    }
  }]
}
```

If you want to configure all settings manually, ommit
`"extends": ["plugin:markdownlint/recommended"]` (all rules will be set to
'off'), then enable/configure requested rules in "rules" section.

It's worth to define separate entry in `.editorconfig` if you're using it.
Following example uses default settings.

```editorconfig
[*.md]
max_line_length = 80
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
```

## Limitations

This plugin is in early stage of development, so:

- there isn't supported any config file like `.mdlrc`
- aliases for rules are not supported, you need to use codes like `mdXXX` to
  select rule, but should be available in future
- [tags](https://github.com/DavidAnson/markdownlint/blob/main/README.md#tags)
  are not supported and there is no plans to support it

## Markdownlint

For full documentation about markdownlint refer [DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint)
