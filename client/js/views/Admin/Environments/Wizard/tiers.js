ConDep.Admin_Environments_Wizard_Tier_Server = Backbone.Marionette.ItemView.extend({
	template: "#tpl_wiz_tier_server",
    tagName: 'tr'
});

ConDep.Admin_Environments_Wizard_Tier_ServerList = Backbone.Marionette.CompositeView.extend({
	template: "#tpl_wiz_tier_server_list",
	itemView: ConDep.Admin_Environments_Wizard_Tier_Server,
	tagName: 'table',
    className: 'table table-hover table-col-btns wrap-table',
});

ConDep.Admin_Environments_Wizard_Tier = Backbone.Marionette.Layout.extend({
    template: "#tpl_wiz_tier",
    className: "panel panel-default",
    regions: {
    	serverRegion: "#serverList"
    },
    bindings: {
    	"#tier_name": "Name",
    	"#tier_header_name": "Name"
    },

    initialize: function(options) {
    	this.model.set("index", options.itemIndex);
    },

    onRender: function() {
    	var serverList = new ConDep.Admin_Environments_Wizard_Tier_ServerList({ collection: this.model.get("Servers") });
    	this.serverRegion.show(serverList);
    	this.stickit();
    }
});

ConDep.Admin_Environments_Wizard_TierList = Backbone.Marionette.CompositeView.extend({
	template: "#tpl_wiz_tier_list",
    itemView: ConDep.Admin_Environments_Wizard_Tier,
    className: "panel-group",
    events: {
    	"click #newTier": "onNewTier"
    },

	initialize: function() {
		this.$el.prop("id", "accordion");
	},

    itemViewOptions: function(model, index) {
	    return {
	      itemIndex: index
	    }
	},

    onNewTier: function() {
    	this.collection.create({
    		Name: "New Tier",
    		Servers: []
    	});
    }
});
