var Marionette              = require('backbone.marionette'),
		template 								= require('./progress_template.hbs');

module.exports = Marionette.ItemView.extend({
	template: template,
	className: "loading"
});