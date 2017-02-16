angular.module('myApp')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './content/albumList/albumList.content.html',
        controller: 'albumListController'
    })
}])
