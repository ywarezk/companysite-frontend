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


		$('#any_id').html(html.html());
		$('#any_id').barousel();
	}
});