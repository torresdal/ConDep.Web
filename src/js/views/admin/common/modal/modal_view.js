// modal_view.js

var Marionette    = require('backbone.marionette'),
    template   		= require('./modal_template.hbs')
    Bootstrap 		= require('bootstrap'),
    Syphone 			= require('backbone.syphone');

module.exports = Marionette.Layout.extend({
	template: template,
	tagName: "form",
	className: "modal fade",
	regions: {
		mainRegion: "#mainPage"
	},
	id: "editWindow",
	events: {
		"click .btn-primary": "onSubmit",
		"click .btn-default": "onCancel"
	},

	initialize: function(options) {
		var options = options || {};

		this.title = options.title || "New Window";
	},

	serializeData: function() {
		return {
			title: this.title
		}
	},

	onRender: function() {
		this.$el.attr('id', this.id);
	},

	onSubmit: function() {
		var data = Syphone.serialize(this);
		this.trigger("form:submitted", this.model, data);
		this.$el.modal('hide');
	},

	onCancel: function() {
		this.trigger("form:cancelled", this.model);
		this.$el.modal('hide');
	}

});