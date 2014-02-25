ConDep.Admin_Environments_Wizard_Main = Backbone.Marionette.Layout.extend({
    template: "#tpl_wiz_dialog",
    className: "modal fade",

    regions: {
        wizPageRegion: "#wizPage"
    },
    
    events: {
        'click a[href=#general]': function (e) {
            e.preventDefault();
            this.showGeneral(e);
        },
        'click a[href=#tiers]': function (e) {
            e.preventDefault();
            this.showTiers(e);
        },
        'click a[href=#lb]': function (e) {
            e.preventDefault();
            this.showLoadBalancer(e);
        },
        'click a[href=#tier]': function (e) {
            e.preventDefault();
            this.showTier(e);
        }
    },

    initialize: function() {        
        this.generalView = new ConDep.Admin_Environments_Wizard_General({model: this.model});
        this.tiersView = new ConDep.Admin_Environments_Wizard_TierList({ collection: this.model.get("Tiers") });
        this.lbView = new ConDep.Admin_Environments_Wizard_LoadBalancer({ model: this.model.get("LoadBalancer") });
    },

    onRender: function() {
        this.wizPageRegion.show(this.generalView);
        this.$el.modal('show');
        this.delegateEvents();
    },

    showGeneral: function(caller) {
        this.selectMenuItem(caller);
        this.wizPageRegion.show(this.generalView);
    },

    showTiers: function(caller) {
        this.selectMenuItem(caller);
        this.wizPageRegion.show(this.tiersView);
    },

    showTier: function(caller) {
        this.selectMenuItem(caller);

        var index = $(caller.target).data('tier');
        var tiers = this.model.get("Tiers");
        var tier = tiers.models[index];
        var tierView = new ConDep.Admin_Environments_Wizard_TierEdit({ model: tier });
        this.wizPageRegion.show(tierView);
    },

    showLoadBalancer: function(caller) {
        this.selectMenuItem(caller);
        this.wizPageRegion.show(this.lbView);
    },

    selectMenuItem: function(caller) {
        this.$('li.active').removeClass('active');
        $(caller.target.parentElement).addClass('active');
    }

});