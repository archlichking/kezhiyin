const util = require("util");
const BaseCommand = require("testarmada-nightwatch-extra/lib/base-mobile-command");
const settings = require("testarmada-nightwatch-extra/lib/settings");

const MAX_TIMEOUT = settings.COMMAND_MAX_TIMEOUT;
const WAIT_INTERVAL = settings.WAIT_INTERVAL;

const TouchDown = function (nightwatch) {
  BaseCommand.call(this, nightwatch);
  this.cmd = "touchdown";
};

util.inherits(TouchDown, BaseCommand);

TouchDown.prototype.do = function (value) {
  this.pass(value);
};

TouchDown.prototype.checkConditions = function () {
  const self = this;

  const options = {
    path: `/session/${this.client.sessionId}/touch/perform`,
    method: "POST",
    data: {
      "actions": [
        { "action": "press", "options": { "x": this.x, "y": this.y } },
        { "action": "release", "options": {} }]
    }
  }

  self.protocol(options, (result) => {
    if (result.status === 0) {
      // sucessful
      self.seenCount += 1;
    }

    const elapsed = (new Date()).getTime() - self.startTime;
    if (self.seenCount >= 1 || elapsed > MAX_TIMEOUT) {
      if (self.seenCount >= 1) {
        const elapse = (new Date()).getTime();
        self.time.executeAsyncTime = elapse - self.startTime;
        self.time.seleniumCallTime = 0;
        self.do(result.value);
      } else {
        self.fail();
      }
    } else {
      setTimeout(self.checkConditions, WAIT_INTERVAL);
    }
  });
};

/*eslint max-params:["error", 5] */
TouchDown.prototype.command = function (x, y, cb) {
  this.cb = cb;
  this.x = x;
  this.y = y;

  this.successMessage = `Point {x:${x}, y:${y}} was pressed after %d milliseconds.`;
  this.failureMessage = `Point {x:${x}, y:${y}} wasn't pressed after %d milliseconds.`;

  this.startTime = (new Date()).getTime();

  // Track how many times selector is successfully checked by /element protocol
  this.seenCount = 0;
  this.checkConditions();

  return this;
};

module.exports = TouchDown;