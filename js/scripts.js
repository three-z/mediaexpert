$(document).ready(function() {

	$('.home-slider__list').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
	});

	$('.on-tv-slider__list').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true
	});

	$('.on-radio-slider__list').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true
	});

	$('.last-news-slider__list').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true
	});

	$('.clients-slider__list').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true
	});
});

$(window).bind('load', function() {

	$('.js-gradient').pxgradient({
		step: 2,
		colors: ['#0087d9','#005dbd'],
		dir: 'y'
	});

	$('.js-dotted').dotdotdot();
});