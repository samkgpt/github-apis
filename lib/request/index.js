"use strict";
var http = require("https");

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

  query: (o, t, f) => {
    let d = "";
    let u = "";
    let s = "";

    const p = o.body;
    for (var key of Object.keys(p)) {
      if (p[key] != "") {
        s += `"${key}": "${p[key]}",`;
      }
    }

    if (f === "list-issues") {
      u = `/repos/${o.owner}/${o.repo}/issues?access_token=${o.token}`;
    } else if (f === "list-issue") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}?access_token=${o.token}`;
    } else if (f === "create-issue") {
      u = `/repos/${o.owner}/${o.repo}/issues?access_token=${o.token}`;
      d = `{${s.slice(0, -1)}}`;
    } else if (f === "update-issue") {
      u = `/repos/${o.owner}/${o.repo}/issues/${o.body.issue_number}?access_token=${o.token}`;
      d = `{${s.slice(0, -1)}}`;
    } else if (f === "list-repos") {
      u = `/user/repos?access_token=${o.token}`;
    } else if (f === "list-repo") {
      u = `/repos/${o.owner}/${o.repo}?access_token=${o.token}`;
    } else if (f === "create-repo") {
      u = `/user/repos?access_token=${o.token}`;
      d = `{${s.slice(0, -1)}}`;
    } else if (f === "update-repo") {
      u = `/repos/${o.owner}/${o.repo}?access_token=${o.token}`;
      d = `{${s.slice(0, -1)}}`;
    } else if (f === "delete-repo") {
      u = `/repos/${o.owner}/${o.repo}?access_token=${o.token}`;
    }

    var options = {
      method: t,
      hostname: "api.github.com",
      port: null,
      path: u,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
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

    req.write(d);
    req.end();
  },
};
