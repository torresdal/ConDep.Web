var Marionette = require('backbone.marionette'),
    EnvironmentsView        = require('./environments/main'),
    LoadBalancersView       = require('./loadbalancers/load_balancers_view'),
    AdminView               = require('./admin_view'),
    TiersView               = require('./tiers/tiers_view'),
    ModulesView             = require('./modules/modules_view'),
    PipelinesView           = require('./pipelines/pipelines_view'),
    ApplicationsView        = require('./applications/applications_view'),
    SettingsView            = require('./settings/settings_view'),
    HelpView                = require('./help/help_view'),
    NavView                 = require('./nav/nav_view'),
		$ = require('jquery');

module.exports = Marionette.Controller.extend({
  showHome: function() {
    ConDep.navigate("/admin/loadbalancers");
    this.showLoadbalancers();
  },

  showLoadbalancers: function () {
    this.showNav();
    
    this.selectMenuItem("#loadbalancers");
    var view = new LoadBalancersView();
    this.adminView.mainRegion.show(view);
  },

  showTiers: function () {
    this.showNav();
    
    this.selectMenuItem("#tiers");
    var view = new TiersView();
    this.adminView.mainRegion.show(view);
  },

  showEnvironments: function () {
    this.showNav();

    this.selectMenuItem("#environments");
    var view = new EnvironmentsView();
    this.adminView.mainRegion.show(view);
  },

  showModules: function () {
    this.showNav();

    this.selectMenuItem("#modules");
    var view = new ModulesView();
    this.adminView.mainRegion.show(view);
  },

  showPipelines: function () {
    this.showNav();

    this.selectMenuItem("#pipelines");
    var view = new PipelinesView();
    this.adminView.mainRegion.show(view);
  },

  showApplications: function () {
    this.showNav();

    this.selectMenuItem("#applications");
    var view = new ApplicationsView();
    this.adminView.mainRegion.show(view);
  },

  showSettings: function () {
    this.showNav();

    this.selectMenuItem("#settings");
    var view = new SettingsView();
    this.adminView.mainRegion.show(view);
  },

  showHelp: function () {
    this.showNav();

    this.selectMenuItem("#help");
    var view = new HelpView();
    this.adminView.mainRegion.show(view);
  },

  showNav: function() {
    this.adminView = new AdminView();
    ConDep.appLayout.mainRegion.show(this.adminView);

    var navView = new NavView();
    this.adminView.navRegion.show(navView);
  },

  selectMenuItem: function (id) {
    $('.admin-menu .nav li.active').removeClass('active');
    $(id).parent().addClass('active');
  }

});