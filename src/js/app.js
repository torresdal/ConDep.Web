var Backbone        = require('backbone'),
    Marionette      = require('backbone.marionette'),
    Validation      = require('backbone.validation'),
    Handlebars      = require('handlebars'),
    HomeView        = require('./views/home'),
    _               = require('underscore');
    // rivets          = require('rivets');

module.exports = ConDep = function ConDep() {};

Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate){
    return Handlebars.compile(rawTemplate);
};


ConDep.prototype.start = function(){
    ConDep.core = new Marionette.Application();

    ConDep.views = {};
    ConDep.models = {};
    // ConDep.ApiRoot = "http://10.208.8.101/condepserver/api";
    // ConDep.ApiRoot = "http://10.70.148.110/condepserver/api";
    ConDep.ApiRoot = "http://10.0.1.110/condepserver/api";

    ConDep.navigate = function(route,  options){
      options || (options = {});
      Backbone.history.navigate(route, options);
    };

    ConDep.getCurrentRoute = function(){
      return Backbone.history.fragment
    };

    ConDep.core.addInitializer(function() {
        // ConDep.router = new Router({controller : new Controller()});

        // ConDep.homeView = new HomeView();
        // ConDep.adminView = new AdminView();

        ConDep.core.AppLayout = Marionette.Layout.extend({
            regions: {
                navRegion: "#nav",
                mainRegion: "#main"
            }
        });

        var nav = require('./views/navigation/main');
        ConDep.core.addInitializer(nav);
        
        ConDep.appLayout = new ConDep.core.AppLayout({el: "#content"})
    });

    ConDep.core.on("initialize:after", function () {
        if(Backbone.history) {
            Backbone.history.start();

            if(ConDep.getCurrentRoute() === ""){
                var homeView = new HomeView();
                ConDep.appLayout.mainRegion.show(homeView);
            }            
        }
    });

    ConDep.core.start();
}

$(document).on("ready", function () {
    var conDep = new ConDep();
    conDep.start();
});