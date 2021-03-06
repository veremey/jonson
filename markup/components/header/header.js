
$(document).ready (function () {

	$('.header__btn').on('click', function () {
		$('.hdr').attr('class', 'header');

		var $data = $(this).data('name');
		changeHeader($data);
	});

	Global_main.anotherClick({
		container: '.header',
		trigger: '.header',
		className: 'is-active menu search'
	})
	Global_main.initScroll({
		conteiner: '.header__nav'
	})

	/* --- close something ---*/
	$('.js-close').on('click', function() {
		var closeItem = $(this).data('close');

		$('.' + closeItem).removeClass('is-active search');
		$('.js-toggler').removeClass('is-active search');

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


});

function changeHeader(arg) {
	var classes = $('.header').attr('class').split(' ');

	for (var i = classes.length - 1; i >= 0; i--) {
		if(arg == classes[i]){
			// $('.header').removeClass('menu search is-active');
			$('.header').attr('class', 'hdr');
			// console.log('some');
		}
		 else {
			$('.header').removeClass('menu search').addClass('is-active ' + arg);
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
