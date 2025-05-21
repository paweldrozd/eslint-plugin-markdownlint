/**
 * @fileOverview Single rule checker.
 * @author Paweł BB Drozd
 */

import { lint } from "markdownlint/sync";
import { allRulesDisabled, formatters } from "./utils/index.js";

/**
 * Check the rule.
 * @param {string} ruleId - Rule Id
 * @param {RuleContext} context
 */
const check = (ruleId, context, src) => {
  const config = Object.assign({}, allRulesDisabled, {
    [ruleId]:
      context.options && context.options.length
        ? Object.assign({}, context.options[0])
        : true,
  });

  const { text: errors } = lint({
    strings: { text: src.getText() },
    config,
    resultVersion: 3,
  });

  return errors;
};

const getRange = (src, err) => {
  const errorLine = (err.fixInfo.lineNumber || err.lineNumber) - 1;
  const text = src.getText().split(/\r\n?|\n/g);
  const charsBefore = text
    .slice(0, errorLine)
    .reduce((acc, line) => line.length + 1 + acc, 0);

  let start, end;
  if (err.fixInfo === null) {
    start = charsBefore;
    end = start + text[err.lineNumber - 1].length + 1;
  } else if (
    err.lineNumber === text.length &&
    err.fixInfo &&
    err.fixInfo.deleteCount < 0
  ) {
    start = src.getIndexFromLoc({
      line: err.lineNumber + err.fixInfo.deleteCount,
      column: 0,
    });
    end = src.getIndexFromLoc({
      line: err.lineNumber,
      column: text[err.lineNumber - 1].length,
    });
  } else if (err.fixInfo && err.fixInfo.deleteCount < 0) {
    start = src.getIndexFromLoc({ line: err.lineNumber, column: 0 });
    end = src.getIndexFromLoc({
      line: err.lineNumber - err.fixInfo.deleteCount,
      column: 0,
    });
  } else {
    start = charsBefore + (err.fixInfo.editColumn || 1) - 1;
    end = start + (err.fixInfo.deleteCount || 0);
  }

  return [start, end];
};

const md012Preprocessor = (errors) => {
  const deleteLineErrors = errors.filter(
    (err) => err.fixInfo && err.fixInfo.deleteCount === -1
  );
  const others = errors.filter((err) => !err.fixInfo || err.fixInfo.deleteCount !== -1);

  const joinedErrors = [];
  let line = null;
  deleteLineErrors.forEach((dle) => {
    if (!line) {
      joinedErrors.push(dle);
      line = dle.lineNumber;
    } else if (dle.lineNumber === line + 1) {
      joinedErrors[joinedErrors.length - 1].fixInfo.deleteCount +=
        dle.fixInfo.deleteCount;
      joinedErrors[joinedErrors.length - 1].errorDetail = dle.errorDetail;
      line = dle.lineNumber;
    }
  });

  return others.concat(joinedErrors);
};

const handleErrors = (errors, src) => {
  if (errors.length && errors[0].ruleNames[0] === "MD012") {
    errors = md012Preprocessor(errors);
  }

  return errors.map((err) => {
    const error = {
      loc: formatters.getLocation(err),
      message: formatters.formatMessage(err),
    };

    if (err.fixInfo) {
      error.fix = function (fixer) {
        const range = getRange(src, err);
        if (range[0] === range[1]) {
          return fixer.insertTextBeforeRange(range, err.fixInfo.insertText || "");
        }
        return fixer.replaceTextRange(range, err.fixInfo.insertText || "");
      };
    }

    return error;
  });
};

const reportErrors = (context, errors) => {
  errors.forEach((err) => context.report(err));
};

export default (ruleId) =>
  function (context) {
    return {
      Program() {
        const src = context.getSourceCode();
        const errors = check(ruleId, context, src);
        const handledErrors = handleErrors(errors, src);
        reportErrors(context, handledErrors);
      },
    };
  };
