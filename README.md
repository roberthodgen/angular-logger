# roberthodgen-logger

> Improved logger for AngularJS projects.


## Features

- Multiple, customizable log levels.
- Log history accessible via JavaScript.
- Hooks for error handling.


## Install

```
npm install roberthodgen-logger
```


## Usage

Include the `logger.js` file in your project:

```
<script src="logger.js"></script>
```

Make `roberthodgen.logger` available in your modules, e.g.:

```
var app = angular.module('myAppOrModule', ['roberthodgen.logger']);
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

A level's history is available through the `history` property.


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


## Tests

```
$ karma run
```

All unit tests are located in the `test` directory.


## Getting access to Log from browser console

With `LogProvider.ATTACH_TO_WINDOW` set to `TRUE` at configuration the Log service will be available in the JavaScript console simply as `Log`.


## Write to Console

With `LogProvider.TO_CONSOLE` set to `TRUE` at configuration each log level will output to the JavaScript console with a similar name, e.g. warn, or default to `info`. This is accomplished via Angular's `$log` with the following logic: `$log[level.name] || $log.info || angular.noop`
