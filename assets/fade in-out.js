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
            $('.left').unbind('click');
        } 
		else {
			$('.left').trigger('click');
		}
                 
    }   
    hide_arrow();    
    $('.left').on('click', function(event) {
        move_left();
        //event.stopPopagation();
        //hide_arrow();
    	//return false;//останавливаем всплытие других событий
    });
    $('.right').on('click',function() {
        move_right();
		//hide_arrow();
        //show_arrow();
         
    	//return false;//останавливаем всплытие других событий
    });

    function show_arrow() {
       if ($('.f').hasClass('ak')) {
            $('.right').bind('click');
        }          
    } 
});