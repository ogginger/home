//main.js: Main backend logic.
var requirejs = require("requirejs");

requirejs.config({
	nodeRequire: require,
	baseUrl: "/var/www/html/scripts/",
	paths: {
		"rsvp": "lib/rsvp.min",
		"backbone": "lib/backbone.min",
		"underscore": "lib/underscore.min"
	},

	bundles: {
		"lib/snip.min": [ "Snip" ],
		"lib/file.min": [ "file" ]
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
		"Snip": {
			deps: [
				"rsvp",
				"file"
			],
			exports: "Snip"
		},
		"file": {
			deps: [
				"fs",
				"rsvp"
			],
			exports: "file"
		}
	}

});

requirejs([
	"Snip",
	"file",
	"Functions/log"
], function(
	Snip,
	file,
	log
) {
	log("Backend main initialized successfully!");
	

	

	/*
	var xSnip = new Snip({
		"Dir":"/var/www/html/scripts/backend/etc/Snippets/",
		"Snippets": {
			"function": "function.txt",
			"testsuite": "testsuite.txt",
			"model": "model.txt",
			"view": "view.txt"
		}
	});

	var sTemplateType = "view";
	var sFileName = "/var/www/html/scripts/Views/App_View.js";
	xSnip.snip( sTemplateType ).then(function( Template ) {
		//log( Template );
		//*
		file.create({
			"Name": sFileName,
			"Body": Template
		}).then(function() {
			log("Done.");
		}).catch(function( Error ) {
			log( "file.create Error: " + Error );
		});
		//*/
	}).catch(function( Error ) {
		log( "Snip Error: " + JSON.stringify( Error ) );
	});
	//*/
});
