describe('roberthodgen.angular-logger', function () {
    beforeEach(angular.mock.module('roberthodgen.angular-logger'));

    describe('Log', function () {
      var Log;

      beforeEach(angular.mock.inject(function (_Log_) {
        Log = _Log_;
      }))

      it('should exist', function () {
        expect(Log).toBeDefined();
      })
    });
});
