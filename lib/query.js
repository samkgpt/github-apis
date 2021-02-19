"use strict";
var http = require("https");
const C = require("../fixtures/constants");

/**
 * Make an reqest to GitHub repository.
 * @param {Object} opts - function options
 * @param {string} type - Request methot
 * @param {string} opts.token - GitHub access token
 * @param {string} opts.repo - GitHub access repo
 * @param {string} opts.token - GitHub access token
 * @param {string} opts.body.title - GitHub issue title
 * @param {string} opts.body.state - GitHub issue state
 */

const query = (opts, type, from) => {
  let form = "";
  let url = "";

  if (from === "issues") {
    url = `/repos/${opts.owner}/${opts.repo}/issues?access_token=${opts.token}`;
  } else if (from === "issue") {
    url = `/repos/${opts.owner}/${opts.repo}/issues/${opts.body.issue_number}?access_token=${opts.token}`;
  } else if (from === "create") {
    url = `/repos/${opts.owner}/${opts.repo}/issues?access_token=${opts.token}`;
    form = `{"title": "${opts.body.title}", "body": "${opts.body.body}", "state": "${opts.body.state}"}`;
  } else if (from === "update") {
    url = `/repos/${opts.owner}/${opts.repo}/issues/${opts.body.issue_number}?access_token=${opts.token}`;
    form = `{"title": "${opts.body.title}", "body": "${opts.body.body}", "state": "${opts.body.state}"}`;
  }

  var options = {
    method: type,
    hostname: "api.github.com",
    port: null,
    path: url,
    headers: {
      "User-Agent": C.user_agent,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  var req = http.request(options, (res) => {
    var chunks = [];

    res.on("data", (chunk) => {
      chunks.push(chunk);
    });

    res.on("end", () => {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(form);
  req.end();
};

module.exports = query;
