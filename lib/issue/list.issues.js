"use strict";
var query = require("../query");

/**
 * List all issue from an GitHub repository.
 * @param {Object} opts - function options
 * @param {string} opts.owner - GitHub user id
 * @param {string} opts.repo - GitHub user repo
 */

const listIssues = (opts) => {
  if (typeof opts !== "object") {
    throw new TypeError("options must be a object to req.get");
  }

  if (!opts.owner) {
    throw new TypeError("owner must be a string to req.get");
  }

  if (!opts.repo) {
    throw new TypeError("repo must be a string to req.get");
  }

  query(opts, "GET", "issues", (error, response) => {
    if (error) {
      throw new TypeError(error);
    }

    return response;
  });
};

module.exports = listIssues;
