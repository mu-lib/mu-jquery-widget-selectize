(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget-selectize/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget-selectize/widget"));
  } else {
    root["basic-example/widget"] = factory(root["mu-jquery-widget-selectize/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "on/change": function () {
      var $element = this.$element;
      console.log("changed", $element.text(), $element.val());
    },
    "on/selectize/type": function ($event, text) {
      console.log("typing", text);
    }
  });
});