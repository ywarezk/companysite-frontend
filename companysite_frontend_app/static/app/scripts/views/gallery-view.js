/**
 * the view for the gallery
 *
 */
Company.GalleryView = Ember.View.extend({
	didInsertElement: function(){ 

		var stringOfHtml = $('#ads-data').html();
		var wrappedString = '<div>' + stringOfHtml + '</div>';
		var noScript = wrappedString.replace(/script/g, "THISISNOTASCRIPTREALLY");
		var html = $(noScript);
		html.find('THISISNOTASCRIPTREALLY').remove();

		$('#slidorion').html(html.html());
		
		$('#slidorion').slidorion({
			speed: 1000,
			interval: 8000,
			effect: 'slideRandom'
		});
		
	}
});