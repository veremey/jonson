$(document).ready(function() {
  /*-  js-accordion-*/
  $('.js-accordion').on('click touchstart', function (e) {
  	e.preventDefault();
  	var $this = $(this);
  	var $way = $(this).data('accord');

  	if($this.closest('.'+$way).is('.is-active')){
  		$this.closest('.'+$way).removeClass('is-active');
  	} else {
	  	$('.'+ $way).removeClass('is-active');
	  	$this.closest('.'+$way).addClass('is-active');
	  }
  });
});
