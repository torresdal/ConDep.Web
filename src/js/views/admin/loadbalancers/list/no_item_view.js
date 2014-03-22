var Marionette      = require('backbone.marionette'),
    template        = require('./no_item_template.hbs');

module.exports = Marionette.ItemView.extend({
  template: template,
  tagName: "tr",

  onRender: function() {
    $('#progressMessage').hide();
  }
});