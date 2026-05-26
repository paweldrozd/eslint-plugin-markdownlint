import type { Linter } from "eslint";

declare const parser: Linter.Parser & {
  meta: {
    name: string;
  };
};

export default parser;
