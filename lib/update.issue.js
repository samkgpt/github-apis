"use strict";
var query = require("github-api-module/lib/query");

/**
 * Update a issue on an GitHub repository.
 * @param {Object} opts - function options
 * @param {string} opts.body.issue_number - GitHub issue number
 */

const updateIssue = (opts) => {
  if (!opts.body.issue_number) {
    throw new TypeError("issue_number must be a number to req.get");
  }

  if (typeof opts.body.issue_number != "number") {
    throw new TypeError("issue_number must be a number to req.get");
  }

  query(opts, "PATCH", "update", (error, response) => {
    if (error) {
      throw new TypeError(error);
    }

    return response;
  });
};

module.exports = updateIssue;
