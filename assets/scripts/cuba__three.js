p = $('.popup_overlay')
$('#popup_toggle').click(function() {
    p.css('display', 'block')
});
p.click(function(event) {
    e = event || window.event
    if (e.target == this) {
        $(p).css('display', 'none')
    }
});
$('.popup_close').click(function() {
    p.css('display', 'none')
});

//модальное окно для видео
h = $('.video_overlay')
$('#video_toggle').click(function() {
    h.css('display', 'block')
});
h.click(function(event) {
    e = event || window.event
    if (e.target == this) {
        $(h).css('display', 'none')
    }
});
$('.popup_close').click(function() {
    h.css('display', 'none')
});
