var Backbone 				= require('backbone'),
		Server 					= require('./server');

module.exports = Servers = Backbone.Collection.extend({
	model: Server
});



