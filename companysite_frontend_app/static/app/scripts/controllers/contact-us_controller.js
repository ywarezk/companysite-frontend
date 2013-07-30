
Company.ContactController = Ember.ObjectController.extend(Ember.Evented,{

	email: null,
	txt: null,
	statusvalue:null,

  	save: function(viewelement) {
	  	email = this.get('email');
	  	txt= this.get('txt');
	  	this.on('sendmsg',  viewelement, 'msgalert');
	  	xthis = this;
  		var hash={
	  	data:{
	  		email : email,
	  		txt: txt,
	  		},
	  		success:function(data){
				statusvalue=data.success;
	  			xthis.fire('sendmsg',true);
	  		},
	  		error:function(data){
				statusvalue=data.success;
	  			xthis.fire('sendmsg',false);
	  		},
	  	};
	  	Company.get('store.adapter').ajax(
	  		Company.contact_url,
	  		'POST',
	  		hash
	  	); 	
	}
});


