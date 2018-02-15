$(document).ready (function () {

	var logoBigSrc = 'static/img/content/logo-site-big.gif';

	if($(document).width() > (1024-16)){
		$('.header').addClass('is-active menu');
		$('.layout-big, .startscreen').addClass('nav-open');

		function changeHeight() {
			var $width = $('.startscreen__wrap').width();
			var $height = $('.slide__pic').height();
			$('.swiper-slide').each(function () {
				$(this).css({'height': $height});
			});
			console.log($height);
		}

		var anima = setInterval(changeHeight, 20);

		setTimeout(function () {
			clearInterval(anima);
			// $('.swiper-wrapper').css({'height':''});
		}, 900);

	}

	$(window).on('resize', function () {
		if($(document).width() > (1024-16)){
			$('.header').removeClass('is-active menu');
			$('.layout-big, .startscreen').removeClass('nav-open');

		} /*else {
			$('.header').addClass('is-active menu');
			$('.layout-big, .startscreen').addClass('nav-open');
		}*/
	});

	$('.header__btn').on('click', function () {
		$('.hdr').attr('class', 'header');

		var $data = $(this).data('name');
		changeHeader($data);

		if(!$('.header').is('.is-active')){
			$('.layout-big, .startscreen').removeClass('nav-open');
		} else {
			$('.layout-big, .startscreen').addClass('nav-open');
		}

		function changeHeight() {
			var $width = $('.startscreen__wrap').width();
			var $height = $('.slide__pic').height();
			$('.swiper-slide').each(function () {
				$(this).css({'height': $height});
			});

		}

		var anima = setInterval(changeHeight, 20);

		setTimeout(function () {
			clearInterval(anima);
			// $('.swiper-wrapper').css({'height':''});
		}, 900);

		$(window).on('resize', function () {
			$('.swiper-slide').each(function () {
				$(this).css({'height': ''});
			});
		});

		// var stopInterval = setInterval(reslick, 20);
		// setTimeout(function () {
		// 	clearInterval(stopInterval);
		// }, 900);


		// var tr = requestAnimationFrame(function () {

		// 	var t = setInterval(reslick, 20);
		// 	setTimeout(function () {
		// 		clearInterval(t);
		// 	}, 900);

		// });


	});

	/* --- close something ---*/
	$('.header .js-close').on('click', function() {
		var closeItem = $(this).data('close');

		$('.' + closeItem).removeClass('is-active search');
		$('.js-toggler').removeClass('is-active search');
		$('.has-sub').removeClass('is-active');
		$('.layout-big, .startscreen').removeClass('nav-open');

		return false;
	});
	/* --- close something ---*/
	$('.js-close').on('click', function() {
		var closeItem = $(this).data('close');

		$('.' + closeItem).removeClass('is-active');;

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
		var $footerHeight = $('.page-footer').outerHeight();
		var $fixBottom = $(document).height() - $win - $footerHeight;

		if($doc > $win/2){
			$('.go-top').show('400');
			} else {
			$('.go-top').hide('400');
		}

		if($(document).scrollTop() > $fixBottom){
			$('.go-top').css({
				'bottom': $doc - $fixBottom + 15
			});
		} else {$('.go-top').css({
			'bottom' : '40px'
		})}
	});

});



function changeHeader(arg) {
	var classes = $('.header').attr('class').split(' ');

	for (var i = classes.length - 1; i >= 0; i--) {
		if(arg == classes[i]){
			$('.header').attr('class', 'hdr is-animated ');

			$('.header__logo_small .header__pic').each(function () {
				$(this).attr('src', 'static/img/content/transparent.png');
			});
			setTimeout(function () {
				$('.header__logo_small .header__pic').each(function () {
					$(this).attr('src', 'static/img/content/logo-site-small.gif');
				});
			}, 800);

		}
		 else {
			$('.header').removeClass('menu search').addClass('is-active  is-animated ' + arg);

			$('.header__logo_big .header__pic').each(function () {
				$(this).attr('src', 'static/img/content/transparent.png');
			});
			setTimeout(function () {
				$('.header__logo_big .header__pic').each(function () {
					$(this).attr('src', 'static/img/content/logo-site-big.gif');
				});
			}, 800);

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