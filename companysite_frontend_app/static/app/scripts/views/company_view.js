
Ember.View.reopen({

	didInsertElement: function() {
		this._super();
        $(".validate").validationEngine('attach');
		},


	msgalert: function(statusvalue, servermsg) {
		id=this.elementId;
		if(statusvalue)
			{
			$(' .alert-success').show();
			if(!(servermsg==null||servermsg=='')){
				$('#'+id+' .alert-success').html(servermsg);};
			}
		else{
			$(' .alert-error').show();
			if(!(servermsg==null||servermsg=='')){
				$('#'+id+' .alert-error').html(servermsg);};
			};
		},

});
