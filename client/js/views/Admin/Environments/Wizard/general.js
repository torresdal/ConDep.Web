ConDep.Admin_Environments_Wizard_General = Backbone.Marionette.ItemView.extend({
    template: "#tpl_wiz_general",
    bindings: {
    	"#name": "Name",
    	"#username": {
    		"observe": "DeploymentUser",
    		"onGet": "username"
    	},
    	"#password": {
    		"observe": "DeploymentUser",
    		"onGet": "password"
    	}
    },

    onRender: function() {
    	this.stickit();
    },

    username: function(val, options) {
    	return val.Name;
    },

    password: function(val, options) {
    	return val.Password;
    }

});