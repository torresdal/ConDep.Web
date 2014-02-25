(function (window, document) {
    'use strict';

    var BaseView = function () {
        this.childViews = [];
        
        if (this.bindings) {
            _.each(_.keys(this.bindings), function (selector) {
                // Convert simple bindings to objects
                var binding = this.bindings[selector];
                if (typeof binding === 'string') {
                    binding = this.bindings[selector] = {
                        observe: binding
                    };
                }

                // Default to bind only on 'change' event from input elements
                if (!binding.events) {
                    binding.events = ['change'];
                }

                // Default to always validate on set
                binding.setOptions = _.extend({}, binding.setOptions, { validate: true });
                
            }, this);
        }

        Backbone.View.apply(this, arguments);
    };

    _.extend(BaseView.prototype, Backbone.View.prototype, {
        initialize: function () {
        },

        render: function () {
            var self = this;

            this.trigger('before:render');

            if (this.beforeRender) {
                this.beforeRender();
            }
    
            this.renderChildren();

            if (this.afterRender) {
                // Make sure render is done before calling afterRender
                _.defer(function () {
                    self.afterRender.apply(self, arguments);
                });
            }

            this.trigger('after:render');
            return this;
        },

        renderChildren: function() {
            _.each(this.childViews, function(view) {
                if (view.parentEl) {
                    self.$(view.parentEl).append(view.render().el);
                } else {
                    self.$el.append(view.render().el);
                }
            });
        },

        appendTo: function ($el) {
            this.render();
            $el.append(this.$el);

            return this;
        },

        addChildView: function (view, selector) {
            view.parentEl = selector;
            this.childViews.push(view);
        },

        removeChildView: function (view) {
            this.childViews = _.without(this.childViews, view);

            view.remove();
        },

        removeAllChildViews: function () {
            _.each(this.childViews, function (view) {
                this.removeChildView(view);
            }, this);
        },

        remove: function () {
            if (this.beforeRemove) {
                this.beforeRemove();
            }

            _.each(this.childViews, function (view) {
                if (view.clearErrors) {
                    view.clearErrors();
                }
            }, this);

            if (this.removeAllChildViews) {
                this.removeAllChildViews();
            }

            if (this.undelegateShortcuts) {
                this.undelegateShortcuts();
            }

            if (this.clearErrors) {
                this.clearErrors();
            }

            $(window).off('.' + this.cid);
            $(document).off('.' + this.cid);

            //app.eventAggregator.off(null, null, this);

            //Backbone.Validation.unbind(this);
            Backbone.View.prototype.remove.apply(this, arguments);

            return this;
        }
    });

    ConDep.BaseView = BaseView;
    BaseView.extend = Backbone.View.extend;
}(window, document));