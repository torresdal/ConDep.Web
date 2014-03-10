var LoadBalancer = require('./loadBalancer');

module.exports = Backbone.Collection.extend({
	url: ConDep.ApiRoot + "/admin/loadbalancer",
	model: LoadBalancer	
});