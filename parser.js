/**
 * @fileOverview Single rule checker.
 * @author Paweł BB Drozd
 */

"use strict";

const os = require("os");

// eslint-disable-next-line no-unused-vars
exports.parseForESLint = function (code, options) {
  const lines = code.split(os.EOL);
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
};
