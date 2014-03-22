// edit_view.js

var ModalView			= require('modal'),
		EditFormView 	= require('./edit_form_view'),
		Validation 		= require('backbone.validation');

module.exports = ModalView.extend({

	initialize: function(options) {
		ModalView.prototype.initialize.call(this, options);

		this.removeModelOnCancel = options.removeModelOnCancel || false;
    this.scheduleCol = this.options.scheduleCol;
    this.suspendCol = this.options.suspendCol;

		this.editForm = new EditFormView({ 
			model: this.model, 
      scheduleCol: this.scheduleCol,
      suspendCol: this.suspendCol, 
		});

		// Validation.bind(this);

		this.on('form:submitted', function(model, data, hideForm){
			this.storeModel(model, data, hideForm);
		}, this);

		this.on('form:cancelled', function(model){
			this.cancelModel(model);
		}, this);
	},

	storeModel: function(model, data, hideForm) {
    model.set(data);
    if(this.model.isValid(true)){
	    model.save();
	    hideForm();
    }
	},

	cancelModel: function(model) {
		if(this.removeModelOnCancel) {
			model.destroy();
		}
	},

	onRender: function() {
		this.mainRegion.show(this.editForm);
		this.$("#modalTitleIcon").addClass("fa fa-tasks");

	}

});