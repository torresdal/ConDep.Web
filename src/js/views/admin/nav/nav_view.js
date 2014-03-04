var Marionette              = require('backbone.marionette'),
    navTemplate   = require('./nav_template.hbs');

module.exports = Marionette.ItemView.extend({

    template: navTemplate

});
