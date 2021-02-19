"use strict";
var query = require("../query");

/**
 * Delete a repo from an GitHub repository.
 * @param {Object} opts - function options
 * @param {string} opts.owner - GitHub user id
 * @param {string} opts.repo - GitHub user repo
 * @param {string} opts.body.issue_number - GitHub issue number
 */

const deleteRepo = (opts) => {
  if (typeof opts !== "object") {
    throw new TypeError("options must be a object to req.get");
  }

  if (!opts.owner) {
    throw new TypeError("owner must be a string to req.get");
  }

  if (!opts.repo) {
    throw new TypeError("repo must be a string to req.get");
  }

  query(opts, "DELETE", "delete-repo", (error, response) => {
    if (error) {
      throw new TypeError(error);
    }

    return response;
  });
};

module.exports = deleteRepo;
