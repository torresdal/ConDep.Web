ConDep.NavigationView = Backbone.Marionette.ItemView.extend({

    events:{
        "click .main-nav li":"selectMenuItem",
        "click .navbar-header a":"deSelectMenu"
    },

    template: "#tpl_nav",

    selectMenuItem: function(menuItem) {
        this.$('.main-nav .nav li.active').removeClass('active');
        $(menuItem.currentTarget).addClass('active');
    },

    deSelectMenu: function() {
        this.$('.main-nav .nav li.active').removeClass('active');
    }
});