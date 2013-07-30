
Company.ContactController = Ember.ObjectController.extend({

	email: null,
	txt: null,
	statusvalue:null,

  	save: function(viewelement) {
	  	email = this.get('email');
	  	txt= this.get('txt');
  		var hash={
	  		data:{
		  		email : email,
		  		message: txt,
		  		},
	  		success:function(data){
	  			viewelement.msgalert(true, data.message);
	  			},
	  		error:function(data){
	  			viewelement.msgalert(false, data.message);
	  			},
	  		};
	  	Company.get('store.adapter').ajax(
	  			Company.contact_url,'POST',hash);
		}
});

