$(document).ready(function() {
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 80
		}, 1000);
		return false;
	});
	/*$('.category-type .my-item').click(function(e){
		var that = $('.category-type .my-item a');
		var target = $(e.relatedTarget);
		if(target != that) {
			alert(false);
		}
		else {
			alert(true);
		}
	});*/
	var to = $('[data-item="target"] img');
	var from = $('[data-item="slider-sync-1"] img');
	
	from.click(function() {
		var loc = $(this).attr("src");
		to.attr("src",loc);
	});
	
	var sync1 = $('[data-item="slider-sync-1"]');
	
	sync1.owlCarousel({
		loop : true,
		items : 3,
		margin:0,
		nav : true,
		thumbs: true,
		margin: 10,
		navText: [
			"<i class='my-arrow-left'></i>",
			"<i class='my-arrow-right'></i>"
		]
	});
	
	var owlMain = $('[data-item="slider-main"]');
	owlMain.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
			"<i class='my-arrow-left'></i>",
			"<i class='my-arrow-right'></i>"
		]
	});
});
