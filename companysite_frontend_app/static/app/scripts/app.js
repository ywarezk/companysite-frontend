/*global Ember, DS */

var Company = window.Company = Ember.Application.create({

	//@member {string} constant holds the dom element which the application be injected to
    rootElement: '#wrap',

    server_url: SERVER_URL,
    
});


//store
require('scripts/nerdeez-ember/tastypie_serializer');
require('scripts/nerdeez-ember/tastypie_adapter');
require('scripts/nerdeez-ember/porthole.min');
require('scripts/nerdeez-ember/wormhole');
require('scripts/store/company-store');

//handlebars-helpers
require('scripts/nerdeez-ember/handlebars_helpers');

//jquery
require("bower_components/jquery plugins/jquery.tinylimiter");


//routes
require('scripts/routes/company-routes');

//models
require('scripts/models/*');

//controllers
require('scripts/controllers/*');

//views
require('scripts/views/company-view');
require('scripts/views/flatpage-view');
require('scripts/views/gallery-view');