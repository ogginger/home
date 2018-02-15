//App_View.js: Visual logic for the Home App.

define([
	"jquery",
	"underscore",
	"backbone",
	"Functions/log"
], function(
	$,
	_,
	Backbone,
	log
) {
	return Backbone.View.extend({
		"initialize": function() {
			log("View initialized successfully!");
		}
	});
});
