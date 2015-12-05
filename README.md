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


## Install (re dependencies)

```
$ npm install
```

Ensure all NPM dependencies are installed and updated.


## Tests

```
$ karma run
```

All unit tests are located in the `test` directory.
