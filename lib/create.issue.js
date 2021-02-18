"use strict";
var query = require("./query");

function createIssue(opts) {
  query(opts , 'POST', "create");
}

module.exports = createIssue;
