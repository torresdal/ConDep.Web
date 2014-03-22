// modal_view.js

var Marionette    = require('backbone.marionette'),
    template   		= require('./modal_template.hbs')
    Bootstrap 		= require('bootstrap'),
    Syphone 			= require('backbone.syphone'),
    $ 						= require('jquery'),
		Validation 		= require('backbone.validation');

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
		"click .btn-default": "onCancel",
		"focusout .form-control": "onLostFocus"
	},

	initialize: function(options) {
		var options = options || {};

		this.title = options.title || "New Window";
		this.iconClass = options.icon || "fa fa-sitemap";

		Validation.bind(this, {
      valid: function (view, attr, selector) {
          var $el = view.$('[name=' + attr + ']'), 
              $group = $el.closest('.form-group');
          
          $group.removeClass('has-error');
          $group.find('.help-block.validation').html('').addClass('hidden');
      },
      invalid: function (view, attr, error, selector) {
          var $el = view.$('[name=' + attr + ']'), 
              $group = $el.closest('.form-group');
          
          $group.addClass('has-error');
          var tmp = $group.find('.help-block.validation')
          tmp.html(error).removeClass('hidden');

          console.log("Validation failed for field " + attr);
      }
    });

	},

	serializeData: function() {
		return {
			title: this.title
		}
	},

	onSubmit: function() {
		var that = this;
		var data = Syphone.serialize(this);
		this.trigger("form:submitted", this.model, data, function() {
			that.$el.modal('hide');
		});
	},

	onLostFocus: function(ev) {
		var data = Syphone.serialize(this);
		var attrib = this.$(ev.currentTarget).attr("name");

		var errorMsg = this.model.preValidate(attrib, data[attrib]);
		this.onFieldValidation(!errorMsg, attrib, errorMsg);
	},

	onFieldValidation: function(isValid, attr, errorMsg) {
		var $el = this.$('[name=' + attr + ']'), 
        $group = $el.closest('.form-group');

		if(isValid) {
	    $group.removeClass('has-error');
	    $group.find('.help-block.validation').html('').addClass('hidden');
		}
		else {
      $group.addClass('has-error');
      var tmp = $group.find('.help-block.validation')
      tmp.html(errorMsg).removeClass('hidden');
		}
	},

	triggerCancellation: function() {
		this.trigger("form:cancelled", this.model);
	},

	onCancel: function() {
		this.triggerCancellation();
		this.$el.modal('hide');
	}

});