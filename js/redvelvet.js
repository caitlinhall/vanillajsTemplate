/*function myFunction() {
	console.log("hello world");
    $.cookie('bakeryCookie', 'true');
    console.log($.cookie('bakeryCookie'));
}*/

$(document).ready(function(){

	function setPage1Cookie() {
	    $.cookie('page1Cookie', 'true');
	}

	function setPage2Cookie() {
	    $.cookie('page2Cookie', 'true');
	}

	var page1 = $("#page1");
	var page2 = $("#page2");
	if(page1){
		page1.click(setPage1Cookie);
	}
	if(page2){
		page2.click(setPage2Cookie);
	}
	console.log($.cookie('page2Cookie')+ " page2");
	console.log($.cookie('page1Cookie') +" page1");


	var urlTag = $("#urlTag");
	if(urlTag){
		if($.cookie('page1Cookie')){
			urlTag.html("<a href='page1.html'>Submit</a>");
		}
		if($.cookie('page2Cookie')){
			urlTag.html("<a href='page2.html'>Submit</a>");
		}
	}

	var deleteCookie = $("#deleteCookie");
	if(deleteCookie){
		if($.cookie('page1Cookie')){
			$.removeCookie('page1Cookie');		
		}else if($.cookie('page2Cookie')){
			$.removeCookie('page2Cookie');
		}
	}

});