(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget-selectize/widget"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\./, "mu-jquery-widget-selectize")];
    }, {
        "selectize": root.Selectize
      }));
  }
})(["mu-jquery-widget/widget", "selectize"], function (widget) {
  return widget.extend({
    "on/initialize": function () {
      var $element = this.$element;
      var selectize = $element.selectize().data("selectize");

      ["initialize", "change", "focus", "blur", "item_add", "item_remove", "clear", "option_add", "option_remove", "option_clear", "optgroup_add", "optgroup_remove", "optgroup_clear", "dropdown_open", "dropdown_close", "type", "load", "destroy"].forEach(function (event) {
        selectize.on(event, function () {
          $element.trigger("selectize/" + event, arguments);
        })
      });
    }
  });
});