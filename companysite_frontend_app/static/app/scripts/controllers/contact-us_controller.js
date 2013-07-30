
Company.ContactController = Ember.ObjectController.extend(Ember.Evented,{

	email: null,
	txt: null,
	statusval:null,

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
				statusval=data.success;
	  			xthis.fire('sendmsg');
	  		},
	  		error:function(data){
				statusval=data.success;
	  			msgalert();
	  		},
	  	};
	  	Company.get('store.adapter').ajax(
	  		Company.contact_url,
	  		'POST',
	  		hash
	  	); 	
	}
});


