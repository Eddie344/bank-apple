	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
		loop: false,
		slidesPerView: 'auto',
		breakpoints: {
			1023: {
				noSwiping: false,
				allowSlidePrev: false,
				allowSlideNext: false
			},
		},
	})
