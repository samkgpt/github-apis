"use strict";
var listRepo = require("./lib/repo/list.repo");
var updateRepo = require("./lib/repo/update.repo");
var deleteRepo = require("./lib/repo/delete.repo");

var listIssues = require("./lib/issue/list.issues");
var listIssue = require("./lib/issue/list.issue");
var createIssue = require("./lib/issue/create.issue");
var updateIssue = require("./lib/issue/update.issue");
module.exports = {
  listRepo,
  updateRepo,
  deleteRepo,
  listIssues,
  listIssue,
  createIssue,
  updateIssue,
};
