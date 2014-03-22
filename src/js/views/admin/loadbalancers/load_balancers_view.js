// load_balancers_view.js

var Marionette    = require('backbone.marionette'),
    template   		= require('./load_balancers_template.hbs'),
    ListView 			= require('./list/list')
    EditView      = require('./edit/edit_view')
    LoadBalancerModel = require('./models/loadbalancer.js');

module.exports =  Marionette.Layout.extend({

  template: template,
  regions: {
  	modalRegion: "#modalRegion",
  	wizRegion: "#wizRegion",
  	listRegion: "#listRegion",
    progressRegion: "#progressRegion"
  },
  events: {
  	"click #newLoadBalancer": "newLoadBalancer"
  },

  initialize: function() {
    ConDep.core.vent.on("env:item:clicked", this.editLoadBalancer, this);

    this.scheduleCol = this.options.scheduleCol;
    this.suspendCol = this.options.suspendCol;
  },

	onRender: function(){
		var listView = new ListView({ 
      collection: this.collection,
      scheduleCol: this.scheduleCol,
      suspendCol: this.suspendCol 
    });

    this.listRegion.show(listView);

    this.delegateEvents();
	},

  editLoadBalancer: function(ev, lbModel) {
    var title = lbModel.get("name");

    var editView = new EditView({ 
      title: title,
      model: lbModel,   
      scheduleCol: this.scheduleCol,
      suspendCol: this.suspendCol
    });

    this.modalRegion.show(editView);
    this.$('#editWindow').modal();
  },

	newLoadBalancer: function() {
    var model = new LoadBalancerModel();
    this.collection.add(model);

    var editView = new EditView({ 
      title: "New Load Balancer",
      model: model,
      scheduleCol: this.scheduleCol,
      suspendCol: this.suspendCol, 
      removeModelOnCancel: true
    });
    
    this.modalRegion.show(editView);
		this.$('#editWindow').modal();
	}

});
