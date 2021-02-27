"use strict";

/**
 * Import repositories functions
 * @Function listRepos - List all repository details
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
 * Import issues functions
 * @Function listIssues - List all issues of a repository
 * @Function listIssues - List a issue of a repository
 * @Function createIssue - Creating a issue on a repository
 * @Function updateIssue - Updating a issue detials of a repository
 * @Function lockIssue - Lock a issue on a GitHub repository.
 * @Function unlockIssue - Unlock a issue on a GitHub repository.
 */
let {
  listIssue,
  listIssues,
  createIssue,
  updateIssue,
  lockIssue,
  unlockIssue,
} = require("./issue");

/**
 * Import issue comments functions
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
 * Import issue assignees functions
 * @Function listAssignees - Lists the available assignees for issues in a repository.
 * @Function checkAssignee - Checks if a user has permission to be assigned to an issue in this repository.
 * @Function addAssignees - Add users to have permission to an issue in this repository.
 * @Function removeAssignees - Removes one or more assignees from an issue.
 */
let {
  listAssignees,
  checkAssignee,
  addAssignees,
  removeAssignees,
} = require("./assignees");

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
  lockIssue,
  unlockIssue,
  listComment,
  listComments,
  createComment,
  updateComment,
  deleteComment,
  listAssignees,
  checkAssignee,
  addAssignees,
  removeAssignees,
};
