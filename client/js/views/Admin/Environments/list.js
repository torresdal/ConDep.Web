ConDep.Admin_Environments_ListView = Backbone.Marionette.CompositeView.extend({
    template: '#tpl_env_list',
	tagName: 'table',
    className: 'table table-hover table-col-btns',
    itemView: ConDep.Admin_Environments_Item
});