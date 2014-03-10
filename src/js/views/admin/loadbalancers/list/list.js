var Marionette	= require('backbone.marionette'),
		ItemView		= require('./item'),
		template 		= require('./list_template.hbs'),
		NoItemsView = require('./no_item_view');

module.exports = Marionette.CompositeView.extend({
  template: template,
	tagName: 'table',
  className: 'table table-hover table-col-btns',
  itemView: ItemView,
  emptyView: NoItemsView

});
