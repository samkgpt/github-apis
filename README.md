## GitHub Api's
![npm](https://img.shields.io/npm/v/github-apis) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://status.david-dm.org/gh/request/request.svg)](https://david-dm.org/request/request)

``` bash
Creates, updates, closed issues from a GitHub repository.
Read, create, updates, delete repo details from a GitHub repository.
```

## Installation

``` bash
$ npm install github-apis
```

## Usage
``` javascript
var { listIssues, createIssue, updateIssue } = require( 'github-apis' );
var { listRepos, createRepo, updateRepo, deleteRepo } = require( 'github-apis' );
```
## GitHub Issue Examples
``` javascript
// List all issues from a repository
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
};
console.log( listIssues(options) );  // returns <issues_data>
```
``` javascript
// List a issue from a repository
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    issue_number: 23, // required
  },
};
console.log( listIssue(options) );  // returns <issue_data>
```
``` javascript
// Create issue on a repository
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    title: "title", // required
    body: "body",
  },
};
console.log( createIssue(options) );  // returns <created_issue_data>
```
``` javascript
// Update a issue on repo like issue title, body, status
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    title: "title",
    body: "body",
    issue_number: 23, // required
    state: "open or closed"
  },
};
console.log( updateIssue(options) );  // returns <updated_issue_data>
```

## GitHub Repository Examples
``` javascript
// List all repository for the authenticated user
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "",
};
console.log( listRepos(options) );  // returns <repos_data>
```
``` javascript
// List a repository for the authenticated user
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
};
console.log( listRepo(options) );  // returns <repo_data>
```
``` javascript
// Create a repository for the authenticated user
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  body: {
    name: "name", // new repo name
    description: "description",
    private: false, // true or false
  },
};
console.log( createRepo(options) );  // returns <created_repo_data>
```
``` javascript
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
console.log( updateRepo(options) );  // returns <updated_repo_data>
```
``` javascript
// Delete a repository
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo"
};
console.log( deleteRepo(options) );  // returns <>
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
[github-user-agent]: https://developer.github.com/v3/#user-agent-required
[github-rate-limit]: https://developer.github.com/v3/rate_limit/
