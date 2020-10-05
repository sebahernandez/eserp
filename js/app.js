/* particles.js configuracion */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },

    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
});


//Aplicar sombra al realizar el scroll//
$(function () {
  var navbar = $('.navbar');
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 30) {
      navbar.css('box-shadow', '0px 0px ' + $(window).scrollTop() + 'px rgba(0, 0, 0, 0.4)');
    } else {
      navbar.css('box-shadow', '0px 0px 30px rgba(0, 0, 0, 0.4)');
    }
  });
})

// Video JS
var options = {
 controls:true,
 autoplay:false,
 loop:false,
};
var player = videojs('my-video', options, function onPlayerReady() {
  videojs.log('Su video ya esta listo!');
});

/* Inicializar el slider */

  new Splide( '.splide',{

    type   : 'loop',
    perPage: 5,
    arrows:false,
    autoplay:true,
    speed:1500,
    padding:0,
    rewind: true,
    focus:'center',
    padding: {
      left : '0px',
      right: '0px',
    },

  } ).mount();
  
 