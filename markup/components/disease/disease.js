
$(document).ready (function () {
	$('.js-tab').on('click', function (e) {
		e.preventDefault();

		if($(this).is('.alfabet__item')){
			var $way = $(this).data('tab');

			$('.alfabet__item').removeClass('is-active');
			$(this).addClass('is-active');
			$('.pill__list').removeClass('is-active');
			$('.pill__list_'+$way).addClass('is-active');
		}
		if($(this).is('.pill__item')){
			var $way = $(this).data('tab');
			$('.medicine__item').removeClass('is-active');
			$('.medicine__item_'+$way).addClass('is-active');
		}
	});
});

