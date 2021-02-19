"use strict";
var query = require("./query");

const listIssues = (opts) => {
  query(opts, "GET", "issues", (error, response) => {
    if (error) {
      return new TypeError(error);
    }

    return response;
  });
};

module.exports = listIssues;
