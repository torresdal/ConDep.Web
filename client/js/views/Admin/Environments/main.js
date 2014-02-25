
var config = new ConDep.Config({
	Environments: [
		{
			id: 1, 
			Name: "Dev",
			DeploymentUser: {
				Name: "z63\\__104171dep",
				Password: "secret"
			},
			Tiers: [
				{
					Name: "Web",
					Servers: [
						{
							Name: "z63os2swb001.z63.no.tconet.net",
							LoadBalancerFarm: "WebFarm_Prod",
							DeploymentUser: {
								Name: "z63\\__104171dep",
								Password: "Secret"
							}
						},
						{
							Name: "z63os2swb002.z63.no.tconet.net",
							LoadBalancerFarm: "WebFarm_Prod",
							DeploymentUser: {
								Name: "z63\\__104171dep",
								Password: "Secret"
							}
						}
					]
				},
				{
					Name: "App",
					Servers: [
						{
							Name: "z63os2sas001.z63.no.tconet.net"
						}
					]
				}
			],
			LoadBalancer: {
				Name: "My Load Balancer",
				Provider: "ConDep.Dsl.LoadBalancer.Ace.dll",
				UserName: "z63\\__104171lb",
				Password: "VerySecret",
				Mode: "RoundRobin",
				SuspendMode: "Graceful"
			}
		},
		{
			id: 2, 
			Name: "Test",
			DeploymentUser: {
				Name: "z63\\__104171dep",
				Password: "secret"
			},
			Tiers: [
				{
					Name: "Web",
					Servers: [
						{
							Name: "z63os2swb001.z63.no.tconet.net",
							LoadBalancerFarm: "WebFarm_Prod",
							DeploymentUser: {
								Name: "z63\\__104171dep",
								Password: "Secret"
							}
						},
						{
							Name: "z63os2swb002.z63.no.tconet.net",
							LoadBalancerFarm: "WebFarm_Prod",
							DeploymentUser: {
								Name: "z63\\__104171dep",
								Password: "Secret"
							}
						}
					]
				},
				{
					Name: "App",
					Servers: [
						{
							Name: "z63os2sas001.z63.no.tconet.net"
						}
					]
				}
			]
		}
	]
});

ConDep.Admin_Environments_MainView = Backbone.Marionette.Layout.extend({

    template: "#tpl_env_main",
    events: {
    	"click #newEnv": "onNewEnvironment"
    },
    regions: {
        mainRegion: "#envList",
        wizRegion: "#wizRegion"
    },

    initialize: function() {
    	this.listView = new ConDep.Admin_Environments_ListView({collection: config.get("Environments")});
    },

	onRender: function(){
	    this.mainRegion.show(this.listView);
	    ConDep.vent.on("env:item:clicked", this.onItemClick, this);
	    this.delegateEvents();
  	},

  	onItemClick: function(event, envModel) {
    	var wizardView = new ConDep.Admin_Environments_Wizard_Main( { model: envModel });
  		this.wizRegion.show(wizardView);
  	},

  	onNewEnvironment: function(event) {
  		this.wizRegion.show(this.wizardView);
  	}
});