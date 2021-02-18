"use strict";
var query = require("./query");

const createIssue = (opts) => {
  query(opts, "POST", "create");
};

module.exports = createIssue;
