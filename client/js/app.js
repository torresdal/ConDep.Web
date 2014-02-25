ConDep = new Marionette.Application({
 
    views: {},

    models: {},

});

Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate){
    return Handlebars.compile(rawTemplate);
};

ConDep.addInitializer(function() {
    ConDep.router = new ConDep.Router({controller : new ConDep.Controller()});

    ConDep.homeView = new ConDep.HomeView();
    ConDep.adminView = new ConDep.Admin_MainView();

    ConDep.AppLayout = Marionette.Layout.extend({
        regions: {
            navigationRegion: "#nav",
            mainRegion: "#main"
        }
    });

    ConDep.appLayout = new ConDep.AppLayout({el: "#content"})

    ConDep.appLayout.navigationRegion.show(new ConDep.NavigationView());
});

ConDep.on("initialize:after", function () {
  Backbone.history.start();
});


ConDep.Controller = Marionette.Controller.extend({
    home: function () {
        ConDep.appLayout.mainRegion.show(ConDep.homeView);
    },

    admin: function () {
        ConDep.appLayout.mainRegion.show(ConDep.adminView);
    }
});


ConDep.Router = Marionette.AppRouter.extend({
    appRoutes: {
        "":        "home",
        "admin":   "admin"
    }
});

$(document).on("ready", function () {
    ConDep.start();
});