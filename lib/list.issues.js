"use strict";
var query = require("./query");

const listIssues = (opts) => {
  query(opts, "GET", "issues");
};

module.exports = listIssues;
