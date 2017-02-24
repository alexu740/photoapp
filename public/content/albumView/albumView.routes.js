angular.module('myApp')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('album', {
        url: '/album/:id',
        templateUrl: './content/albumView/albumView.content.html',
        controller: 'albumViewController'
    })
}])
