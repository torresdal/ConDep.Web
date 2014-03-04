var	Backbone 				= require('backbone'),
		RelationalModel	= require('backbone-relational'),
		Tier 						= require('./tier'),
		Tiers						= require('./tiers'),
		LoadBalancer		= require('./load_balancer');


module.exports = Environment = Backbone.RelationalModel.extend({
	relations: [
		{
			type: Backbone.HasMany,
			key: "Tiers",
			relatedModel: Tier,
			collectionType: Tiers
		},
		{
			type: Backbone.HasOne,
			key: "LoadBalancer",
			relatedModel: LoadBalancer
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