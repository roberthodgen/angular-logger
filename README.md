# angular-logger
---

> Improved logger for AngularJS projects.


## Features

- Multiple (and customizable) log levels.
- Log history (up to _n_ records).
- Run level support.
- Hooks for error handling.


## Usage

Include the `angular-logger.js` file in your project:

```
<script src="angular-logger.js"></script>
```

Make `roberthodgen.angular-logger` available in your modules:

```
var app = angular.module('myAppOrModule', ['roberthodgen.angular-logger']);
```


## Requirements

Ensure all NPM dependencies are installed and updated.

```
$ npm install
```

Install Karma

```
$ npm install -g karma-cli
```


## Tests

```
$ karma run
```

All unit tests are located in the `test` directory.


## Getting access to Log from browser console

TODO.
