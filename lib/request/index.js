"use strict";
const { Octokit } = require("@octokit/rest");

module.exports = {
  /**
   * Make an reqest to GitHub repository.
   * @param {Object} o - Function options
   * @param {string} t - Request method type like get, post, patch etc
   * @param {string} f - Request method comes from which file
   * @param {string} d - Request form data to execute
   * @param {string} u - Request api path url
   * @param {string} o.token - GitHub account access token
   * @param {string} o.repo - GitHub repository name
   * @param {string} o.body.title - GitHub repository issue title
   * @param {string} o.body.state - GitHub repository issue state
   */

  query: async (o, t, f) => {
    let u = "";

    if (f === "list-issues") {
      u = `/repos/${o.owner}/${o.repo}/issues`;
    } else if (f === "list-issue") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}`;
    } else if (f === "create-issue") {
      u = `/repos/${o.owner}/${o.repo}/issues`;
    } else if (f === "update-issue") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}`;
    } else if (f === "lock-issue") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}/lock`;
    } else if (f === "unlock-issue") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}/lock`;
    } else if (f === "list-repos") {
      u = `/user/repos`;
    } else if (f === "list-repo") {
      u = `/repos/${o.owner}/${o.repo}`;
    } else if (f === "create-repo") {
      u = `/user/repos`;
    } else if (f === "update-repo") {
      u = `/repos/${o.owner}/${o.repo}`;
    } else if (f === "delete-repo") {
      u = `/repos/${o.owner}/${o.repo}`;
    } else if (f === "list-comments") {
      u = `/repos/${o.owner}/${o.repo}/issues/comments`;
    } else if (f === "list-comment") {
      u = `/repos/${o.owner}/${o.repo}/issues/comments/${o.body.comment_id}`;
    } else if (f === "create-comment") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}/comments`;
    } else if (f === "update-comment") {
      u = `/repos/${o.owner}/${o.repo}/issues/comments/${o.body.comment_id}`;
    } else if (f === "delete-comment") {
      u = `/repos/${o.owner}/${o.repo}/issues/comments/${o.body.comment_id}`;
    } else if (f === "list-assignees") {
      u = `/repos/${o.owner}/${o.repo}/assignees`;
    } else if (f === "check-assignee") {
      u = `/repos/${o.owner}/${o.repo}/assignees/${o.body.assignee}`;
    } else if (f === "add-assignees") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}/assignees`;
    } else if (f === "remove-assignees") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}/assignees`;
    }

    if (!t && !u) {
      throw new TypeError("options must be valid to req.get");
    }

    const octokit = new Octokit({ auth: o.token });

    const response = await octokit.request(`${t} ${u}`, o.body);

    if (response.total_count === 0) {
      throw new TypeError("options must be valid to req.get");
    }

    return response;
  },
};
