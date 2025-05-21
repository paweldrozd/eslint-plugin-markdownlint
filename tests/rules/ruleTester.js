import { RuleTester } from "eslint";
import parser from "../../parser.js";

const ruleTester = new RuleTester({
  languageOptions: {
    parser,
  },
});

export { ruleTester };
