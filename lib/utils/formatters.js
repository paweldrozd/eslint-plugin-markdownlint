/**
 * @fileOverview Message and report formatters.
 * @author Paweł BB Drozd
 */

'use strict';

module.exports.formatMessage = ({ ruleDescription, errorDetail, errorContext }) => {
  let message = '';
  message += ruleDescription;
  if (errorDetail) {
    message += ': ' + errorDetail;
  }

  if (errorContext) {
    message += ` [Context: ${errorContext}]`;
  }

  return message;
};

module.exports.getLocation = ({ lineNumber, errorRange }) => {
  return {
    start: {
      line: lineNumber,
      column: errorRange ? errorRange[0] : 0,
    },
    end: {
      line: lineNumber,
      column: errorRange ? errorRange[0] + errorRange[1] : 0,
    },
  };
};
