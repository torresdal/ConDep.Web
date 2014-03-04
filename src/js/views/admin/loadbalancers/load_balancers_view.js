var Marionette    = require('backbone.marionette'),
    template   		= require('./load_balancers_template.hbs');

module.exports =  Marionette.ItemView.extend({

    template: template

});
