"use strict";
var q = require("../request");

module.exports = {
  /**
   * @Function listIssue - List a issue from a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.issue_number - GitHub issue number
   */
  listIssue: (o) => {
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

    if (typeof o.body.issue_number != "number") {
      throw new TypeError("issue_number must be a number to req.get");
    }

    return q.query(o, "get", "list-issue");
  },

  /**
   * @Function listIssues - List all issue from a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   */
  listIssues: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    return q.query(o, "get", "list-issues");
  },

  /**
   * @Function createIssue - Creat a issue on a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.title - GitHub issue title
   */
  createIssue: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    if (!o.body.title) {
      throw new TypeError("title must be a string to req.get");
    }

    return q.query(o, "post", "create-issue");
  },

  /**
   * @Function updateIssue -Update a issue on a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.issue_number - GitHub issue number
   */
  updateIssue: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.body.issue_number) {
      throw new TypeError("issue_number must be a number to req.get");
    }

    if (typeof o.body.issue_number != "number") {
      throw new TypeError("issue_number must be a number to req.get");
    }

    return q.query(o, "patch", "update-issue");
  },

  /**
   * @Function lockIssue - Lock a issue on a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.issue_number - GitHub issue number
   */
  lockIssue: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.body.issue_number) {
      throw new TypeError("issue_number must be a number to req.get");
    }

    if (typeof o.body.issue_number != "number") {
      throw new TypeError("issue_number must be a number to req.get");
    }

    return q.query(o, "put", "lock-issue");
  },

  /**
   * @Function unlockIssue - Unlock a issue on a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.issue_number - GitHub issue number
   */
  unlockIssue: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.body.issue_number) {
      throw new TypeError("issue_number must be a number to req.get");
    }

    if (typeof o.body.issue_number != "number") {
      throw new TypeError("issue_number must be a number to req.get");
    }

    return q.query(o, "delete", "unlock-issue");
  },
};
