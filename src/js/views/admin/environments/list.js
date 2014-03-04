var Marionette 						= require('backbone.marionette'),
		EnvironmentItemView		= require('./item');

module.exports = EnvironmentsListView = Marionette.CompositeView.extend({
  template: '#tpl_env_list',
	tagName: 'table',
  className: 'table table-hover table-col-btns',
  itemView: EnvironmentItemView
});
