"use strict";
var query = require("./query");

/**
 * List all issue from an GitHub repository.
 * @param {Object} opts - function options
 */

const listIssues = (opts) => {
  if (typeof opts !== "object") {
    throw new TypeError("options must be a object to req.get");
  }

  query(opts, "GET", "issues", (error, response) => {
    if (error) {
      throw new TypeError(error);
    }

    return response;
  });
};

module.exports = listIssues;
