
Ember.View.reopen({

	didInsertElement: function() {
		this._super();
        $(".validate").validationEngine('attach');
	}
});

Ember.TextSupport.reopen({
 	attributeBindings: ["required"]
});
