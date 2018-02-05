$(document).ready(function() {
  /*-  js-accordion-*/
  $('.js-accordion').on('click touchstart', function (e) {
  	e.preventDefault();
  	var $this = $(this);
  	var $way = $(this).data('accord');

  	if($this.is('.is-active')){
  		$this.removeClass('is-active');
  	} else {
	  	$('.'+ $way).removeClass('is-active');
	  	$this.addClass('is-active');
	  }
  });
});
