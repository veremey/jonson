$(document).ready (function () {
	if($(document).width() > 780){
		if($('#skrollr-body').length){
			skrollr.init({
			forceHeight: false
		});
		}
	}

});


