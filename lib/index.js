"use strict";

/**
 * Import repositories functions
 * @Function listRepo - List a repository details
 * @Function updateRepo - Update a repository details
 * @Function deleteRepo - For deleting a repository
 */
let {
  listRepo,
  listRepos,
  createRepo,
  updateRepo,
  deleteRepo,
} = require("./repo");

/**
 * Import repositories functions
 * @Function listIssues - List all issues of a repository
 * @Function listIssues - List a issue of a repository
 * @Function createIssue - Creating a issue on a repository
 * @Function updateIssue - Updating a issue detials of a repository
 */
let { listIssue, listIssues, createIssue, updateIssue } = require("./issue");

/**
 * Import repositories functions
 * @Function listComments - List all comment of a repository
 * @Function listComment - List a comment of a repository
 * @Function createComment - Creating a issue comment on a repository
 * @Function updateComment - Updating a issue comment of a repository
 * @Function deleteComment - Delete a issue comment of a repository
 */
let {
  listComment,
  listComments,
  createComment,
  updateComment,
  deleteComment,
} = require("./comments");

/**
 * Exports all imported GitHub functions
 */
module.exports = {
  listRepo,
  listRepos,
  createRepo,
  updateRepo,
  deleteRepo,
  listIssue,
  listIssues,
  createIssue,
  updateIssue,
  listComment,
  listComments,
  createComment,
  updateComment,
  deleteComment,
};
