'use strict';

// create our angular app and inject ui.bootstrap
angular.module('TemplateApp', [])

.controller('mainCtrl', function($scope) {

  $scope.message = "message from Angular.";
  $scope.hideIfAngular = false;
  
  $scope.echo_test = function(){
    console.log("click")
  };
});
