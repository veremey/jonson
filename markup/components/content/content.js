
$(document).ready(function() {
  /*-  js-more -*/
  $('.js-more').on('click touchstart', function (e) {
    e.preventDefault();
    var $this = $(this);
    if(!$this.closest('.more__mob').hasClass('is-active')){
      $this.text('Скрыть').closest('.more__mob').addClass('is-active');
      $this.closest('.more__mob').find('.more__mob_box').show();
    } else {
      $this.text('Далее').closest('.more__mob').removeClass('is-active');
      $this.closest('.more__mob').find('.more__mob_box').hide();
    }
  });

  /* -- tooltips   -- */

  $('.details').qtip({
    id: 'details__tooltip',
    content: {
      text: function() {
        var $text = $(this).children('.details__box').html();
        return $text;
      },
      button: true
    },
    position: {
      my: "bottom-20 center",
      at: "top center",
      viewport: true
    },
    hide: {
      event: 'click mouseleave',
    }
  });

});