;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var portraitResize = function() {
		var $portrait = $('#index-portrait'),
			winHeight = $(window).height();

		if ( $portrait.data('minheight') < winHeight )  {
			$portrait.height(winHeight);
		}

		$(window).resize(function(){
			var $portrait = $('#index-portrait'),
				winHeight = $(window).height();

			if ( $portrait.data('minheight') < winHeight )  {
				$portrait.height(winHeight);
			}
		})
	};

 	var toggleAside = function() {
		$('.js-index-toggle > a').on('click', function(event){
			$('body').toggleClass('index-showaside');
			$(this).toggleClass('index-active');
			// event.preventDefault();

			$('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 700, 'easeInOutExpo');
		    return false;

		});
	};

	

	// Animate Bio
	var animateBio = function() {
		if ( $('#index-bio-inner').length > 0 ) {
			$('#index-bio-inner .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};

	// Animate Intro
	var animateBioIntro = function() {
		if ( $('#index-bio-intro').length > 0 ) {
			$('#index-bio-intro .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};
	var animateIntro = function() {
		if ( $('#index-intro').length > 0 ) {
			$('#index-intro .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};


	// Animate Social
	var animateSocial = function() {
		if ( $('#social-animate').length > 0 ) {
			$('#social-animate .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};

	

	// Waypoints 
	var bioWayPoint = function() {
		if ($('#index-bio-inner').length > 0 ) {
			$('#index-bio-inner').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateBio , 200);
					setTimeout( animateBioIntro , 200);
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};
	var introWayPoint = function() {
		if ($('#index-portrait').length > 0 ) {
			$('#index-portrait').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateIntro , 200);
					setTimeout( function(){
						$('#index-toggle').addClass('fadeInLeft animated')	
					}, 2200);
					
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	

	
	$(function(){
		toggleAside();
		portraitResize();

		bioWayPoint();
		introWayPoint();
	});


}());