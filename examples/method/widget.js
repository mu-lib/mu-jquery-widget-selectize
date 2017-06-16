(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget-selectize/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget-selectize/widget"));
  } else {
    root["method-example/widget"] = factory(root["mu-jquery-widget-selectize/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "on/initialize": function () {
      this.addOption({
        "text": "John Doe",
        "value": "6"
      });
      this.on$selectize("change", console.log.bind(console));
    }
  });
});