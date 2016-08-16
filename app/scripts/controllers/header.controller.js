'use strict';

/**
 * @ngdoc function
 * @name telesurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the telesurApp
 */
angular.module('telesurApp')
  .controller('HeaderCtrl', ['$scope', 'activeDomain', '$state', function ($scope, activeDomain, $state) {
    $scope.activeDomain = activeDomain.name;

    $scope.isHomeState = true;

    if($state.current.name === 'root.news'){
      $scope.isHomeState = false;
    }

    $scope.toggleMenu = function(){
      activeDomain.toggleMenu();
    };
    $scope.toggleLiveSignal = function(){
      activeDomain.toggleLiveSignal();
    };

    $scope.changeDomain = function(domainName){
      activeDomain.change(domainName);
    };

    $scope.menu = function(){
      return activeDomain.menu;
    };
    $scope.liveSignal = function(){
      return activeDomain.liveSignal;
    };

    $scope.isActive = function(domainName){
      if(activeDomain.name === domainName){
        return true;
      }
    };
  }]);