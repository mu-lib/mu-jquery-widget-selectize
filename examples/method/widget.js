(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["method-example/widget"] = factory.apply(root, modules.map(function (m) {
      return root[m];
    }));
  }
})(["mu-jquery-widget-selectize/widget"], function (widget) {
  return widget.extend({
    "on/initialize": function() {
      this.addOption({
        "text": "John Doe",
        "value": "6"
      });
    }
  });
});