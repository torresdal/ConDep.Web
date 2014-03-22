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
    LoadBalancers           = require('./loadbalancers/models/loadBalancerCollection'),
    SchedulingAlgorithms    = require('./loadbalancers/models/schedulingAlgorithmCollection'),
    SuspendStrategies       = require('./loadbalancers/models/suspendStrategyCollection'),
    ProgressView            = require('./common/progress/progress_view');

module.exports = Marionette.Controller.extend({
  showHome: function() {
    ConDep.navigate("/admin/loadbalancers");
    this.showLoadbalancers();
  },

  showLoadbalancers: function () {
    var that = this;

    var collection = new LoadBalancers();
    var scheduleCol = new SchedulingAlgorithms();
    var suspendCol = new SuspendStrategies();

    this.showNav();
    this.selectMenuItem("#loadbalancers");

    this.adminView.mainRegion.show(new ProgressView());

    collection.fetch({
      success: function(collection, response, options) {
        that.loadBalancerView = that.loadBalancerView || new LoadBalancersView({
          collection: collection,
          scheduleCol: scheduleCol,
          suspendCol: suspendCol
        });

        that.adminView.mainRegion.show(that.loadBalancerView);
        that.hideProgress();
      },
      error: function(collection, response, options) {
        console.log("Failed to load load balancers.");
        that.hideProgress();
      }
    });

    suspendCol.fetch({
        error: function(collection, response, options) {
            console.log("Failed to load schedulingAlgorithms.");
            console.log(response);
        }
    });

    scheduleCol.fetch({
        error: function(collection, response, options) {
            console.log("Failed to load schedulingAlgorithms.");
            console.log(response);
        }
    });

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

  showProgress: function() {
    $('#noItemsMessage').hide();
    $('#progressMessage').show();
  },

  hideProgress: function() {
    $('#noItemsMessage').show();
    $('#progressMessage').hide();
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