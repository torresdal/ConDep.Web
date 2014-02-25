ConDep.Admin_SidebarView = Backbone.View.extend({

    events:{
        "click .button":"buttonClick"
    },
    
    render:function () {
        this.$el.html(this.template());
        return this;
    },

    buttonClick:function (event) {
        console.log("triggering button event...");
        this.$('.nav li.active').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.trigger('button', event.target.id);
    }

});