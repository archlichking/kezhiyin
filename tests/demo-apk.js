const Test = require("../lib/example-base-test-class");
const dpro = require("dpro");

const RECORD_NAME = `magellan test - ${dpro.customerName}`;

module.exports = new Test({
  tags: ["app", "android"],

  "login": function (client) {
    client
      .setMobileElValue("accessibility id", "Input email", dpro.username)
      .setMobileElValue("accessibility id", "Input password", dpro.password)
      .hideKeyboard()
      .clickMobileEl("accessibility id", "login");
  },

  "record": function (client) {
    client
      .clickMobileEl("xpath",
      "//android.widget.FrameLayout"
      + "/android.widget.LinearLayout"
      + "/android.widget.FrameLayout"
      + "/android.widget.FrameLayout"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup[1]"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup[2]"
      + "/android.widget.ImageView")
      .pause(5000)
      .clickMobileEl("xpath",
      "//android.widget.FrameLayout"
      + "/android.widget.LinearLayout"
      + "/android.widget.FrameLayout"
      + "/android.widget.FrameLayout"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup[1]"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup[2]"
      + "/android.widget.ImageView")
  },

  "upload": function (client) {
    client
      .setMobileElValue("xpath", "//android.widget.EditText", RECORD_NAME)
      .hideKeyboard()
      .clickMobileEl("xpath",
      "//android.widget.FrameLayout"
      + "/android.widget.LinearLayout"
      + "/android.widget.FrameLayout"
      + "/android.widget.FrameLayout"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup[1]"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup[2]")
      .pause(5000);
  },
  "check result list": function (client) {
    client
      .clickMobileEl("xpath",
      "//android.widget.FrameLayout"
      + "/android.widget.LinearLayout"
      + "/android.widget.FrameLayout"
      + "/android.widget.FrameLayout"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup[1]"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup"
      + "/android.view.ViewGroup[3]"
      + "/android.widget.ImageView")
      .getMobileEl("xpath", `//android.widget.TextView[contains(@text, "${RECORD_NAME}")]`);
  }
});