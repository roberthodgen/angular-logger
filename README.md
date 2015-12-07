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

Make `roberthodgen.angular-logger` available in your modules, e.g.:

```
var app = angular.module('myAppOrModule', ['roberthodgen.angular-logger']);
```


### Creating log entries

```
Log.debug('My debug message here...');
```

Where `debug` property of `Log` should be switched to your defined level.


### Accessing history

```
Log.debug.history
```

An Array with a given level's history is set as the `history` property of each level.


### Using hooks

```
var deregisterFn = Log.debug.addHook(function (entry) {
  // Code to handle hook callback...
});
```

A hook may be added via calling `addHook` on a given log level. The function will be called every time the level receives a new entry.

Note: `deregisterFn` is a function that removes the hook. It should be called when the hook is no longer needed. E.g. on a controller's $scope `$destroy` event:

```
$scope.$on('$destroy', function () {
  deregisterFn();
  // Other cleanup code...
});
```


### Defining custom log levels

Custom log levels can be defined at the config state using the `LogProvider`.

```
app.config(['LogProvider', function (LogProvider) {
  LogProvider.LOG_LEVELS = ['info', 'debug', 'warn', 'error'];
}]);
```

A working example of defining custom levels can be seen in `example/app.js`.

A custom log level may also accept an Object in the following form:

```
{
  name: 'debug',
  hooks: [
    function (entry) {
      // Code to handle entry...
    }
  ]
}
```


Where the `name` property is the name associated with the log level and `hooks` is an Array of callback hook functions.

NOTE: When adding hooks during config no deregister functions are saved or returned!


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
