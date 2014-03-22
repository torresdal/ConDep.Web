var Marionette      = require('backbone.marionette'),
    Backbone      = require('backbone'),
    template   		= require('./edit_form_template.hbs'),
    SchedulingAlgorithms    = require('./../models/schedulingAlgorithmCollection'),
    SuspendStrategies       = require('./../models/suspendStrategyCollection'),
    DropDownBox             = require('./../../common/drop_down_box/drop_down_box'),
    FarmsView               = require('./farms/list');

module.exports = Marionette.Layout.extend({

  template: template,
  className: "lb form-horizontal",
  regions: {
  	suspendRegion: "#suspendRegion",
  	schedulingRegion: "#schedulingRegion",
    farmsRegion: "#farmsRegion"
  },
  events: {
    "click #newFarm" : "onNewFarm"
  },

  initialize: function() {
    var self = this;

    this.scheduleCol = this.options.scheduleCol;
    this.suspendCol = this.options.suspendCol;

    var susStrat = this.suspendCol.get(self.model.get("suspendStrategy"));
    if(susStrat) {
      susStrat.set("selected", true);
    }

    var schedAlg = this.scheduleCol.get(self.model.get("schedulingAlgorithm"));
    if(schedAlg) {
      schedAlg.set("selected", true);
    }

    // this.suspendCol.fetch({
    //   success: function(collection, response, options) {
    //     var selected = collection.get(self.model.get("suspendStrategy"));
    //     if(selected) {
    //       selected.set("selected", true);
    //     }
    //   },
    //   error: function(collection, response, options) {
    //     console.log("Failed to load schedulingAlgorithms.");
    //     console.log(response);
    //   }
    // });

    // this.scheduleCol.fetch({
    //   success: function(collection, response, options) {
    //     var selected = collection.get(self.model.get("schedulingAlgorithm"));
    //     if(selected) {
    //       selected.set("selected", true);
    //     }
    //   },
    //   error: function(collection, response, options) {
    //     console.log("Failed to load schedulingAlgorithms.");
    //     console.log(response);
    //   }
    // });
  },

  onRender: function() {
  	this.suspendList = this.suspendList || new DropDownBox({
      collection: this.suspendCol, 
      name: "suspendStrategy"
    });
  	this.suspendRegion.show(this.suspendList);

  	this.schedulingList = this.schedulingList || new DropDownBox({
      collection: this.scheduleCol, 
      name: "schedulingAlgorithm"
    });
  	this.schedulingRegion.show(this.schedulingList);

    this.farmsView = this.farmsView || new FarmsView({
      collection: this.model.get("farms")
    });
    this.farmsRegion.show(this.farmsView);
  },

  onNewFarm: function() {
    //var data = Syphone.serialize(this);
    this.model.get("farms").add({name: "new farm"});
  }

});
