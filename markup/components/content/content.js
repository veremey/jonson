
$( function() {
    $( document ).tooltip({
      items: "[title]",
      content: function() {
        var element = $( this );
        if ( element.is( "[title]" ) ) {
          return element.child('.details_info');
        }
      }
    });
  } );
