"use strict";

/**
 * Import repositories functions
 * @Function listRepo - List a repository details
 * @Function updateRepo - Update a repository details
 * @Function deleteRepo - For deleting a repository
 */
let { listRepo, updateRepo, deleteRepo } = require("./lib/repo");

/**
 * Import repositories functions
 * @Function listIssues - List all issues of an repository
 * @Function listIssues - List a issue of an repository
 * @Function createIssue - Creating a issue on a repository
 * @Function updateIssue - Updating a issue detials of an repository
 */
let {
  listIssue,
  listIssues,
  createIssue,
  updateIssue,
} = require("./lib/issue");

/**
 * Exports all imported GitHub functions
 */
module.exports = {
  listRepo,
  updateRepo,
  deleteRepo,
  listIssue,
  listIssues,
  createIssue,
  updateIssue,
};
