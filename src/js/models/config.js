var	Backbone 				= require('backbone'),
		RelationalModel	= require('backbone-relational'),
		Environment 		= require('./environment'),
		Environments 		= require('./environments');

module.exports = Config = Backbone.RelationalModel.extend({
	relations: [{
		type: Backbone.HasMany,
		key: "Environments",
		relatedModel: Environment,
		collectionType: Environments
	}]
});