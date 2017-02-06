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
	if (event.data == YT.PlayerState.PLAYING) {
    console.log(event.target.h)
    $('#' + event.target.h.id).parents('.video-section').addClass('video-is-playing');
  } else {
    $('#' + event.target.h.id).parents('.video-section').removeClass('video-is-playing');
  }
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

  /* Fullpage conf */
  $('#fullpage').fullpage({
    anchors: ['home', 'video-trailer', 'synopsis', 'casting', 'team', 'video-makingof'],
    menu: "#menu",
    afterLoad: function(anchorLink, index){
      switch (index) {
        case 2:
        $('#trailer-section .trailer-wrapper').addClass('fade-in');
          break;
        case 3:
          $('#synopsis-section .wrapper').addClass('fade-in');
          break;
        case 4:
          $('#casting-section .wrapper').addClass('fade-in');
          break;
        case 5:
          $('#team-section .wrapper').addClass('fade-in');
          break;
        case 6:
          $('#makingof-section .makingof-wrapper').addClass('fade-in');
          break;
      }
    }
  });

  /* Hamburger menu */
  $('nav .hamburger').click(function () {
    var self = $(this);
    self.toggleClass('open');
    if (self.hasClass('open')) {
      $('nav ul').fadeIn().css('display', 'flex');
      $('nav ul li a').click(function () {
        self.removeClass('open');
        $('nav ul').fadeOut();
      })
    } else {
      $('nav ul').fadeOut();
    }
  })
});
