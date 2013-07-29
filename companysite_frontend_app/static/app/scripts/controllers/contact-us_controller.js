
Company.ContactController = Ember.ObjectController.extend({
	email: null,
	txt: null,

  	save: function() {
    	$(document).ready(function(){
        	$("#formID").validationEngine('attach');
       });
	  	email = this.get('email');
	  	txt= this.get('txt');
  		var hash={
	  	data:{
	  		email : email,
	  		txt: txt,
	  		},
	  		success:function(){

	  		},
	  		error:function(){
	  			
	  		}
	  	};
	  	Company.get('store.adapter').ajax(
	  		Company.contact_url,
	  		'POST',
	  		hash
	  	); 	
	}
});
