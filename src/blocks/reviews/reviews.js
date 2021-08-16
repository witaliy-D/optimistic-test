// eslint-disable-next-line no-redeclare,no-unused-vars
/* global document */

import {Navigation, Pagination, Swiper}from 'swiper';
Swiper.use([Navigation, Pagination]);

(function () {
  const breakpoint = window.matchMedia( '(min-width:992px)' );
  let reviewsSwiper;
  const enableSwiper = function () {
    reviewsSwiper = new Swiper('.reviews__inner', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      pagination: {
        el: '.reviews__pagination',
        type: 'bullets',
        clickable: true
      }
    });
  };


  const breakpointChecker = function () {
    if ( breakpoint.matches === true ) {
      // eslint-disable-next-line no-undefined,no-undef
      if ( reviewsSwiper !== undefined ) {reviewsSwiper.destroy( true, true );}
    }else if ( breakpoint.matches === false ) {
      return enableSwiper();
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();
