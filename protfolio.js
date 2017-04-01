//My Custom jQuery
//=============
//Author:  Ripon
//Updated: January 2016


//this code for testing

//$(function(){
//	alert(" I Am Working ");
//});





//this is for the up arrow key

$( function() {
	$("#arrow").click( function() {
    $("#top").animate({scrollTop: 0}, 4000);
    return false;
});
	
});




//this is for the smooth navigation scroling 


$(function(){
  $(".nav li a").click(function() {
    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"")
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $("[name=" + this.hash.slice(1) +"]");
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $("html,body")
        .animate({scrollTop: targetOffset}, 2000);
       return false;
      }
    }
  });
});