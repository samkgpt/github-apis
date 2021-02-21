"use strict";
let q = require("../request");

module.exports = {
  /**
   * @Function listRepo - List all repository from an GitHub.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repository
   */
  listRepos: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    q.query(o, "get", "list-repos", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },

  /**
   * @Function listRepo - List a repository from a GitHub.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repository
   */
  listRepo: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    q.query(o, "get", "list-repo", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },

  /**
   * @Function listRepo - List all repository from an GitHub.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repository
   */
  createRepo: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    q.query(o, "post", "create-repo", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },

  /**
   * @Function updateRepo - Update a repository details on a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repository
   */
  updateRepo: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    q.query(o, "patch", "update-repo", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },

  /**
   * @Function deleteRepo - Delete a repository from a GitHub repository.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repository
   */
  deleteRepo: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    if (!o.owner) {
      throw new TypeError("owner must be a string to req.get");
    }

    if (!o.repo) {
      throw new TypeError("repo must be a string to req.get");
    }

    q.query(o, "delete", "delete-repo", (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },
};
