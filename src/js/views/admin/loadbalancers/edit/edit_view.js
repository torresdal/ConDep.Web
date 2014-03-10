// edit_view.js

var ModalView			= require('modal'),
		EditFormView 	= require('./edit_form_view');

module.exports = ModalView.extend({

	initialize: function(options) {
		ModalView.prototype.initialize.call(this, options);

		this.removeModelOnCancel = options.removeModelOnCancel || false;

		this.editForm = new EditFormView({ model: this.model });

		this.on('form:submitted', function(model, data){
			this.storeModel(model, data);
		}, this);

		this.on('form:cancelled', function(model){
			this.cancelModel(model);
		}, this);
	},

	storeModel: function(model, data) {
    model.set(data);
    model.save();
	},

	cancelModel: function(model) {
		if(this.removeModelOnCancel) {
			model.destroy();
		}
	},

	onRender: function() {
		this.mainRegion.show(this.editForm);
	}

});