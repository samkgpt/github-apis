## GitHub Api's

![npm](https://img.shields.io/npm/v/github-apis) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://status.david-dm.org/gh/request/request.svg)](https://david-dm.org/request/request)

```bash
Creates, list, updates, closed, delete repo, issues and issue comment
from a GitHub repository.
```

## Installation

```bash
$ npm install github-apis
```

## Usage

```javascript
var { listIssues, createIssue, updateIssue } = require("github-apis");
var { listRepos, createRepo, updateRepo, deleteRepo } = require("github-apis");
var { listComments, createComment, updateComment } = require("github-apis");
```

## GitHub Issue Examples

```javascript
// List repository issues
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
};

(async () => {
  console.log(await listIssues(options)); // returns <issues_data>
})();
```

```javascript
// List a repository issue
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    issue_number: 23, // required
  },
};

(async () => {
  console.log(await listIssue(options)); // returns <issue_data>
})();
```

```javascript
// Create issue on a repository
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    title: "title", // required
    body: "body",
    state: "open", // open or closed
    labels: ["bug", "dev"],
  },
};

(async () => {
  console.log(await createIssue(options)); // returns <created_issue_data>
})();
```

```javascript
// Update a issue on repo like issue title, body, status
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    title: "title",
    body: "body",
    issue_number: 23, // required
    state: "closed", // open or closed
    labels: ["bug", "dev"],
  },
};

(async () => {
  console.log(await updateIssue(options)); // returns <updated_issue_data>
})();
```

## GitHub Repository Examples

```javascript
// List all repository for the authenticated user
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "",
};

(async () => {
  console.log(await listRepos(options)); // returns <repos_data>
})();
```

```javascript
// List a repository for the authenticated user
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
};

(async () => {
  console.log(await listRepo(options)); // returns <repo_data>
})();
```

```javascript
// Create a repository for the authenticated user
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  body: {
    name: "name", // new repo name
    description: "description",
    private: false, // true or false
  },
};

(async () => {
  console.log(await createRepo(options)); // returns <created_repo_data>
})();
```

```javascript
// Update a repository details and its privacy
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    name: "name",
    description: "description",
    private: false, // true or false
    archived: false, // true or false
  },
};

(async () => {
  console.log(await updateRepo(options)); // returns <updated_repo_data>
})();
```

```javascript
// Delete a repository
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
};

(async () => {
  console.log(await deleteRepo(options)); // returns <>
})();
```

## GitHub Issue Comment Examples

```javascript
// List issue comments for a repository
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
};

(async () => {
  console.log(await listComments(options)); // returns <issue_comments_data>
})();
```

```javascript
// Get an issue comment
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    comment_id: "comment_id",
  },
};

(async () => {
  console.log(await listComment(options)); // returns <issue_comment_data>
})();
```

```javascript
// Create an issue comment
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    issue_number: "issue_number",
    body: "comment_data",
  },
};

(async () => {
  console.log(await createComment(options)); // returns <created_comment_data>
})();
```

```javascript
// Update an issue comment
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    comment_id: "comment_id",
    body: "comment_data",
  },
};

(async () => {
  console.log(await updateComment(options)); // returns <updated_comment_data>
})();
```

```javascript
// Delete an issue comment
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    comment_id: "comment_id",
  },
};

(async () => {
  console.log(await deleteComment(options)); // returns <>
})();
```

For more body options flow [github docs][github-docs], set the param into the body.

To [authenticate][github-oauth2] with GitHub, set the [`token`][github-token] option.

## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2021. S.Gupta

[github-docs]: https://docs.github.com/en/rest/reference/repos
[github-api]: https://developer.github.com/v3/
[github-token]: https://github.com/settings/tokens/new
[github-oauth2]: https://developer.github.com/v3/#oauth2-token-sent-in-a-header
