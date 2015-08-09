//модальное окно для картинки
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
 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src ="https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '480',
          width: '740',
          videoId: 'iP8D-InacB8',
          events: {
           // 'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      var stopButton = document.getElementById("stop-button");
      stopButton.addEventListener("click", function stopVideo() {
        player.stopVideo();
      });
      
