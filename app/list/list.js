'use strict';
define(function() {
    angular.module('list', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('list', {
                url: "/list",
                templateUrl: "list/list.html",
                controller: "ListCtrl"
            })
            .state('list.phone', {
                url: "/:phoneId",
                params: {
                    phoneIndex: -1
                },
                templateUrl: "list/phone.html",
                controller: function($scope, $stateParams) {
                    $scope.phoneId = $stateParams.phoneId;
                    var index = $stateParams.phoneIndex;
                    $scope.phone = $scope.phoneList[index];
                }
            });
    })
    .controller('ListCtrl', function($scope) {
        console.log("ListCtrl");
        $scope.phoneList = [
            {
                id: 1,
                name: "iPhone 5",
                price: 4000
            },
            {
                id: 2,
                name: "iPhone 6",
                price: 5000
            },
            {
                id: 3,
                name: "iPhone 6S",
                price: 6000
            }
        ];
    });
});