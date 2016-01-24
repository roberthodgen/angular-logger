describe('roberthodgen.logger', function () {
    beforeEach(angular.mock.module('roberthodgen.logger'));

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
      }));

      it('should exist', function () {
        expect(Log).toBeDefined();
      });
    });

    describe('LogLevelFactory', function () {
      var LogLevelFactory;

      beforeEach(angular.mock.inject(function (_LogLevelFactory_) {
        LogLevelFactory = _LogLevelFactory_;
      }));

      it('should exist', function () {
        expect(LogLevelFactory).toBeDefined();
        expect(LogLevelFactory).toEqual(jasmine.any(Function));
      });

      describe('return value', function () {
        var log;

        beforeEach(function () {
          log = LogLevelFactory({
            name: 'test'
          });
        });

        it('should be a Function', function () {
          expect(log).toBeDefined();
          expect(log).toEqual(jasmine.any(Function));
        });

        it('should initialize an Array in LOG_HOOKS', function () {
          var LOG_HOOKS;

          angular.mock.inject(function (_LOG_HOOKS_) {
            LOG_HOOKS = _LOG_HOOKS_;
          });

          expect(LOG_HOOKS.test).toBeDefined();
          expect(LOG_HOOKS.test).toEqual(jasmine.any(Array));
        });

        it('should initialize an Array in LOG_HISTORY', function () {
          var LOG_HISTORY;

          angular.mock.inject(function (_LOG_HISTORY_) {
            LOG_HISTORY = _LOG_HISTORY_;
          });

          expect(LOG_HISTORY.test).toBeDefined();
          expect(LOG_HISTORY.test).toEqual(jasmine.any(Array));
        });

        it('should have a history property (equal to entry in LOG_HISTORY)', function () {
          var LOG_HISTORY;

          angular.mock.inject(function (_LOG_HISTORY_) {
            LOG_HISTORY = _LOG_HISTORY_;
          });

          expect(log.history).toBeDefined();
          expect(log.history).toEqual(LOG_HISTORY.test);
        });

        it('should have an addHook Function', function () {
          expect(log.addHook).toBeDefined();
          expect(log.addHook).toEqual(jasmine.any(Function));
        });

        describe('invoking with a single argument', function () {
          it('should push the argument onto LOG_HISTORY', function () {
            var LOG_HISTORY;

            angular.mock.inject(function (_LOG_HISTORY_) {
              LOG_HISTORY = _LOG_HISTORY_;
            });

            log('af154dab-6f59-41bf-a422-3dbc5702a8b9');
            expect(LOG_HISTORY.test[0]).toBe('af154dab-6f59-41bf-a422-3dbc5702a8b9');
          });

          it('should call all hooks with the argument', function () {
            var val,
              hook = function (arg) {
                val = arg;
              };
            log.addHook(hook);

            log('d3e18832-f64e-4adf-93c9-3e41229280f4');
            expect(val).toBe('d3e18832-f64e-4adf-93c9-3e41229280f4');
          });
        });
      });

      describe('addHook', function () {
        var log;

        beforeEach(function () {
          log = LogLevelFactory({
            name: 'test'
          });
        });

        it('should add the Function to LOG_HOOKS Object under the log', function () {
          var LOG_HOOKS;

          angular.mock.inject(function (_LOG_HOOKS_) {
            LOG_HOOKS = _LOG_HOOKS_;
          });

          expect(LOG_HOOKS.test).toBeDefined();
          expect(LOG_HOOKS.test).toEqual(jasmine.any(Array));
          expect(LOG_HOOKS.test.length).toBe(0);

          var fn = function () {};
          log.addHook(fn);

          expect(LOG_HOOKS.test.length).toBe(1);
          expect(LOG_HOOKS.test[0]).toEqual(fn);
        });

        describe('return value', function () {
          var val;

          beforeEach(function () {
            val = log.addHook(function () {});
          });

          it('should be a Function', function () {
            expect(val).toBeDefined();
            expect(val).toEqual(jasmine.any(Function));
          });

          it('should remove the hook from LOG_HOOKS when called', function () {
            var LOG_HOOKS;

            angular.mock.inject(function (_LOG_HOOKS_) {
              LOG_HOOKS = _LOG_HOOKS_;
            });

            val();

            expect(LOG_HOOKS.test).toBeDefined();
            expect(LOG_HOOKS.test).toEqual(jasmine.any(Array));
            expect(LOG_HOOKS.test.length).toBe(0);
          });
        });
      });
    });
});
