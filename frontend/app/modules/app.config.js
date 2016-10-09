(function(){
  'use strict';

  /**
   * @ngdoc overview
   * @name Kiwi Studio
   * @description
   * # Kiwi Studio
   *
   * Main module of the application.
   */
  angular
    .module('app')
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange')
    });
})();
