const nodePlugin = require("eslint-plugin-node");
const prettierPlugin = require("eslint-plugin-prettier");
const selfPlugin = require("eslint-plugin-self");
const eslintJs = require("@eslint/js");
const globals = require("globals");

module.exports = [
  eslintJs.configs.recommended,
  {
    plugins: {
      node: nodePlugin,
      prettier: prettierPlugin,
      self: selfPlugin,
    },
    ignores: ["tests/rules/**/files/*.md", "CHANGELOG.md"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    },
  },
];
