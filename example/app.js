(function () {

  var app = angular.module('app', [
    'roberthodgen.angular-logger'
  ]);

  app.config(['LogProvider', function (LogProvider) {


    /**
     * LOG_LEVELS
     * May be configured by setting.
     */
    LogProvider.LOG_LEVELS = ['warn', 'info', 'error'];


    /**
     * LOG_LEVELS
     * Add a single log level
     */
    LogProvider.LOG_LEVELS.push('test');


    /**
     * LOG_LEVELS
     * Add a single log level with a hook.
     */
    LogProvider.LOG_LEVELS.push({
      name: 'alert',
      hooks: [function (entry) {
        alert(entry);
      }]
    });


    /**
     * TO_CONSOLE
     */
    LogProvider.TO_CONSOLE = true;


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
       * Simple usage of the info loging level.
       */
      Log.info('AppController: $scope.init');
    };


    /**
     * Init
     */
    $scope.init();
  }]);

})();
