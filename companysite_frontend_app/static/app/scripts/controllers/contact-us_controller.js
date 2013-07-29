
Company.ContactController = Ember.ObjectController.extend({
	email: null,
	txt: null,

  	save: function() {
	  	email = this.get('email');
	  	txt= this.get('txt');
  		var hash={
	  	data:{
	  		email : email,
	  		txt: txt,
	  		},
	  		success:function(data) {
	  			alert("Message sent");
        	},
	  		error:function(data){
	  			var msg= data.message;
	  			alert(msg);
	  		}
	  	};
	  	Company.get('store.adapter').ajax(
	  		Company.contact_url,
	  		'POST',
	  		hash
	  	); 	
	}

    	
});
