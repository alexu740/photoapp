angular.module('myApp')
    .directive('navbar', function() {
        return {
            restrict: 'E',
            templateUrl: './directives/header/header.html'
        }
    })
