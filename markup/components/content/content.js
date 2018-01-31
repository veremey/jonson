
$( function() {
    $( document ).tooltip({
      items: ".details",
      content: function() {
          var $text = $(this).children('.details__box').html();
          return $text;
        },
        position: {
          my: "center bottom-20",
          at: "center top"
        }
    });
  } );
