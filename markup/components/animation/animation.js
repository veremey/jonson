$(document).ready(function () {

	// var doughnut = + 10000001;
   // window.setInterval(
   //  function () {
   //      doughnut =  + doughnut + 1;
   //      var str = String(doughnut).split('');
   //      var r = str.join('');
   //      console.log(r);
   //      $(".counter__desc").html('');
   //      for (var i = str.length - 1; i >= 0; i--) {
   //      	$(".counter__desc").prepend('<span>' + str[i] + '</span>')
   //      }
   //  }, 60000);

   var peoples = 0,
   tenpeoples = 0,
   hungredpeoples = 0,
   thouthendpeoples = 0;

   window.setInterval(
    function () {
    	peoples += (90 / 60);
        $('.peoples').css({'top': -peoples});
    }, 1000);

   // setInterval(
   //  function () {
   //  	peoples = -1;
   //  }, 599999);

   setInterval(function () {
   	peoples = 0;
   }, 1000000);

   window.setInterval(
    function () {
    	tenpeoples +=(90 / 60);
        $('.tenpeoples').css({'top': -tenpeoples});
    }, 60000);

   setInterval(function () {
   	tenpeoples = 0;
   }, 60000000);

   window.setInterval(
    function () {
    	hungredpeoples +=1;
        $('.hungredpeoples').css({'top': -hungredpeoples});
    }, 6000000);
   window.setInterval(
    function () {
    	thouthendpeoples +=1;
        $('.thouthendpeoples').css({'top': -thouthendpeoples});
    }, 6000000000);

	// setInterval(function () {
	// 	deg = -1;
	// }, 5999);

	});


$(function () {

	// $(document).ready(function() {
		/*--- global animations init ---*/
		/*---------------------------------------------------------------------*/
		Animation.initGlobalAnimations({
			container: 'body',
			selfTriggeredElems: {
				el1: {
					selector: '.header',
					triggerHook: 1,
					class: 'is-animated'
				},
				el2: {
					selector: '.startscreen',
					triggerHook: 1,
					class: 'is-animated'
				},
				el3: {
					selector: '.info',
					triggerHook: 1,
					class: 'is-animated'
				},
				el4: {
					selector: '.slider',
					triggerHook: .9,
					class: 'is-animated'
				},

			}
		});

		Animation.initGlobalAnimations({
			container: '.layout-big',
			selfTriggeredElems: {
				el1: {
					selector: '.slider',
					triggerHook: .9,
					class: 'is-animated'
				},
				el2: {
					selector: '.photo',
					triggerHook: .9,
					class: 'is-animated'
				},
				el3: {
					selector: '.wrap',
					triggerHook: .9,
					class: 'is-animated'
				},
				el4: {
					selector: '.quote',
					triggerHook: .9,
					class: 'is-animated'
				},
				el5: {
					selector: '.illnes__item',
					triggerHook: .96,
					class: 'is-animated'
				},

			}
		});

	});


var Animation = new AnimationClass();

function AnimationClass() {
	var globalScope = this;

	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
	this.initGlobalAnimations = function(opt) {
		var controller = new ScrollMagic.Controller();

		var $container = $(opt.container);

		var selfTriggeredElems = opt.selfTriggeredElems;

		if($container.hasClass('is-animated')) {
			$.each(selfTriggeredElems, function(index, value) {
				$(value.selector).each(function() {
					new ScrollMagic.Scene({triggerElement: this, triggerHook: value.triggerHook, reverse: false})
						.setClassToggle(this, value.class)
						.addTo(controller);
				});
			});
		}
	}

}