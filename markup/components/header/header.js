
$(document).ready (function () {

	if($(document).width() > (1550-16)){
		$('.header').addClass('is-active menu');
		$('.layout-big').addClass('nav-open');
	} else {

		$(document).on('click touchstart', function(el){
			var childr = $('.header').find('*');

			if($(el.target).is(childr) == false ){
				$('.header').removeClass('is-active menu search');
				$('.layout-big, .startscreen').removeClass('nav-open');
			}
			$('body').removeClass('not-move');

		});

	}

	$(window).on('resize', function () {
		if($(document).width() < (1550-16)){
			$('.header').removeClass('is-active menu');
			$('.layout-big, .startscreen').removeClass('nav-open');

		} else {
			$('.header').addClass('is-active menu');
			$('.layout-big, .startscreen').addClass('nav-open');
		}
	});

	$('.header__btn').on('click', function () {
		$('.hdr').attr('class', 'header');

		var $data = $(this).data('name');
		changeHeader($data);

		if(!$('.header').is('.is-active')){
			$('.layout-big, .startscreen').removeClass('nav-open');
			$('body').removeClass('no-move');
		}else {
			$('.layout-big, .startscreen').addClass('nav-open');
			$('body').addClass('no-move');
		}
	});

	Global_main.anotherClick({
		container: '.header',
		trigger: '.has-sub',
		className: 'is-active'
	})
	Global_main.initScroll({
		conteiner: '.header__nav'
	})

	/* --- close something ---*/
	$('.js-close').on('click', function() {
		var closeItem = $(this).data('close');

		$('.' + closeItem).removeClass('is-active search');
		$('.js-toggler').removeClass('is-active search');
		('.has-sub').removeClass('is-active');

		return false;
	});

	/*---- nav__link  ------*/

	$('.nav__link').on('click', function (e) {
		if( $(this).parent('.nav__item').is('.has-sub') ) {
			e.preventDefault();
			$(this).parent('.nav__item').addClass('is-active');
		} else {
			return true;
		}

	});

	/*------- go top-----------*/

	$('.js-top').on('click', function () {
	  var body = $("html, body");
	  body.stop().animate({scrollTop:0}, 500, 'swing');
	});



	$(document).on('scroll', function () {
		var $win =$(window).height();
		var $doc = $(document).scrollTop();

		if($doc > $win/2){
			$('.go-top').show('400');
			} else {
			$('.go-top').hide('400');
		}
	});

});



function changeHeader(arg) {
	var classes = $('.header').attr('class').split(' ');

	for (var i = classes.length - 1; i >= 0; i--) {
		if(arg == classes[i]){
			// $('.header').removeClass('menu search is-active');
			$('.header').attr('class', 'hdr is-animated ');
			// console.log('some');
		}
		 else {
			$('.header').removeClass('menu search').addClass('is-active  is-animated ' + arg);
		}

	}
}

/*--- close if click not here ------ */
/*-------------------------------------------*/
var Global_main = new GlobalMainClass();

function GlobalMainClass() {
	var globalScope = this;

	this.anotherClick = function (opt) {
		var $container = $(opt.container);
		var $trigger = $(opt.trigger);
		var $className = opt.className;

		$(document).on('click touchstart', function(el){
			var childr = $container.find('*');

			if($(el.target).is(childr) == false ){
				$trigger.removeClass($className);
			}
			$('body').removeClass('not-move');

		});
	}

	/*--- init scroll ---*/
	/*---------------------------------------------------------------------*/
	this.initScroll = function(opt) {
		var $conteiner = $(opt.conteiner);

		(function($){
			$(window).on("load",function(){
				// var $snapAmount = ($('.mobile-ml').length) ? null : 40;
				$conteiner.mCustomScrollbar({
					// snapAmount:$snapAmount,
					scrollButtons:{enable:true},
					keyboard:{scrollAmount:40},
					mouseWheel:{deltaFactor:40},
					scrollInertia:400,
					setHeight: '100%',
					advanced: {
						updateOnContentResize: true
					}
				});
			});
		})(jQuery);

	};
}
