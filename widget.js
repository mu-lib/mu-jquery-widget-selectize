(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget-selectize/widget"] = factory.apply(root, modules.map(function (m) {
      return root[m];
    }));
  }
})(["mu-jquery-widget/widget"], function (widget) {
  return widget.extend({
    "on/initialize": function () {
      var me = this;
      var $ = me.$;
      var $element = me.$element;
      var selectize = $element
        .selectize($element.data("muJqueryWidgetSelectize"))
        .data("selectize");

      ["initialize", "change", "focus", "blur", "item_add", "item_remove", "clear", "option_add", "option_remove", "option_clear", "optgroup_add", "optgroup_remove", "optgroup_clear", "dropdown_open", "dropdown_close", "type", "load", "destroy"].forEach(function (event) {
        selectize.on(event, function () {
          $element.trigger("selectize/" + event, arguments);
        });
      });

      ["addOption", "updateOption", "removeOption", "clearOptions", "getOption", "getAdjacentOption", "refreshOptions", "clear", "getItem", "addItem", "removeItem", "createItem", "refreshItems", "addOptionGroup", "removeOptionGroup", "clearOptionGroups", "open", "close", "positionDropdown", "destroy", "load", "focus", "blur", "lock", "unlock", "disable", "enable", "getVallue", "setValue", "setCaret", "isFull", "clearCache", "updatePlaceholder", "setTextboxValue"].forEach(function (method) {
        me[method] = $.proxy(selectize[method], selectize);
      });
    }
  });
});