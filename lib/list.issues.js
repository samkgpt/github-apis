"use strict";
var query = require("./query");

function listIssues(opts) {
  query(opts, "GET", "issues");
}

module.exports = listIssues;
