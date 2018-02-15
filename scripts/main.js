//main.js: Main Logic for the Home App.

requirejs.config({
	paths: {
		"rsvp": "lib/rsvp.min",
		"backbone": "lib/backbone.min",
		"underscore": "lib/underscore.min",
		"jquery": "lib/jquery.min"
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
		}
	}
});

require([
	"Views/AppView",
	"Functions/log"
], function(
	AppView,
	log
) {
	log("Home App main initialized successfully!");
	var xApp = new AppView();
});
