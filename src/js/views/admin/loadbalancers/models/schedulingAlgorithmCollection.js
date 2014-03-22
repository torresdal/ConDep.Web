var SchedulingAlgorithm = require('./schedulingAlgorithm');

module.exports = Backbone.Collection.extend({
	url: ConDep.ApiRoot + "/admin/lookups/schedulingalgorithms",
	model: SchedulingAlgorithm
});