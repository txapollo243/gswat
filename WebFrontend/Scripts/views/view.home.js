(function(window, $, _, ich) {
    _.extend(window.pGSWAT.prototype.view_definitions, {
        home: Backbone.View.extend({
            events: {
                //
            },

            el: '#content',

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(ich.tpl_body());
            }
        })
    });
}(window, jQuery, _, ich));