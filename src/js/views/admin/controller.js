var Marionette              = require('backbone.marionette'),
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
		$                       = require('jquery'),
    LoadBalancers           = require('./loadbalancers/models/loadBalancerCollection');

module.exports = Marionette.Controller.extend({
  showHome: function() {
    ConDep.navigate("/admin/loadbalancers");
    this.showLoadbalancers();
  },

  showLoadbalancers: function () {
    var collection = new LoadBalancers();
    collection.fetch();

    this.showNav();
    this.selectMenuItem("#loadbalancers");

    this.loadBalancerView = this.loadBalancerView || new LoadBalancersView({collection: collection});
    this.adminView.mainRegion.show(this.loadBalancerView);
  },

  showTiers: function () {
    this.showNav();
    
    this.selectMenuItem("#tiers");
    this.tiersView = this.tiersView || new TiersView();
    this.adminView.mainRegion.show(this.tiersView);
  },

  showEnvironments: function () {
    this.showNav();

    this.selectMenuItem("#environments");
    this.environmentsView = this.environmentsView || new EnvironmentsView();
    this.adminView.mainRegion.show(this.environmentsView);
  },

  showModules: function () {
    this.showNav();

    this.selectMenuItem("#modules");
    this.modulesView = this.modulesView || new ModulesView();
    this.adminView.mainRegion.show(this.modulesView);
  },

  showPipelines: function () {
    this.showNav();

    this.selectMenuItem("#pipelines");
    this.pipelinesView = this.pipelinesView || new PipelinesView();
    this.adminView.mainRegion.show(this.pipelinesView);
  },

  showApplications: function () {
    this.showNav();

    this.selectMenuItem("#applications");
    this.applicationsView = this.applicationsView || new ApplicationsView();
    this.adminView.mainRegion.show(this.applicationsView);
  },

  showSettings: function () {
    this.showNav();

    this.selectMenuItem("#settings");
    this.settingsView = this.settingsView || new SettingsView();
    this.adminView.mainRegion.show(this.settingsView);
  },

  showHelp: function () {
    this.showNav();

    this.selectMenuItem("#help");
    this.helpView = this.helpView || new HelpView();
    this.adminView.mainRegion.show(this.helpView);
  },

  showNav: function() {
    this.adminView = this.adminView || new AdminView();
    ConDep.appLayout.mainRegion.show(this.adminView);

    this.navView = this.navView || new NavView();
    this.adminView.navRegion.show(this.navView);
  },

  selectMenuItem: function (id) {
    $('.admin-menu .nav li.active').removeClass('active');
    $(id).parent().addClass('active');
  }

});