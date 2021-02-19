"use strict";
var query = require("github-api-module/lib/query");

const updateIssue = (opts) => {
  if (!opts.body.issue_number) {
    return new TypeError(
      "invalid input argument. Issue no must be a integer primitive. Value: ``."
    );
  }

  query(opts, "PATCH", "update", (error, response) => {
    if (error) {
      return new TypeError(error);
    }

    return response;
  });
};

module.exports = updateIssue;
