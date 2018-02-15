
$(document).ready(function () {
	$('.js-ppp').on('click', function (e) {
		e.preventDefault();
		var $showMe = $(this).data('ppp');
		$('.' + $showMe).addClass('is-active');
	});

	// $(document).on('click touchstart', function(el){
	// 	var childr = $('.ppp__content').find('*');

	// 	if($(el.target).is(childr) == false ){
	// 		$('.ppp').removeClass('is-active');
	// 	}
	// 	$('body').removeClass('not-move');

	// });
});