"use strict";
var q = require("../request");

module.exports = {
  /**
   * @Function listIssue - List a issue from an GitHub repository.
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

    q.query(o, "get", "list-issue", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },

  /**
   * @Function listIssues - List all issue from an GitHub repository.
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

    q.query(o, "get", "list-issues", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },

  /**
   * @Function createIssue - Creat a issue on an GitHub repository.
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

    q.query(o, "post", "create-issue", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },

  /**
   * @Function updateIssue -Update a issue on an GitHub repository.
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

    q.query(o, "patch", "update-issue", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },
};
