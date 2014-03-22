var Marionette              = require('backbone.marionette'),
    emptyListTemplate       = require('./drop_down_box_template.hbs');

var itemView = Marionette.ItemView.extend({
  tagName: "option",
  modelEvents: {
      "change": "checkForSelected"
  },

  render: function() {
    this.$el.attr("value", this.model.id);
    this.$el.html(this.model.get("name"));

    var selected = this.model.get("selected");
    if(selected) {
      this.$el.attr("selected", "selected");
    }
  },

  checkForSelected: function() {
    var selected = this.model.get("selected");
    if(selected) {
      this.$el.attr("selected", "selected");
    }
  }
});

module.exports = Marionette.CompositeView.extend({
  template: emptyListTemplate,
  className: "form-control",
  tagName: "select",
  itemView: itemView,

  initialize: function() {
    this.name = this.options.name;
  },

  onRender: function() {
    this.$el.attr("name", this.name);
  }

});
