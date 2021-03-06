(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget/widget"));
  } else {
    root["mu-jquery-widget-selectize/widget"] = factory(root["mu-jquery-widget/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "on/initialize": function () {
      var me = this;
      var $ = me.$;
      var $element = me.$element;
      var selectize = $element
        .selectize($element.data("mu-jquery-widget-selectize"))
        .data("selectize");

      ["initialize", "change", "focus", "blur", "item_add", "item_remove", "clear", "option_add", "option_remove", "option_clear", "optgroup_add", "optgroup_remove", "optgroup_clear", "dropdown_open", "dropdown_close", "type", "load", "destroy"].forEach(function (event) {
        selectize.on(event, function () {
          $element.trigger("selectize/" + event, arguments);
        });
      });

      ["addOption", "updateOption", "removeOption", "clearOptions", "getOption", "getAdjacentOption", "refreshOptions", "clear", "getItem", "addItem", "removeItem", "createItem", "refreshItems", "addOptionGroup", "removeOptionGroup", "clearOptionGroups", "on", "off", "trigger", "open", "close", "positionDropdown", "destroy", "load", "focus", "blur", "lock", "unlock", "disable", "enable", "getValue", "setValue", "setCaret", "isFull", "clearCache", "updatePlaceholder", "setTextboxValue"].forEach(function (method) {
        me[me[method] ? method + "$selectize" : method] = $.proxy(selectize[method], selectize);
      });
    }
  });
});