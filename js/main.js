// GET Youtube Iframe API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Player size
var playerRatio;
var playerWidth;
var playerHeight;
var trailer;
var makingof;

function init(){
	playerRatio = 16/9;
	playerWidth = window.innerWidth >= 640 ? window.innerWidth*0.7 : window.innerWidth; 
	playerHeight = playerWidth/playerRatio;
}

window.onresize = function(event){
	init();
	updatePlayersSize();
};

// YOUTUBE IFRAME API
function onYouTubeIframeAPIReady() {

    trailer = new YT.Player('trailer', {
        height: playerHeight,
        width: playerWidth,
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

    makingof = new YT.Player('makingof', {
        height: playerHeight,
        width: playerWidth,
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
}
function onPlayerReady(event) {
    //...
}
function onPlayerStateChange(event) {
	//...
}

function updatePlayersSize(player){
	let trailerDom = document.getElementById("trailer");
	trailerDom.style.width = playerWidth+"px";
	trailerDom.style.height = playerHeight+"px";
	let makingofDom = document.getElementById("makingof");
	makingofDom.style.width = playerWidth+"px";
	makingofDom.style.height = playerHeight+"px";
}

$(document).ready(function () {
  init();
  $('#fullpage').fullpage({
    menu: "#menu"
  });
});
