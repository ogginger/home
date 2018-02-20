//main.js: Main Logic for the Home App.

requirejs.config({
	paths: {
		"rsvp": "lib/rsvp.min",
		"backbone": "lib/backbone.min",
		"underscore": "lib/underscore.min",
		"jquery": "lib/jquery.min",
		"bootstrap": "lib/bootstrap.min",
	},

	shim: {
		"backbone": {
			deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		},
		"underscore": {
			deps: [
				"jquery"
			],
			exports: "_"
		},
		"bootstrap": {
			deps: [
				"jquery"
			],
			exports: "bootstrap"
		}
	}
});

require([
	"Functions/log",
	"Views/AppView",
	"bootstrap"
], function(
	log,
	AppView
) {
	log( "Home's main initialized successfully!" );
	new AppView();
});
