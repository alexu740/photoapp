var myApp = angular.module('myApp', ['ui.router', 'angularMoment'])
myApp.run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
})
myApp.controller('mainController', ['$scope', '$state', function($scope, $state) {
        console.log("mainController loaded")
    }])
