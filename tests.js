Tinytest.add('meteor-util', function (test) {
  var isDefined = false;
  try {
    util;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "util is not defined");
  test.equal(util.inspect({}), "{}");
});