"use strict";
var request = require("request");
const C = require("../fixtures/constants");

function query(opts, type, from) {
  let form = "";
  let url;

  if (from === "issues") {
    url = `https://api.github.com/repos/${opts.owner}/${opts.repo}/issues`;
  } else if (from === "issue") {
    url = `https://api.github.com/repos/${opts.owner}/${opts.repo}/issues/${opts.body.issue_number}`;
  } else if (from === "create") {
    url = `https://api.github.com/repos/${opts.owner}/${opts.repo}/issues`;
    form = `{"title": "${opts.body.title}", "body": "${opts.body.body}", "state": "${opts.body.state}"}`;
  } else if (from === "update") {
    url = `https://api.github.com/repos/${opts.owner}/${opts.repo}/issues/${opts.body.issue_number}`;
    form = `{"title": "${opts.body.title}", "body": "${opts.body.body}", "state": "${opts.body.state}"}`;
  }

  var options = {
    method: type,
    url: url,
    qs: { access_token: `${opts.token}` },
    headers: {
      "User-Agent": C.user_agent,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  };

  request(options, function (error, response, body) {
    if (error) {
      return err;
    }
    console.log(body);
  });
}

module.exports = query;
