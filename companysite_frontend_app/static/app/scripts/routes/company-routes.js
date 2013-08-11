/**
* this file will hold Company site routes
*
* @copyright: Nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
*/

/**
 * define the routes urls here
 */
Company.Router.map(function () {
	this.route('home');
	this.route('about');
	this.route('terms');
	this.route('privacy');
	this.route('contact');
	this.route('gallery');
});


/**
 * the homepage route
 */
Company.HomeRoute = Ember.Route.extend({
	model: function(param){
		return Company.Gallery.find({});
	}
});

/**
 * route to about page
 */
Company.AboutRoute = Ember.Route.extend({
	model: function(param){
		return Company.Flatpage.find({'title' : 'about'});
	}
});

/**
 * route to privacy page
 */
Company.PrivacyRoute = Ember.Route.extend({
	model: function(param){
		return Company.Flatpage.find({'title' : 'privacy'});
	}
});

/**
 * route to terms page
 */
Company.TermsRoute = Ember.Route.extend({
	model: function(param){
		return Company.Flatpage.find({'title': 'terms'});
	}
});

/**
 * route to gallery page
 */
Company.GalleryRoute = Ember.Route.extend({
	model: function(param) {
		return Company.Gallery.find({});
	}
});