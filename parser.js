/**
 * @fileOverview Single rule checker.
 * @author Paweł BB Drozd
 */

// eslint-disable-next-line no-unused-vars
function parseForESLint(code, options) {
  const lines = code.split(/\r\n?|\n/g);
  const linesCount = lines.length;
  const lastLineLength = lines[linesCount - 1].length;

  return {
    ast: {
      type: "Program",
      start: 0,
      end: 0,
      loc: {
        start: { line: 1, column: 0 },
        end: { line: linesCount, column: lastLineLength },
      },
      range: [0, linesCount],
      body: [],
      comments: [],
      tokens: [],
      code,
    },
    scopeManager: null,
    visitorKeys: null,
  };
}

export default {
  parseForESLint,
  meta: {
    name: "markdownlint-parser",
  },
};
