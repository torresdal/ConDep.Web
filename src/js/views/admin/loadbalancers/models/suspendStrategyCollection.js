var SuspendStrategy = require('./suspendStrategy');

module.exports = Backbone.Collection.extend({
	url: ConDep.ApiRoot + "/admin/lookups/suspendstrategy",
	model: SuspendStrategy
});