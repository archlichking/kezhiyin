const Test = require("../lib/example-base-test-class");
const dpro = require("dpro");

const RECORD_NAME = `magellan test - ${dpro.customerName}`;

module.exports = new Test({
  tags: ["app", "ios"],

  "login": function (client) {
    client
      .tap(150, 300)
      .keys(dpro.username)
      .pause(2000)
      .tap(150, 150)
      .pause(2000)
      .tap(150, 350)
      .keys(dpro.password)
      .tap(150, 150)
      .tap(150, 550)
      .pause(5000);
  },

  "record": function (client) {
    client
      // click on record button
      .clickMobileEl("xpath",
      "//XCUIElementTypeApplication"
      + "/XCUIElementTypeWindow[1]"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther[2]"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther[2]"
      + "/XCUIElementTypeOther[2]"
      )
      .pause(5000)
      // click on finish button
      .clickMobileEl("xpath",
      "//XCUIElementTypeApplication"
      + "/XCUIElementTypeWindow[1]"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther[2]"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther[2]"
      + "/XCUIElementTypeOther[2]");
  },

  "upload": function (client) {
    client
      .setMobileElValue("xpath", "//XCUIElementTypeTextField", RECORD_NAME)
      .keys(client.Keys.RETURN)
      .pause(1000)
      // click on upload button
      .clickMobileEl("xpath",
      "//XCUIElementTypeApplication"
      + "/XCUIElementTypeWindow[1]"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther[2]"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther[2]"
      + "/XCUIElementTypeOther[2]");
  },

  "check result list": function (client) {
    client
      // click on record list button
      .clickMobileEl("xpath",
      "//XCUIElementTypeApplication"
      + "/XCUIElementTypeWindow[1]"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther[2]"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther"
      + "/XCUIElementTypeOther[2]"
      + "/XCUIElementTypeOther[3]")
      .getMobileEl("xpath", `//XCUIElementTypeOther[contains(@name, "${RECORD_NAME}")]`);
  },

  "check result detail": function (client) {
    client
      .clickMobileEl("xpath", `//XCUIElementTypeOther[contains(@name, "${RECORD_NAME}")]/XCUIElementTypeOther[2]`)
      .getMobileEl("xpath", `//XCUIElementTypeOther[contains(@name, "${RECORD_NAME}")]`);
  }
});
