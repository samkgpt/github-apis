## Create, Update, List Issues from a GitHub repository


## Installation

``` bash
$ npm install github-api-module
```


## Examples

``` javascript
var {listIssues, listIssue, createIssue, updateIssue} = 
require( 'github-api-module' );

var options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  owner: "gituser",
  repo: "repo",
  body: {
    title: "title",
    body: "issue body",
    issue_number: "23",
    state: "open or closed"
  },
};

listIssues(options); listIssue(options); 
createIssue(options); updateIssue(options);

```

To [authenticate][github-oauth2] with GitHub, set the [`token`][github-token] option.


## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2021. Shyam Gupta.


[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[unix-time]: http://en.wikipedia.org/wiki/Unix_time

[github-api]: https://developer.github.com/v3/
[github-token]: https://github.com/settings/tokens/new
[github-oauth2]: https://developer.github.com/v3/#oauth2-token-sent-in-a-header
[github-user-agent]: https://developer.github.com/v3/#user-agent-required
[github-rate-limit]: https://developer.github.com/v3/rate_limit/
