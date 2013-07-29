/*global Ember, DS */

var Company = window.Company = Ember.Application.create({

	//@member {string} constant holds the dom element which the application be injected to
    rootElement: '#wrap',

    contact_url: CONTACT_URL
    
});


//controllers
require('scripts/controllers/*');

//views
require('scripts/views/*');

//routes
require('scripts/routes/company-routes');

//store
require('scripts/nerdeez-ember/tastypie_serializer');
require('scripts/nerdeez-ember/tastypie_adapter');
require('scripts/nerdeez-ember/porthole.min');
require('scripts/nerdeez-ember/wormhole');
require('scripts/store/company-store');
