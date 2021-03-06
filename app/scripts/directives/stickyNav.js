'use strict';

angular.module('telesurApp')
  .directive("sticky", function ($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 100) {
          element.addClass('fixed');

          angular.element( document.querySelector( 'body' ) ).addClass('fixed');
          angular.element( document.querySelector( '#subfooter' ) ).addClass('bottomFixed');

          var footerOffset = angular.element( document.querySelector( 'footer' ) ).offset().top;
          var screenHeight = $window.innerHeight;
          var bottomScreenOffset = this.pageYOffset + screenHeight;

          if (bottomScreenOffset >= footerOffset){
            angular.element( document.querySelector( '#subfooter' ) ).removeClass('bottomFixed');
          }
        } else {
          element.removeClass('fixed');

          angular.element( document.querySelector( 'body' ) ).removeClass('fixed');
          angular.element( document.querySelector( '#subfooter' ) ).removeClass('bottomFixed');
        }
      });
    };
  });
