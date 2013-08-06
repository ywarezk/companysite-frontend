/**
* The view for the contact-us page
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yael Rifer
*/



Company.ContactView = Ember.View.extend({

	save:function(){
		this.controller.save(this);
	},

});