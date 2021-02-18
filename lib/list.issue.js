"use strict";
var query = require("./query");

function listIssue(opts) {
  query(opts, "GET", "issue");
}

module.exports = listIssue;
