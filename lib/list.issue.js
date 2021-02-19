"use strict";
var query = require("./query");

const listIssue = (opts) => {
  query(opts, "GET", "issue", (error, response) => {
    if (error) {
      return new TypeError(error);
    }

    return response;
  });
};

module.exports = listIssue;
