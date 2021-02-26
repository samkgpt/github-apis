"use strict";
var q = require("../request");

module.exports = {
  /**
   * @Function listComment - List a comment from a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.issue_number - GitHub issue number
   */
  listComment: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    if (!o.body.comment_id) {
      throw new TypeError("issue_number must be a number to req.get");
    }

    if (typeof o.body.comment_id != "number") {
      throw new TypeError("issue_number must be a number to req.get");
    }

    return q.query(o, "get", "list-comment");
  },

  /**
   * @Function listComments - List all comment from a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   */
  listComments: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    return q.query(o, "get", "list-comments");
  },

  /**
   * @Function createComment - Creat a comment on a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.title - GitHub issue title
   */
  createComment: (o) => {
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

    return q.query(o, "post", "create-comment");
  },

  /**
   * @Function updateComment -Update a comment on a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repo
   * @param {string} o.body.issue_number - GitHub issue number
   */
  updateComment: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.body.comment_id) {
      throw new TypeError("issue_number must be a number to req.get");
    }

    if (typeof o.body.comment_id != "number") {
      throw new TypeError("comment_id must be a number to req.get");
    }

    return q.query(o, "patch", "update-comment");
  },

  /**
   * @Function deleteComment - Delete a comment from a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repository
   */
  deleteComment: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    if (!o.body.comment_id) {
      throw new TypeError("comment_id must be a number to req.get");
    }

    return q.query(o, "delete", "delete-comment");
  },
};
