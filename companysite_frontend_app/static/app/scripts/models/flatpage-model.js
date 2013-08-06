/**
 * models for our flatpage
 * 
 * @author: Doron Nachshon
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

/**
 * the flatpage model
 */
Company.Flatpage = DS.Model.extend({
	title:DS.attr('string'),
	html: DS.attr('string'),
});