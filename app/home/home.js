define(['home/homeCtrl', 'home/homeService'], function(homeCtrl, homeService) {
  angular.module('home', [])
    .config(["$stateProvider", function($stateProvider) {
      $stateProvider
        .state('home', {
          url: "/home",
          templateUrl: "home/home.html",
          controller: "HomeCtrl"
        })
        .state('home.timeline', {
          url: "/timeline",
          templateUrl: "home/views/timeline.html"
        })
        .state('story', {
          parent: "home",
          url: "/story",
          templateUrl: "home/views/story.html"
        });
    }])
    .controller('HomeCtrl', homeCtrl)
    .factory('HomeService', homeService);
    homeCtrl.$inject = ["$scope", "HomeService"];
    homeService.$inject = ["$http"];
});