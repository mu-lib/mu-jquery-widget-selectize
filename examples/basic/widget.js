(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["basic-example/widget"] = factory.apply(root, modules.map(function (m) {
      return root[m];
    }));
  }
})(["mu-jquery-widget-selectize/widget"], function (widget) {
  return widget.extend({
    "on/change": function() {
      var $element = this.$element;
      console.log("changed", $element.text(), $element.val());
    },
    "on/selectize/type": function ($event, text) {
      console.log("typing", text);
    }
  });
});