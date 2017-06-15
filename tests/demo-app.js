var Test = require("../lib/example-base-test-class");
var dpro = require("dpro");

module.exports = new Test({
  tags: ["app"],

  "login": function (client) {
    client
      .tap(150, 300)
      .keys("Manager@car.com")
      .pause(2000)
      .tap(150, 150)
      .pause(2000)
      .tap(150, 350)
      .keys("123")
      .tap(150, 150)
      .tap(150, 550)
      .pause(5000);
  }
});
