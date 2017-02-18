

$(document).ready(function () {
  var iconArrow = '<div><svg width="27px" height="16px" viewBox="1286 2680 27 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch --><desc>Created with Sketch.</desc><defs></defs><path d="M1293.22189,2695.86204 C1293.39402,2696.04168 1293.6882,2696.04297 1293.85393,2695.88293 C1294.02238,2695.7203 1294.03473,2695.42177 1293.87482,2695.25088 L1287.47201,2688.4454 L1312.22198,2688.4454 C1312.46745,2688.4454 1312.66643,2688.24643 1312.66643,2688.00096 C1312.66643,2687.7555 1312.46745,2687.55652 1312.22198,2687.55652 L1287.47201,2687.55652 L1293.87482,2680.75099 C1294.03486,2680.5801 1294.025,2680.27895 1293.85393,2680.11895 C1293.683,2679.95895 1293.40793,2679.95499 1293.22189,2680.13984 L1286.11072,2687.69536 C1285.9417,2687.90336 1285.98615,2688.15829 1286.11072,2688.30656 L1293.22189,2695.86204 Z" id="Shape" stroke="none" fill="#8D9DB0" fill-rule="evenodd" transform="translate(1299.333214, 2688.000000) rotate(180.000000) translate(-1299.333214, -2688.000000) "></path></svg></div>'

  $('li[data-menuanchor="home"] a').hide();

  /* Fullpage conf */
  $('#fullpage').fullpage({
    anchors: ['home', 'story', 'casting', 'team', 'makingof'],
    menu: "#menu",
    afterRender: function() {
      $('.fp-controlArrow.fp-prev, .fp-controlArrow.fp-next').html(iconArrow);
    },
    afterLoad: function(anchorLink, index){
      switch (index) {
        case 1:
          $('nav ul li a').addClass('white-link');
          $('li[data-menuanchor="home"] a').fadeOut().removeClass('white-link');
          break;
        case 2:
          $('#story-section .wrapper').addClass('fade-in');
          $('nav ul li a').removeClass('white-link');
          $('li[data-menuanchor="home"] a').fadeIn();
          $('li[data-menuanchor="home"] a img').attr('src', 'images/logo/logo.png');
          break;
        case 3:
          $('#casting-section .wrapper').addClass('fade-in');
          $('nav ul li a').removeClass('white-link');
          $('li[data-menuanchor="home"] a').fadeIn();
          $('li[data-menuanchor="home"] a img').attr('src', 'images/logo/logo.png');
          break;
        case 4:
          $('#team-section .wrapper').addClass('fade-in');
          $('nav ul li a').removeClass('white-link');
          $('li[data-menuanchor="home"] a').fadeIn();
          $('li[data-menuanchor="home"] a img').attr('src', 'images/logo/logo.png');
          break;
        case 5:
          $('#makingof-section .makingof-wrapper').addClass('fade-in');
          $('nav ul li a').addClass('white-link');
          $('li[data-menuanchor="home"] a').fadeIn();
          if ($(window).width() > 1024) $('li[data-menuanchor="home"] a img').attr('src', 'images/logo/logo_blanc.png');
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

  /* Play button click */
  function initIframe(iframe) {    
    var iframeSection = iframe + '-section';
    var iframeId = iframe + '-iframe';

    $('.icon-cross').fadeIn();
    $('.play-buttons, #home-section img, .socials, nav ul li a').hide();
    $('#' + iframeSection).fadeIn();

    var iframe = new Vimeo.Player(iframeId, {
      byline: true
    });

    iframe.ready().then(function () {
      iframe.play();
    })

    function unloadIframe () {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      };

      $('.icon-cross').hide();
      $('.play-buttons, #home-section img, .socials, nav ul li a:not(a[href="#home"])').fadeIn();
      $('#' + iframeSection).hide();
      iframe.unload();      
    }

    iframe.on('ended', function() {
      unloadIframe();
    });

    $('.icon-cross').click(function () {
      unloadIframe();
    })
  }

  $('#trailer-button').click(function () {
    initIframe('trailer');
  })

  $('#movie-button').click(function () {
    initIframe('movie');
  })

  $('#makingof-button').click(function () {
    initIframe('makingof');
  })

  /* vimeo event */
  // var movie = new Vimeo.Player('movie-iframe', {
  //   byline: true
  // });
  // var makingof = new Vimeo.Player('makingof-iframe', {
  //   byline: true
  // });

  // trailer.on('ended', function() {
  //   $('.play-button, #home-section img').fadeIn();
  //   $('#trailer-section').hide();
  //   trailer.setCurrentTime(0);
  // });
  // movie.on('ended', function() {
  //   $('.play-button, #home-section img').fadeIn();
  //   $('#movie-section').hide();
  //   movie.setCurrentTime(0);
  // });
  // makingof.on('ended', function() {
  //   $('.play-button, #home-section img').fadeIn();
  //   $('#makingof-section').hide();
  //   makingof.setCurrentTime(0);
  // });

  // trailer.ready().then(function () {
  //   console.log('ready')
  // })

  /* Casting wrapper hover */
  if ($(window).width() > 1024) {
    $('.casting-wrapper').hover(function () {
      $('.casting-wrapper').addClass('not-hover');
      $(this).addClass('hover').removeClass('not-hover');
      $(this).children('.casting-content').show();
    }, function () {
      $('.casting-wrapper').removeClass('hover').removeClass('not-hover');
      $(this).children('.casting-content').hide();
    });    
  }

  $('#makingof-section .makingof-img').each(function() {
    $(this).css('background-image', 'url(images/makingof/' + $(this).attr('id') + '.png)')
  })
});
