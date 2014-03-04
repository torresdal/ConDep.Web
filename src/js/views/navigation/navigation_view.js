var Marionette = require('backbone.marionette');
var navTemplate = require('./navigation_template.hbs');
var AdminView = require('./../admin/main');
var _ = require('underscore');

module.exports = Marionette.ItemView.extend({

    // events:{
    //     "click .main-nav li":"selectMenuItem",
    //     "click .navbar-header a":"deSelectMenu"
    // },

    template: navTemplate,

    initialize: function() {
        ConDep.core.commands.setHandler("set:active:nav", _.bind(this.setActiveNav, this))
    },

    setActiveNav: function(name) {
        this.deSelectMenu();
        this.selectMenuItem(name)
    },

    selectMenuItem: function(name) {
        if(name === "home") {
            this.deSelectMenu();
            return;
        }

        this.$('.main-nav .nav li.active').removeClass('active');
        this.$('.main-nav .nav a[href$=\"' + name + '\"]').parent().addClass('active');
    },

    deSelectMenu: function() {
        this.$('.main-nav .nav li.active').removeClass('active');
    }
});