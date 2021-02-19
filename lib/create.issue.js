"use strict";
var query = require("./query");

const createIssue = (opts) => {
  if (!opts.body.title) {
    return new TypeError(
      "invalid input argument. Issue title must be a string primitive. Value: ``."
    );
  }

  query(opts, "POST", "create", (error, response) => {
    if (error) {
      return new TypeError(error);
    }

    return response;
  });
};

module.exports = createIssue;
