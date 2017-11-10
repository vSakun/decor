function slider(){
	$(".control .nextBlok").on('click', function(){
		var slide = $("#project [class=row]");
		if(slide.next().hasClass("hid")){
			slide.addClass("vis");
			setTimeout(function () {
				slide.addClass("hid");
				slide.next().removeClass("hid");
			}, 500);
			setTimeout(function () {
				slide.next().removeClass("vis");
			}, 550);
		}
	});
	$(".control .prevBlok").on('click', function(){
		var slide = $("#project [class=row]");
		if(slide.prev().hasClass("hid")){
			slide.addClass("vis");
			setTimeout(function () {
				slide.addClass("hid");
				slide.prev().removeClass("hid");
			}, 500);
			setTimeout(function () {
				slide.prev().removeClass("vis");
			}, 550);
		}
	});
};
slider();

/*Функция POPUP. На блок который надо увеличивать необходимо установить name="box"*/
function popup(){
	$(".coverImg").on('click', function(){
		var copy = $(this).clone();
		console.log($(this).parent().append('<div class="popup"></div>'));
		$(copy).appendTo(".popup");
		$(".popup").append('<i class="fa fa-times"></i>');
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".coverImg");
			var cl = $(".popup i[class=pe-7s-close]"); // тут указываем ID элемента
			if (!div.is(e.target) && div.has(e.target).length === 0){ // и не по его дочерним элементам
				$("div.popup").remove(); // скрываем его
			}
			if(cl.is(e.target) && cl.has(e.target).length ===0){
				$("div.popup").remove();
			}
		});
	});
	$(document).bind('keydown', function(eventObject){
		if(eventObject.keyCode == 27){
			$("div.popup").remove();
		}
	});
}
popup();