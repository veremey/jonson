$(document).ready(function () {
  var peoples = 0,
  tenpeoples = 0,
  hungredpeoples = 0,
  thouthendpeoples = 0;
  var $height;

  if($(window).width() < 764){
  	$height = 72;
  } else if ($(window).width() < 484) {
  	$height = 44;
  } else {
  	$height = 88;
  }

  var onePeopleUp = setInterval( timer, 1000);

  setInterval(function () {
  	peoples = 0;
  	tenpeoples += $height;
  	$('.peoples').css({'top': -peoples});
  	$('.tenpeoples').css({'top': -tenpeoples});
  }, 600000);

  function timer() {
    peoples +=(90 / 60);
    $('.peoples').css({'top': -peoples});
    return peoples;
  }

  setInterval(function () {
  	tenpeoples = 0;
  	peoples = 0;
  	hungredpeoples += $height;
  	$('.peoples').css({'top': -peoples});
  	$('.tenpeoples').css({'top': -tenpeoples});
  	$('.hungredpeoples').css({'top': -hungredpeoples});
  }, 6000000);

  setInterval(function () {
  	tenpeoples = 0;
  	peoples = 0;
  	hungredpeoples = 0;
  	thouthendpeoples += $height;
  	$('.peoples').css({'top': -peoples});
  	$('.tenpeoples').css({'top': -tenpeoples});
  	$('.hungredpeoples').css({'top': -hungredpeoples});
  	$('.thouthendpeoples').css({'top': -thouthendpeoples});
  }, 600000000);

  // setInterval(function () {
  //   thouthendpeoples +=(90 / 60);
  //     $('.thouthendpeoples').css({'top': -thouthendpeoples});
  // }, 100000000);

  // setInterval(function () {
  //   thouthendpeoples = 0;
  // }, 60000000000);


	});

