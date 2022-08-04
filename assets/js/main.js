/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : Grow - Agency Solution
 * Author : SoftFounder
 * Author URI : http://SoftFounder.net/
 *
 * -----------------------------------------------------------------------------
 *
 **/

(function ($, window, document) {
    "use strict";


    $(document).on('ready', function(){

		/*----------------------------------------------------*/
		/*  MOBILE MENU
		/*---------------------------------------------------*/

		//Submenu Dropdown Toggle
		if($('.cm-main-header li.dropdown ul').length){
			$('.cm-main-header li.dropdown').append('<div class="dropdown-btn"><i class="icofont-simple-down"></i></div>');
			
			//Dropdown Button
			$('.cm-main-header li.dropdown .dropdown-btn').on('click', function() {
				$(this).prev('ul').slideToggle(500);
			});
			
			//Disable dropdown parent link
			$('.cm-main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
				e.preventDefault();
			});
			
		}
		//Mobile Nav Hide Show
		if($('.cm-mobile-menu').length){
				
			$('.cm-mobile-menu .menu-box').mCustomScrollbar();
			
			var mobileMenuContent = $('.cm-main-header .nav-outer .cm-main-menu').html();
			$('.cm-mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
			

			//Menu Toggle Btn
			$('.cm-mobile-menu .menu-backdrop,.cm-mobile-menu .close-btn').on('click', function() {
				$('body').removeClass('cm-mobile-menu-visible');
			});
			//Dropdown Button
			$('.cm-mobile-menu li.dropdown .dropdown-btn').on('click', function() {
				$(this).toggleClass('open');
				$(this).prev('ul').slideToggle(500);
			});
			
			//Dropdown Button
			$('.cm-mobile-menu li.dropdown .dropdown-btn').on('click', function() {
				$(this).toggleClass('open');
				$(this).prev('.mega-menu').slideToggle(500);
			});
			
			//Menu Toggle Btn
			$('.mobile-nav-toggler').on('click', function() {
				$('body').addClass('cm-mobile-menu-visible');

			});
			
		}

		$('.review-area').slick({
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: true,
			prevArrow: '<button class="slick-arrow slick-prev"><svg width="16" height="36" viewBox="0 0 16 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1875 10.125V0L0 14.0625V21.0938L15.1875 36V25.875L7.03125 18.8438V16.875L15.1875 10.125Z" fill="#CDCDCD"/></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg width="16" height="36" viewBox="0 0 16 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.125V0L15.1875 14.0625V21.0938L0 36V25.875L8.15625 18.8438V16.875L0 10.125Z" fill="#CDCDCD"/></svg></button>',
			responsive: [{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			   breakpoint: 768,
			   settings: {
				  arrows: true,
				  slidesToShow: 1,
				  slidesToScroll: 1
			   }
			},
			{
				breakpoint: 576,
				settings: {
				   arrows: false,
				   autoplay: true,
				   slidesToShow: 1,
				   slidesToScroll: 1
				}
			}]
		});

    });

   
})(jQuery, window, document);