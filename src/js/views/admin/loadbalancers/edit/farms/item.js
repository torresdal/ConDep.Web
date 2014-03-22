var Marionette      = require('backbone.marionette'),
    template        = require('./item_template.hbs');

module.exports = Marionette.ItemView.extend({
    tagName: 'li',
    template: template,
    events: {
        "focusout [name='farm']": "onItemUpdate",
        "click button": "onItemDelete"
    },

    onItemDelete: function(ev) {
        ev.stopPropagation();
        this.model.destroy();
    },

    onItemUpdate: function(ev) {
        this.model.set("name", ev.currentTarget.value);
    }

});

