var Marionette    = require('backbone.marionette'),
    template   		= require('./pipelines_template.hbs');

module.exports = Marionette.ItemView.extend({

    template: template

});
