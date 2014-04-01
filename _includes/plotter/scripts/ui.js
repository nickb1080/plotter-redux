// Generated by CoffeeScript 1.7.1
(function() {
  (function() {
    var togglers;
    $(".input-group").data("plotter-open", true);
    togglers = $(".input-group__toggle");
    return togglers.click(function() {
      var content, inputGroup;
      inputGroup = $(this).parent(".input-group");
      content = inputGroup.find(".input-group__content");
      if (inputGroup.data("plotter-open")) {
        content.slideUp();
        return inputGroup.addClass("input-group--collapsed").data("plotter-open", false);
      } else {
        content.slideDown();
        return inputGroup.removeClass("input-group--collapsed").data("plotter-open", true);
      }
    });
  })();

  (function() {
    var navbar, toggler;
    navbar = $(".navbar");
    toggler = $(".menu-toggle");
    toggler.data("plotter-menu-state");
    return toggler.click(function() {
      return $(this).toggleClass("menu-toggle--x");
    });
  })();

  (function() {
    var playerSelect;
    playerSelect = $(".input-select--players");
    return $.sub("dataset:complete", function(event, fullSet) {
      var arg, args, htmlStr, name, names, _i, _j, _len, _len1;
      args = Array.prototype.slice.call(arguments);
      for (_i = 0, _len = args.length; _i < _len; _i++) {
        arg = args[_i];
        console.log(arg);
      }
      names = _.unique(fullSet.pluck("name").sort());
      htmlStr = "<option></option>";
      for (_j = 0, _len1 = names.length; _j < _len1; _j++) {
        name = names[_j];
        htmlStr += "<option>";
        htmlStr += name;
        htmlStr += "</option>";
      }
      return playerSelect.html(htmlStr).chosen({
        width: "100%"
      });
    });
  })();

}).call(this);
