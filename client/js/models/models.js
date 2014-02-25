ConDep.LoadBalancer = Backbone.RelationalModel.extend({

});

ConDep.Server = Backbone.RelationalModel.extend({

});

ConDep.Servers = Backbone.Collection.extend({
	model: ConDep.Server
});

ConDep.Tier = Backbone.RelationalModel.extend({
	relations: [{
		type: Backbone.HasMany,
		key: "Servers",
		relatedModel: "ConDep.Server",
		collectionType: "ConDep.Servers"
	}]
});

ConDep.Tiers = Backbone.Collection.extend({
    model: ConDep.Tier
});

ConDep.Environment = Backbone.RelationalModel.extend({
	relations: [
		{
			type: Backbone.HasMany,
			key: "Tiers",
			relatedModel: "ConDep.Tier",
			collectionType: "ConDep.Tiers"
		},
		{
			type: Backbone.HasOne,
			key: "LoadBalancer",
			relatedModel: "ConDep.LoadBalancer"
		}
	],

	defaults: {
		"Tiers": [
			{
				"Name": "_default",
				"Servers": [],
				"LoadBalancer": { }
			}
		]
	}
});

ConDep.Environments = Backbone.Collection.extend({
	model: ConDep.Environment
});

ConDep.Config = Backbone.RelationalModel.extend({
	relations: [{
		type: Backbone.HasMany,
		key: "Environments",
		relatedModel: "ConDep.Environment",
		collectionType: "ConDep.Environments"
	}]
});