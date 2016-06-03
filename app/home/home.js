define(['home/homeCtrl', 'home/homeService'], function(homeCtrl, homeService) {
  angular.module('home', [])
    .config(function($stateProvider) {
      $stateProvider
        .state('home', {
          url: "/home",
          templateUrl: "home/home.html",
          controller: "HomeCtrl"
        })
        .state('timeline', {
          parent: "home",
          url: "/timeline",
          templateUrl: "home/views/timeline.html"
        })
        .state('story', {
          parent: "home",
          url: "/story",
          templateUrl: "home/views/story.html"
        });
    })
    .controller('HomeCtrl', homeCtrl)
    .factory('HomeService', homeService);
});