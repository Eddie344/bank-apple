	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
		loop: false,
		breakpoints: {
			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
			},
			1023: {
				noSwiping: false,
				allowSlidePrev: false,
				allowSlideNext: false
			},
		},
	})