var Backbone 	= require('backbone'),
		Tier 			= require('./tier');
								
module.exports = Tiers = Backbone.Collection.extend({
    model: Tier
});
