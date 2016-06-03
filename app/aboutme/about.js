define([], function() {
  angular.module('about', [])
    .config(function($stateProvider) {
      $stateProvider
      .state('about', {
        url: "/aboutme",
        templateUrl: "aboutme/about-me.html",
        controller: "AboutCtrl"
      });
    })
    .controller('AboutCtrl', function($scope) {
      $scope.pageName = "About";
    });
});