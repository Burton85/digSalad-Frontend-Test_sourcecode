export function YTPlayer(_dom, _id) {
  // if (YT == undefined) {
  //   var tag = document.createElement('script');

  //   tag.src = 'https://www.youtube.com/iframe_api';
  //   var firstScriptTag = document.getElementsByTagName('script')[0];
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  //   onYouTubeIframeAPIReady;
  // }
  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player(_dom, {
      height: '390',
      width: '680',
      videoId: _id,
      playerVars: {
        playsinline: 1,
        autoplay: 1,
        mute: 1,
        loop: 1,
        rel: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      event.target.seekTo(0);
      player.playVideo();
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
  return {
    onYouTubeIframeAPIReady,
    onPlayerReady,
    stopVideo,
    onPlayerStateChange
  };
}
