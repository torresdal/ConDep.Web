var	Backbone 				= require('backbone'),
		RelationalModel	= require('backbone-relational'),
		Farm 						= require('./farm'),
		Farms						= require('./farms'),
		List1 					= require('./schedulingAlgorithm'),
		List1Col 				= require('./schedulingAlgorithmCollection'),
		List2 					= require('./suspendStrategy'),
		List2Col 				= require('./suspendStrategyCollection');

module.exports = Backbone.RelationalModel.extend({
	validation: {
		name: {
			required: true
		},
		provider: {
			required: true
		},
		userName: {
			required: true
		},
		suspendStrategy: function(value){
			if(value < 0) {
				return "Please provide a Suspend Strategy."
			}
		},
		schedulingAlgorithm: function(value){
			if(value < 0) {
				return "Please provide a Scheduling Algorithm."
			}
		},
		_relations: function(value) {
			if(this._relations.farms.keyContents.length < 1) {
				return "You need to add farms.";
			}
		}
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: "farms",
			relatedModel: Farm,
			collectionType: Farms
		},
		{
			type: Backbone.HasMany,
			key: "list1",
			relatedModel: List1,
			collectionType: List1Col
		},
		{
			type: Backbone.HasMany,
			key: "list2",
			relatedModel: List2,
			collectionType: List2Col
		}
	],

	defaults: {
		"farms": [],
		"schedulingAlgorithms": [],
		"suspendStrategies": []
	}
});