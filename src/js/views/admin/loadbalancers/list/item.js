var Marionette      = require('backbone.marionette'),
    template        = require('./item_template.hbs');

module.exports = Marionette.ItemView.extend({
    tagName: 'tr',
    template: template,
    modelEvents: {
        "change": "render"
    },

    events: {
        'click button': "onItemDelete",
        'click': 'onItemClick'
    },

    initialize: function() {
        this.delegateEvents();
    },

    onItemClick: function(ev) {
        console.log("lb row clicked...");
        ConDep.core.vent.trigger("env:item:clicked", ev, this.model);
    },

    onItemDelete: function(ev) {
        ev.stopPropagation();
        console.log('You asked to delete me!!!');
        this.model.destroy();
    }

});

