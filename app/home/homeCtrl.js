'use strict';
define(function() {
    return function($scope, HomeService) {
        $scope.pageName = "home";
        
        HomeService.getPageName().then(
            function success(response) {
                console.log(response);
            },
            function error(error) {
                console.log(error);
            }
        );
    };
});