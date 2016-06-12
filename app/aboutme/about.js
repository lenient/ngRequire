'use strict';
define([], function() {
    angular.module('about', [])
    .config(["$stateProvider", function($stateProvider) {
        $stateProvider
            .state('about', {
                url: "/aboutme",
                templateUrl: "aboutme/about-me.html",
                controller: "AboutCtrl"
            });
    }])
    .controller('AboutCtrl', ["$scope", function($scope) {
        console.log("AboutCtrl");
        $scope.pageName = "About";
    }]);
});