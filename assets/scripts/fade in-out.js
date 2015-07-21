
$(document).ready(function() {
for(var i=0; i<$('#sc>div').length; i++){
    $('#sc>div').eq(''+i+'').addClass('ns'+i+'');
}

$('.f:first').addClass('ak');
function move_right() {
    $('#sc').find('.ak').hide().removeClass('ak').next().fadeIn(500).addClass('ak');
}
function move_left() {
    $('#sc').find('.ak').hide().removeClass('ak').prev().fadeIn(500).addClass('ak');
}

function hide_arrow() {
    if ($('.f:first').hasClass('ak')) {
        $('.left').show();
    }
   
    if ($('.f:last').hasClass('ak')) {
        $('.right').show();
    }   
}

$('#sc f:last').clone().prependTo('#sc');   //  опи€ последнего слайда помещаетс€ в начало.
 $('#sc f').eq(1).clone().appendTo('#sc');
  
hide_arrow();
$('.left').click(function() {
    move_left();
    hide_arrow();
});

$('.right').click(function() {
    move_right();
    hide_arrow();
});

});
