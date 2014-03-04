var Marionette              = require('backbone.marionette'),
    tiersTemplate   = require('./tiers_template.hbs');

module.exports = Marionette.ItemView.extend({

    template: tiersTemplate

});
