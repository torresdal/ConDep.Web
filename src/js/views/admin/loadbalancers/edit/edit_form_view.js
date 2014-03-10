var Marionette      = require('backbone.marionette'),
    template   		= require('./edit_form_template.hbs');

module.exports = Marionette.ItemView.extend({

    template: template,
    className: "lb"

});
