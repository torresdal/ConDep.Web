var Backbone      	= require('backbone'),
		RelationalModel	= require('backbone-relational'),
		Server 					= require('./server'),
		Servers 				= require('./servers');


module.exports = Tier = Backbone.RelationalModel.extend({
	relations: [{
		type: Backbone.HasMany,
		key: "Servers",
		relatedModel: Server,
		collectionType: Servers
	}]
});
