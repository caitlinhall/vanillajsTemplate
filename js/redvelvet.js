/*function myFunction() {
	console.log("hello world");
    $.cookie('bakeryCookie', 'true');
    console.log($.cookie('bakeryCookie'));
}*/

$(document).ready(function(){

	function setBakeryCookie() {
	    $.cookie('bakeryCookie', 'true');
	}

	function setDeliCookie() {
	    $.cookie('deliCookie', 'true');
	}

	var bakery = $("#bakery");
	var deli = $("#deli");
	if(bakery){
		bakery.click(setBakeryCookie);
	}
	if(deli){
		deli.click(setDeliCookie);
	}
	console.log($.cookie('deliCookie')+ "deli");
	console.log($.cookie('bakeryCookie') +"bakery");


	var urlTag = $("#urlTag");
	if(urlTag){
		if($.cookie('bakeryCookie')){
			urlTag.html("<a href='bakery.html'>Submit</a>");
		}
		if($.cookie('deliCookie')){
			urlTag.html("<a href='deli.html'>Submit</a>");
		}
	}

	var deleteCookie = $("#deleteCookie");
	if(deleteCookie){
		if($.cookie('bakeryCookie')){
			$.removeCookie('bakeryCookie');		
		}else if($.cookie('deliCookie')){
			$.removeCookie('deliCookie');
		}
	}

});