'use strict';
define(function() {
    return function($http) {
        return {
            getPageName: function() {
                return $http.jsonp("https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero");
            }
        }
    };
});