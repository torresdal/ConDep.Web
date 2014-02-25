ConDep.Admin_MainView = Backbone.Marionette.Layout.extend({

    regions: {
        mainRegion: "#admin-main"
    },

    template: "#tpl_admin_main",

    events:{
        'click a[href=#env]': function (e) {
            e.preventDefault();
            this.showEnvironments(e);
        },
        'click a[href=#pipelines]': function (e) {
            e.preventDefault();
            this.showPipelines(e);
        },
        'click a[href=#apps]': function (e) {
            e.preventDefault();
            this.showApplications(e);
        },
        'click a[href=#modules]': function (e) {
            e.preventDefault();
            this.showModules(e);
        },
        'click a[href=#settings]': function (e) {
            e.preventDefault();
            this.showSettings(e);
        },
        'click a[href=#help]': function (e) {
            e.preventDefault();
            this.showHelp(e);
        }
        //"click .button":"onButtonClick"
    },

    initialize: function() {
        this.envView = new ConDep.Admin_Environments_MainView();
        this.appView = new ConDep.Admin_ApplicationsView();
        this.pipelinesView = new ConDep.Admin_PipelinesView();
        this.modulesView = new ConDep.Admin_ModulesView();

    },

    onRender: function(){
        this.mainRegion.show(this.envView);
        this.delegateEvents();
    },
    
    showEnvironments: function(e) {
        this.selectMenuItem(e);
        this.mainRegion.show(this.envView);
    },

    showApplications: function(e) {
        this.selectMenuItem(e);
        this.mainRegion.show(this.appView);
    },

    showPipelines: function(e) {
        this.selectMenuItem(e);
        this.mainRegion.show(this.pipelinesView);
    },

    showModules: function(e) {
        this.selectMenuItem(e);
        this.mainRegion.show(this.modulesView);
    },

    showSettings: function(e) {
        this.selectMenuItem(e);
    },

    showHelp: function(e) {
        this.selectMenuItem(e);
    },

    selectMenuItem: function (caller) {
        this.$('.admin-menu .nav li.active').removeClass('active');
        $(caller.target.parentElement).addClass('active');
    }
});