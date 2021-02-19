"use strict";
var query = require("./query");

/**
 * List a issue from an GitHub repository.
 * @param {Object} opts - function options
 * @param {string} opts.body.issue_number - GitHub issue number
 */

const listIssue = (opts) => {
  if (typeof opts !== "object") {
    throw new TypeError("options must be a object to req.get");
  }

  if (!opts.body.issue_number) {
    throw new TypeError("issue_number must be a number to req.get");
  }

  if (typeof opts.body.issue_number != "number") {
    throw new TypeError("issue_number must be a number to req.get");
  }

  query(opts, "GET", "issue", (error, response) => {
    if (error) {
      throw new TypeError(error);
    }

    return response;
  });
};

module.exports = listIssue;
