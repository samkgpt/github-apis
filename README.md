## Create, Update, List Issues from an GitHub repository


## Installation

``` bash
$ npm install github-api-module
```

``` javascript
var {listIssues, listIssue, createIssue, updateIssue} = require( 'github-api-module' );
```
## Examples
``` javascript
// List all issue from an repo
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    title: "",
    body: "",
    issue_number: "",
    state: ""
  },
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
    title: "",
    body: "",
    issue_number: "23", // required
    state: ""
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
    issue_number: "",
    state: ""
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
    issue_number: "23", // required
    state: "open or closed"
  },
};
console.log( updateIssue(options) );  // returns <updated issue_data>
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
