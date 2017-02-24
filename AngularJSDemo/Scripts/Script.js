/// <reference path="angular.min.js" />

//create module
//var myApp = angular.module("myModule", []);

//create controller
//var myController = function ($scope) {
//  $scope.message = "AngularJS tutorial";
//  var employee = {
//    firstname: "Abhijit",
//    lastname: "Salunke",
//    gender: "Male"
//  };

//  $scope.employee = employee;
//}

//register controller with module
//myApp.controller("myController1", myController);

//single line expression to create module, controller and register controller with module.
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    $scope.message = "AngularJS tutorial";
    var employee = {
      firstname: "Abhijit",
      lastname: "Salunke",
      gender: "Male"
    };

    var country = {
      name: "USA",
      flag: "Images/USA.png"
    };

    $scope.employee = employee;
    $scope.country = country;
  });