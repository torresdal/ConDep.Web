var	Backbone 				= require('backbone'),
		Environment 		= require('./environment');

module.exports = Environments = Backbone.Collection.extend({
	model: Environment
});