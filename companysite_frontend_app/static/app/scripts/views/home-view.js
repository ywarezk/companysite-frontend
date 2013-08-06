/**
 * the view for the homepage 
 *
 */
Company.HomeView = Ember.View.extend({
	didInsertElement: function(){ 
		this._super();
		//$($('.circles a')[0]).addClass('active');

		//$('.item:first-of-type').addClass('active');

		var stringOfHtml = $('#ads-data').html();
		var wrappedString = '<div>' + stringOfHtml + '</div>';
		var noScript = wrappedString.replace(/script/g, "THISISNOTASCRIPTREALLY");
		var html = $(noScript);
		html.find('THISISNOTASCRIPTREALLY').remove();


		$('#icarousel').html(html.html());
		$('#icarousel').iCarousel();
	}
}