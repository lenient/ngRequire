'use strict';
require(['common'], function(common) {
    require([
        'home/home',
        'aboutme/about'
    ], function(home, about) {
        angular.module('demoApp', ['ui.router', 'home', 'about']);

        angular.module('demoApp')
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');
        });

        // Bootstraps app
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['demoApp']);
        });
    });
});