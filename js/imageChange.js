var fixed = false;
$(document).scroll(function() {
    if( $(this).scrollTop() >= 100 ) {
        if( !fixed ) {
            fixed = true;
            $('.navbar-default').css({background: rgba(248, 248, 248, 1)});
        }
    } else {
        if( fixed ) {
            fixed = false;
            $('.navbar-default').css({background: rgba(248, 248, 248, 0)});
        }
    }
});​