var Marionette              = require('backbone.marionette'),
    adminTemplate           = require('./admin_template.hbs');

module.exports = Marionette.Layout.extend({

    regions: {
        navRegion: "#admin-nav",
        mainRegion: "#admin-main"
    },

    template: adminTemplate,

    onRender: function(){
        ConDep.core.execute("set:active:nav", "admin");
    }
    
});
