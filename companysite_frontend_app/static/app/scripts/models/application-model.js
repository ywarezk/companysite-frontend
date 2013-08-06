/**
 * models for our website 
 * @author: Doron Nachshon
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

/**
 * the gallery model
 */

Company.Gallery = DS.Model.extend({
	title:DS.attr('string'),
	technologies: DS.attr('string'),
	description: DS.attr('string'),
	html: DS.attr('string'),
	image: DS.attr('string')
});