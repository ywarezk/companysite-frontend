
Ember.View.reopen({

	msgalert: function(statusvalue) {
		if(statusvalue)
		{
		$(' .alert-success').show();
		}
		else{
		$(' .alert-error').show();
		};
		},

});
