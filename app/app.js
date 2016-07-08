'use strict';
require(['common'], function(common) {
    require([
        'home/home',
        'aboutme/about',
        'list/list'
    ], function(home, about) {
        angular.module('demoApp', ['ui.router', 'home', 'about', 'list']);

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