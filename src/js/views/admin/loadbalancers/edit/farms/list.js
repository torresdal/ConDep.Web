var Marionette	= require('backbone.marionette'),
		ItemView		= require('./item'),
		template 		= require('./list_template.hbs');

module.exports = Marionette.CollectionView.extend({
  // template: template,
	tagName: 'ul',
	// className: 'form-inline',
  // className: 'table table-hover table-col-btns',
  itemView: ItemView,
  collectionEvents: {
  	"change": "render"
  }
});
