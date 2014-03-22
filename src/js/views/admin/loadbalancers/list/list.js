var Marionette	= require('backbone.marionette'),
		ItemView		= require('./item'),
		template 		= require('./list_template.hbs'),
		NoItemsView = require('./no_item_view');

module.exports = Marionette.CompositeView.extend({
  template: template,
	tagName: 'table',
  className: 'table table-hover table-col-btns',
  itemView: ItemView,
  emptyView: NoItemsView,

  initialize: function() {
    this.scheduleCol = this.options.scheduleCol;
    this.suspendCol = this.options.suspendCol;
  },

  itemViewOptions: function(model, index) {
    return {
      scheduleCol: this.scheduleCol,
      suspendCol: this.suspendCol
    }
  }

});
