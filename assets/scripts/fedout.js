
$(document).ready(function() {
for(var i=0; i<$('#sc>div').length; i++){
    $('#sc>div').eq(''+i+'').addClass('ns'+i+'');
}
for(var i=0; i<$('#nav>div').length; i++){
    $('#nav>div').eq(''+i+'').addClass('s'+i+'');
}
$('.f:first').addClass('ak');
function move_right() {
    $('#sc').find('.ak').hide().removeClass('ak').next().fadeIn(2000).addClass('ak');
}
function move_left() {
    $('#sc').find('.ak').hide().removeClass('ak').prev().fadeIn(2000).addClass('ak');
}
function hide_arrow() {
    if ($('.f:first').hasClass('ak')) {
        $('.left').show();
    }
   
    if ($('.f:last').hasClass('ak')) {
        $('.right').show();
    }   
}
hide_arrow();
$('.left').click(function() {
    move_left();
    hide_arrow();
});
$('.right').click(function() {
    move_right();
    hide_arrow();
});
$('#nav>div').click(function(){
    var clickedTab = $(this).attr('class');
    $('#sc>div.n'+clickedTab+'').fadeIn(2000).addClass('ak').siblings().hide().removeClass('ak');
    hide_arrow();
});
});
