describe('roberthodgen.angular-logger', function () {
    beforeEach(angular.mock.module('roberthodgen.angular-logger'));

    describe('LogProvider', function () {
        var LogProvider;

        beforeEach(angular.mock.module(function (_LogProvider_) {
          LogProvider = _LogProvider_;
        }));

          // Fire the injector
        beforeEach(angular.mock.inject(function () {}));

        it('should exist', function () {
          expect(LogProvider).toBeDefined();
        });
    });

    describe('Log', function () {
      var Log;

      beforeEach(angular.mock.inject(function (_Log_) {
        Log = _Log_;
      }))

      it('should exist', function () {
        expect(Log).toBeDefined();
      })
    });

    describe('LogLevelFactory', function () {
      var LogLevelFactory;

      beforeEach(angular.mock.inject(function (_LogLevelFactory_) {
        LogLevelFactory = _LogLevelFactory_;
      }));

      it('should exist', function () {
        expect(LogLevelFactory).toBeDefined();
        expect(LogLevelFactory).toEqual(jasmine.any(Function));
      })
    })
});
