/**
* The view for the contact-us page
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yael Rifer
*/



Company.ContactView = Ember.View.extend({
	templateName : 'contact',

	saveto:function(){
		this.controller.save(this);
	},

	didInsertElement: function() {
		$(document).ready(function(){
        	$("#formID").validationEngine('attach');
       		});
	},

});
