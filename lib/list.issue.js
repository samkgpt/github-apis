"use strict";
var query = require("./query");

const listIssue = (opts) => {
  query(opts, "GET", "issue");
};

module.exports = listIssue;
