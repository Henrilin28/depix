/**
 * Created by sajarora on 9/9/16.
 */
(function(){
  'use strict';

  angular.module('app').config(AppRoutes);


  AppRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];
  function AppRoutes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      views: {
        content: {
          templateUrl: 'modules/home/home.view.html',
          controller: 'HomeCtrl',
          controllerAs: 'ctrl'
        }
      }
    });
  }
})();
