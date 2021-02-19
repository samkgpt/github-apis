"use strict";
var query = require("../query");

/**
 * Creat a issue on an GitHub repository.
 * @param {Object} opts - function options
 * @param {string} opts.owner - GitHub user id
 * @param {string} opts.repo - GitHub user repo
 * @param {string} opts.body.title - GitHub issue title
 */

const createIssue = (opts) => {
  if (typeof opts !== "object") {
    throw new TypeError("options must be a object to req.get");
  }

  if (!opts.owner) {
    throw new TypeError("owner must be a string to req.get");
  }

  if (!opts.repo) {
    throw new TypeError("repo must be a string to req.get");
  }

  if (!opts.body.title) {
    throw new TypeError("title must be a string to req.get");
  }

  query(opts, "POST", "create", (error, response) => {
    if (error) {
      throw new TypeError(error);
    }

    return response;
  });
};

module.exports = createIssue;
