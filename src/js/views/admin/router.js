var		Marionette 	= require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
		"admin": 				"showHome",
        "admin/loadbalancers":  "showLoadbalancers",
        "admin/tiers":			"showTiers",
        "admin/environments": 	"showEnvironments",
        "admin/modules":		"showModules",
        "admin/pipelines":		"showPipelines",
        "admin/applications": 	"showApplications",
        "admin/settings": 		"showSettings",
        "admin/help": 			"showHelp"
    }
});