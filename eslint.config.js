import nodePlugin from "eslint-plugin-n";
import prettierPlugin from "eslint-plugin-prettier";
import selfPlugin from "eslint-plugin-self";
import eslintJs from "@eslint/js";
import globals from "globals";

export default [
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
