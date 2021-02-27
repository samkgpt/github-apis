"use strict";
var q = require("../request");

module.exports = {
  /**
   * @Function listAssignees - Lists the available assignees for issues in a repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   */
  listAssignees: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    return q.query(o, "get", "list-assignees");
  },

  /**
   * @Function checkAssignee - Checks if a user has permission to be assigned to an issue in this repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.assignee - GitHub user username
   */
  checkAssignee: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    if (!o.body.assignee) {
      throw new TypeError("assignee must be a string to req.get");
    }

    return q.query(o, "get", "check-assignee");
  },

  /**
   * @Function addAssignees - Add users to have permission to an issue in this repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.issue_number - GitHub issue number
   * @param {string} o.body.assignees - GitHub users username in array of strings
   */
  addAssignees: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    if (!o.body.issue_number) {
      throw new TypeError("issue_number must be a number to req.get");
    }

    if (typeof o.body.assignees !== "object") {
      throw new TypeError("assignees must be a array of string to req.get");
    }

    return q.query(o, "post", "add-assignees");
  },

  /**
   * @Function removeAssignees - Removes one or more assignees from an issue.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.issue_number - GitHub issue number
   * @param {string} o.body.assignees - GitHub users username in array of strings
   */
  removeAssignees: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.body.issue_number) {
      throw new TypeError("issue_number must be a number to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    if (typeof o.body.assignees != "object") {
      throw new TypeError("assignees must be a array of string to req.get");
    }

    return q.query(o, "delete", "remove-assignees");
  },
};
