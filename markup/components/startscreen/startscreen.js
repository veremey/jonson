
if($('.startscreen__item').length > 1) {
	$('.startscreen__slider').slick({
		dots: true,
		autoplay: false,
		autoplaySpeed: 2000,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
}

$(window).on('resize', function () {
	$('.startscreen__slider').slick('unslick');

	$('.startscreen__slider').slick({
		dots: true,
		autoplay: false,
		autoplaySpeed: 2000,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
});