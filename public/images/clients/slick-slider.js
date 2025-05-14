$("#home-banner").slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  arrows: false,
});
$("#home-update-banner").slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  arrows: false,
});
$(".home-update-banner").slick({
  infinite: true,
  autoplay: true,
  speed: 100,
  fade: true,
  cssEase: "linear",
  arrows: false,
});
$(".footer-slider").slick({
  infinite: true,
  autoplay: true,
  speed: 300,
  fade: true,
  loop: true,
  cssEase: "linear",
  arrows: true,
});
$(".urban_lakes_banner").slick({
  infinite: true,
  autoplay: true,
  speed: 800,
  // fade: true,
  cssEase: "linear",
  arrows: true,
});

$(".urban_lakes_construction").slick({
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  speed: 800,
  arrows: false,
  responsive: [
    {
      breakpoint: 510,
      settings: {
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
$(".testi-slider").slick({
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  speed: 800,
  dots: true,
  arrows: false,
});
// Ranajy saha script added for prakriti
$(document).ready(function () {
  $(".niasliding").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 2,
        },
      },
      {
        dots: false,
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$(document).ready(function () {
  $(".niasliding2").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 2,
        },
      },
      {
        dots: false,
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// Ranajy saha script added for prakriti

$(document).ready(function () {
  $(".prksliding").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: true,
          slidesToScroll: 2,
        },
      },
      {
        dots: false,
        breakpoint: 510,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
	
	$(".morya-press-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 2,
        },
      },
      {
        dots: false,
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
$(document).ready(function () {
  $(".feature").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 2,
        },
      },
      {
        dots: false,
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});


$(".completed-projects").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
	focusOnSelect: false,
	pauseOnHover: false,
      pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
		pauseOnFocus: false,
        },
      },
      {
        dots: false,
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
			pauseOnFocus: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
$(".urban_lakes_amenities").slick({
	autoplay:true,
	infinite:true,
	speed:500,
	cssEase: "linear",
	arrows:true,
	slidesToShow:3,
	pauseOnHover:false,
	pauseOnFocus:false,
	responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
        },
      },
      {
        dots: false,
        breakpoint: 510,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
})
$(".all-amenities").slick({
	autoplay:true,
	infinite:true,
	speed:500,
	cssEase: "linear",
	arrows:true,
	slidesToShow:7,
	responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: true,
          slidesToScroll: 2,
        },
      },
      {
        dots: false,
        breakpoint: 510,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
})
$(".amenities-gallery-slider").slick({
	autoplay:true,
	infinite:true,
	speed:500,
	cssEase: "linear",
	arrows:true,
	slidesToShow:3,
	pauseOnHover:false,
	pauseOnFocus:false,
	responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
        },
      },
      {
        dots: false,
        breakpoint: 510,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
})
$(".stats-slider").slick({
	autoplay:true,
	infinite:true,
	speed:500,
	cssEase: "linear",
	arrows:true,
	slidesToShow:5,
	centerMode: true,
	pauseOnHover:false,
	pauseOnFocus:false,
	responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
			arrows:true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: true,
          slidesToScroll: 2,
			arrows:true,
        },
      },
      {
        dots: false,
        breakpoint: 510,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
			arrows:true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
})

function initStatsSlider() {
  const $slider = $(".stats-slider-crown");

  if (window.innerWidth <= 510) {
    if (!$slider.hasClass("slick-initialized")) {
      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
      });
    }
  } else {
    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("unslick");
    }
  }
}

$(document).ready(function () {
  initStatsSlider();
});

$(window).on("resize", function () {
  initStatsSlider();
});



$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() <= 1024) {
      if (!$(".testimonial-slider").hasClass("slick-initialized")) {
        $(".testimonial-slider").slick({
          autoplay: true,
          infinite: true,
          speed: 500,
          cssEase: "linear",
          arrows: true,
          slidesToShow: 2,
          pauseOnHover: false,
          pauseOnFocus: false,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
              },
            },
            {
              breakpoint: 510,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
              },
            },
          ],
        });
      }
    } else {
      if ($(".testimonial-slider").hasClass("slick-initialized")) {
        $(".testimonial-slider").slick("unslick");
      }
    }
  }

  // Initialize on page load
  initializeSlick();

  // Re-check on window resize
  $(window).on("resize", function () {
    initializeSlick();
  });
});
