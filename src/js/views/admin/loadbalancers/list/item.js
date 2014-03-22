var Marionette      = require('backbone.marionette'),
    template        = require('./item_template.hbs'),
    SchedulingAlgorithms    = require('./../models/schedulingAlgorithmCollection'),
    SuspendStrategies       = require('./../models/suspendStrategyCollection');

module.exports = Marionette.ItemView.extend({
    tagName: 'tr',
    template: template,
    modelEvents: {
        "change": "render"
    },

    events: {
        'click button': "onItemDelete",
        'click': 'onItemClick'
    },

    initialize: function(options) {
        // var that = this;
        this.delegateEvents();

        this.scheduleCol = options.scheduleCol;
        this.suspendCol = options.suspendCol;

        this.listenTo(this.scheduleCol, "sync", this.setSchedulingName, this);
        this.listenTo(this.suspendCol, "sync", this.setSuspendName, this);

        // suspendCol.fetch({
        //     success: function(collection, response, options) {
        //         var item = collection.findWhere({id: that.model.get("suspendStrategy")})
        //         that.model.set("suspendName", item.get("name"));
        //     },
        //     error: function(collection, response, options) {
        //         console.log("Failed to load schedulingAlgorithms.");
        //         console.log(response);
        //     }
        // });

        // scheduleCol.fetch({
        //     success: function(collection, response, options) {
        //         var item = collection.findWhere({id: that.model.get("schedulingAlgorithm")})
        //         that.model.set("schedulingName", item.get("name"));
        //     },
        //     error: function(collection, response, options) {
        //         console.log("Failed to load schedulingAlgorithms.");
        //         console.log(response);
        //     }
        // });

    },

    setSuspendName: function() {
        var item = this.suspendCol.findWhere({id: this.model.get("suspendStrategy")})
        if(item) {
            this.model.set("suspendName", item.get("name"));
        }
    },

    setSchedulingName: function() {
        item = this.scheduleCol.findWhere({id: this.model.get("schedulingAlgorithm")})
        if(item) {
            this.model.set("schedulingName", item.get("name"));
        }
    },

    onItemClick: function(ev) {
        ConDep.core.vent.trigger("env:item:clicked", ev, this.model);
    },

    onItemDelete: function(ev) {
        ev.stopPropagation();
        this.model.destroy();
    }

});

