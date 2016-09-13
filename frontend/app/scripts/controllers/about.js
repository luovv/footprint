'use strict';

/**
 * @ngdoc function
 * @name vvgdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vvgdApp
 */
angular.module('vvgdApp')
  .controller('AboutCtrl', 
  	['$scope', function($scope) {
        $scope.test = 'Hola!';
    }]
  	// function () {
	  //   this.awesomeThings = [
	  //     'HTML5 Boilerplate',
	  //     'AngularJS',
	  //     'Karma'
	  //   ];
	  //   this.test="abcdefg";
	  // }
  );
