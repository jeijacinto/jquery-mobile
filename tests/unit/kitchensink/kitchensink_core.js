/*
 * Kitchen Sink Tests
 */
(function($){
	module("jquery.mobile.buttonMarkup.js");

	test( "Nothing on the page has a class that contains `undefined`.", function(){
		var undefClass = $(".ui-page").find("[class*='undefined']");

		ok( undefClass.length == 0 );
	});

})(jQuery);
