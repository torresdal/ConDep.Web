ConDep.Admin_Environments_Wizard_Tier_Server = Backbone.Marionette.ItemView.extend({
	template: "#tpl_wiz_tier_server",
    className: "panel panel-default",
    bindings: {
        "#server_name": "Name",
        "#server_username": {
            "observe": "DeploymentUser",
            "onGet": "username"
        },
        "#server_password": {
            "observe": "DeploymentUser",
            "onGet": "password"
        },
        "#server_lb_farm": "LoadBalancerFarm",
    },
    
    initialize: function(options) {
        this.model.set("index", options.itemIndex);
    },

    onRender: function() {
        this.stickit();
    },

    username: function(val, options) {
        if(!val)
            return undefined;

        return val.Name;
    },

    password: function(val, options) {
        if(!val)
            return undefined;
        return val.Password;
    }

});

ConDep.Admin_Environments_Wizard_Tier_ServerList = Backbone.Marionette.CollectionView.extend({
	//template: "#tpl_wiz_tier_server_list",
	itemView: ConDep.Admin_Environments_Wizard_Tier_Server,
	//tagName: 'table',
    className: 'panel-group',

    initialize: function() {
        this.$el.prop("id", "accordion");
    },

    itemViewOptions: function(model, index) {
        return {
          itemIndex: index
        }
    }
});

ConDep.Admin_Environments_Wizard_Tier = Backbone.Marionette.ItemView.extend({
    template: "#tpl_wiz_tier",
    tagName: "tr",
    events: {
        "click": "onClick"
    },

    onClick: function(ev) {
        ConDep.vent.trigger("tier:item:clicked", ev, this.model);
    }
});

ConDep.Admin_Environments_Wizard_TierEdit = Backbone.Marionette.Layout.extend({
    template: "#tpl_wiz_tier_edit",
    bindings: {
        "#name": "Name"
    },
    regions: {
        serverListRegion: "#serverList"
    },

    initialize: function() {
        var servers = this.model.get("Servers");
        this.serverListView = new ConDep.Admin_Environments_Wizard_Tier_ServerList({ collection: this.model.get("Servers") })
    },

    onRender: function() {
        this.serverListRegion.show(this.serverListView);
        this.stickit();
    }
});

ConDep.Admin_Environments_Wizard_TierList = Backbone.Marionette.CompositeView.extend({
	template: "#tpl_wiz_tier_list",
    tagName: 'table',
    className: 'table table-hover table-col-btns wrap-table',
    itemView: ConDep.Admin_Environments_Wizard_Tier,
    events: {
    	"click #newTier": "onNewTier"
    },

    onNewTier: function() {
    	this.collection.create({
    		Name: "New Tier",
    		Servers: []
    	});
    }
});
