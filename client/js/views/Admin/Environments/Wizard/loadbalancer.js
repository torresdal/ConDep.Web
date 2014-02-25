ConDep.Admin_Environments_Wizard_LoadBalancer = Backbone.Marionette.ItemView.extend({
    template: "#tpl_wiz_lb",
    bindings: {
    	"#name": "Name",
    	"#provider": "Provider",
    	"#username": "UserName",
    	"#password": "Password",
    	"#suspendMode": "SuspendMode",
    	"#mode": "Mode"
    },

    onRender: function() {
    	this.stickit();
    }

});