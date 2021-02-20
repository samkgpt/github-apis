## GitHub Api's
![npm](https://img.shields.io/npm/v/github-apis) ![node-current](https://img.shields.io/node/v/github-apis?color=green) ![Hackage-Deps](https://img.shields.io/hackage-deps/v/github-apis)

``` bash
Creates, updates, closed issues and list, updates, delete repo details from an GitHub repository
```

## Installation

``` bash
$ npm install github-apis
```

## Usage
``` javascript
var { listIssues, createIssue, updateIssue } = require( 'github-apis' );
var { listRepo, updateRepo, deleteRepo } = require( 'github-apis' );
```
## GitHub Issue Examples
``` javascript
// List all issue from an repo
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
};
console.log( listIssues(options) );  // returns <all issue_data>
```
``` javascript
// List a issue from an repo
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    issue_number: 23, // required
  },
};
console.log( listIssue(options) );  // returns <a issue_data>
```
``` javascript
// Creat issue on an repo
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    title: "title", // required
    body: "body",
  },
};
console.log( createIssue(options) );  // returns <created issue_data>
```
``` javascript
// Upadting a issue on repo like issue title, body, status
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
console.log( updateIssue(options) );  // returns <updated issue_data>
```

## GitHub Repository Examples
``` javascript
// List a repo from an GitHub org
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
};
console.log( listRepo(options) );  // returns <repo_data>
```
``` javascript
// Update repo details and its privacy
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
console.log( updateRepo(options) );  // returns <repo_updated_data>
```
``` javascript
// Delete a repo from an org
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo"
};
console.log( deleteRepo(options) );  // returns <>
```

To [authenticate][github-oauth2] with GitHub, set the [`token`][github-token] option.


## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2021. S.Gupta.


[github-api]: https://developer.github.com/v3/
[github-token]: https://github.com/settings/tokens/new
[github-oauth2]: https://developer.github.com/v3/#oauth2-token-sent-in-a-header
[github-user-agent]: https://developer.github.com/v3/#user-agent-required
[github-rate-limit]: https://developer.github.com/v3/rate_limit/
