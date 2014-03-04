var Marionette = require('backbone.marionette');
var homeTemplate = require('./home.hbs');

module.exports = Marionette.ItemView.extend({
	template: homeTemplate
});


