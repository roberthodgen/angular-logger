(function () {

  var app = angular.module('app', [
    'roberthodgen.angular-logger'
  ]);

  app.config(['LogProvider', function (LogProvider) {


    /**
     * RUN_LEVELS
     * May be configured by setting.
     */
    LogProvider.RUN_LEVELS = ['debug', 'warn', 'error'];


    /**
     * RUN_LEVELS
     * Add a single run-level
     */
    LogProvider.RUN_LEVELS.push('test');


    /**
     * TO_CONSOLE_LOG
     */
    LogProvider.TO_CONSOLE_LOG = true;


    /**
     * ATTACH_TO_WINDOW
     * When set to true, the Log serice will be attached to the window
     * thus making it accessible on the JavaScript console.
     */
    LogProvider.ATTACH_TO_WINDOW = true;
  }]);

  app.controller('AppController', ['$scope', 'Log', function ($scope, Log) {
    $scope.init = function () {


      /**
       * Simple usage of the debug loging level.
       */
      Log.debug('AppController: $scope.init');
    };


    /**
     * Init
     */
    $scope.init();
  }])

})();
