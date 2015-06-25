$(document).ready(function() {
	$("body").scrollspy({target: "#menu", offset:80});
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 80
		}, 1000);
		return false;
	});
	$('.anim-el').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			// element is now visible in the viewport
		$(this).addClass('in-view');
		$('.content.block-1 .holder-img').addClass('anim');
		} else {
			$(this).removeClass('in-view');
			$('.content.block-1 .holder-img').removeClass('anim');
		}
	});
	
	$("#call").on('hidden.bs.modal', function (e) {
		$('.form-send')[2].reset();
	});
	$('#video').on('show.bs.modal', function () { 
		$('div.modal-body .embed-responsive').html('<iframe class="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0&amp;autoplay=1" allowfullscreen=""></iframe>');  
	});
	$('#video').on('hide.bs.modal', function () {
		$('div.modal-body .embed-responsive').html('');
	});
	
	$('[data-item="disable-slider"]').click(function(){
		$('.turn-on').toggleClass('active');
		$('.turn-off').toggleClass('active');
		$(this).toggleClass('active');
	});
	
	
	var owlMain = $('[data-item="slider-item"]');
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
      ],
		dots: true,
	});
	// this is the id of the form
	
	 // bind form using ajaxForm 
	/*$('[data-form="send"]').validator().on('submit', function (e) {
		if (e.isDefaultPrevented()) {
			console.log('error');
		}
		else {
			$('#call').modal('hide');
			$('#thx').modal('show');
			$('[data-form="send"]')[0].reset();
			$('[data-form="send"]').ajaxSubmit();
			console.log('succuses');
		}
	});*/
	$('[data-form="send"]').ajaxForm(function() {
		$('#call').modal('hide');
		$('#thx').modal('show');
		$('[data-form="send"]')[0].reset();
	});
	var owlMainT = $('[data-item="slider-item-two"]');
	owlMainT.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		dotsContainer:'#navigation-slider',
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
      ],
		dots: true,
	});
	
	
	//var title = $('.block-1 .offset');
	//var win = $(window).height() / 2.5;
	//title.css('margin-top', win);
	var scroll_r = $(this).scrollTop();
	menuTop();
	$(window).scroll(function () {
		
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
});

function menuTop(){
		
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
