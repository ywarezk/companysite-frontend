
Ember.View.reopen({

	staticUrl: STATIC_URL,

	didInsertElement: function() {
        $('form.validate').validationEngine('attach');
	}
});