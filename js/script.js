function slider(){
	$(".control .nextBlok").on('click', function(){
		var slide = $("#project div[class=row]");
		var slideHid = $("#project div[class=row hid]");
		slide.addClass("hid");
	});
	$(".control .prevBlok").on('click', function(){
		alert("nazad");
	});
};
slider();