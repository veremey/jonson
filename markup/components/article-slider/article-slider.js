
$('.slider__container').slick({
	centerMode: true,
	centerPadding: '66px',
	slidesToShow: 1,
	slidesToScroll: 1,
	initialSlide: 1,
	arrows: true,
	infinite: false,
	prevArrow: $('.slid-prev'),
	nextArrow: $('.slid-next'),
	responsive: [{
		breakpoint: 1025,
		settings: {
			slidesToShow: 1,
			centerMode: false,
			initialSlide: 0,
			arrows: false,
			dots: true
			}
		}]
});

