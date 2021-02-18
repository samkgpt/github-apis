"use strict";
var query = require("github-api-module/lib/query");

const updateIssue = (opts) => {
  query(opts, "PATCH", "update");
};

module.exports = updateIssue;
