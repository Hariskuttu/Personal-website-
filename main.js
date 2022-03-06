
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".bg").css({
		backgroundSize: (500 + scroll/-5)  + "%",
	
	
	});
});

