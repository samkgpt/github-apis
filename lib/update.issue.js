"use strict";
var query = require("github-api-module/lib/query");

function updateIssue(opts) {
  query(opts , 'PATCH' , 'update');
}

module.exports = updateIssue;
