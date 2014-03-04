var Marionette                      = require('backbone.marionette');

module.exports = EnvironmentItemView = Marionette.ItemView.extend({
    tagName: 'tr',
    template: "#tpl_env_item",

    events: {
        'click': 'onItemClick',
        'click .admin-btn-delete': "onItemDelete"
    },

    onItemClick: function(ev) {
        ConDep.vent.trigger("env:item:clicked", ev, this.model);
    },

    onItemDelete: function(ev) {
        console.log('You asked to delete me!!!');
        ev.stopPropagation();
    }

});

