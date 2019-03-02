'use strict';


var angularModule = ApplicationConfiguration.registerModule('core', ['Scope.onReady']);

angular.module('core').config(['$urlRouterProvider', '$httpProvider', function ($urlRouterProvider, $httpProvider) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('404-not-found');

}])