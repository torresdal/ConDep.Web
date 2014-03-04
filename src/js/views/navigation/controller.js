var Marionette 	= require('backbone.marionette'),
		NavView 		= require('./navigation_view'),
		HomeView 		= require('../home'),
		AdminView 	= require('../admin/admin_view');


module.exports = Marionette.Controller.extend({
    initialize: function() {
    	var view = new NavView();
    	ConDep.appLayout.navRegion.show(view);
    },

    showHome: function () {
        var homeView = new HomeView();
        ConDep.appLayout.mainRegion.show(homeView);

        ConDep.core.execute("set:active:nav", "home");

    },
    showAdmin: function() {
        var adminView = new AdminView();
        ConDep.appLayout.mainRegion.show(adminView);
    }
});